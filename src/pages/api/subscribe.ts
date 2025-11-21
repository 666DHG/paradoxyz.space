import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, locals }) => {
  const formData = await request.formData();
  const name = formData.get('name');
  const email = formData.get('email');

  if (!email || typeof email !== 'string') {
    return new Response(JSON.stringify({ error: "Email is required" }), { status: 400 });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return new Response(JSON.stringify({ error: "Invalid email format" }), { status: 400 });
  }

  // Access D1 via locals.runtime.env
  // @ts-ignore
  const runtime = locals.runtime;
  
  if (!runtime || !runtime.env || !runtime.env.DB) {
    return new Response(JSON.stringify({ 
      error: "Database binding 'DB' not found. Please check Cloudflare Pages settings." 
    }), { status: 500 });
  }

  const db = runtime.env.DB;

  try {
    const info = await db.prepare(
      "INSERT INTO subscribers (name, email) VALUES (?, ?)"
    ).bind(name, email).run();

    return new Response(JSON.stringify({ success: true, data: info }), { status: 200 });
  } catch (err: any) {
    // Handle unique constraint violation for email
    if (err.message && err.message.includes('UNIQUE constraint failed')) {
       return new Response(JSON.stringify({ error: "Email already subscribed" }), { status: 409 });
    }
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
