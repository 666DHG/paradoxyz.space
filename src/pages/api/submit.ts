import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, locals }) => {
  const formData = await request.formData();
  const text = formData.get('textInput');
  const num = formData.get('numInput');
  const option = formData.get('selectOption');
  const msg = formData.get('message');

  if (!text || !msg) {
    return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
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
      "INSERT INTO submissions (text_content, number_value, select_option, message) VALUES (?, ?, ?, ?)"
    ).bind(text, num, option, msg).run();

    return new Response(JSON.stringify({ success: true, data: info }), { status: 200 });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
