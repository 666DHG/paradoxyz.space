---
title: 'misc'
description: 'wtf'
pubDate: 2019-03-10
author: 'Terminal Theme Authors'
tags: []
---

# Rich Content

## LaTeX

???

## Forms

<form id="subscribeForm" class="p-4 border rounded">
    <fieldset>
    <center><b>欢迎订阅</b></center>
    <center>虽然还没配置好uwu</center>
    <label>昵称: <input type="text" name="name" placeholder="选填 " /></label><br/>
    <label>邮箱: <input type="email" name="email" placeholder="必填 " required /></label><br/>
    <button type="submit">订阅</button>
    </fieldset>
    <div id="result" style="margin-top: 10px;"></div>
</form>

<script>
    const form = document.getElementById('subscribeForm') as HTMLFormElement | null;
    const resultDiv = document.getElementById('result') as HTMLDivElement | null;

    if (form && resultDiv) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        resultDiv.innerText = "Submitting...";

        const formData = new FormData(form);

        try {
        const response = await fetch('/api/subscribe', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            resultDiv.innerText = "已订阅 (●'◡'●)";
            form.reset();
        } else {
            resultDiv.innerText = "Error: " + (data.error || "Unknown error");
        }
        } catch (error) {
        resultDiv.innerText = "网络错误 (っ °Д °;)っ";
        }
    });
    }
</script>

<form id="myForm" class="p-4 border rounded">
  <fieldset>
    <label>Text: <input type="text" name="textInput" placeholder="Type something" required /></label><br/>
    <label>Number: <input type="number" name="numInput" placeholder="Insert number" /></label><br/>
    <label>Select:
      <select name="selectOption">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </select>
    </label><br/>
    <textarea name="message" placeholder="Insert a comment..."></textarea><br/>
    <button type="submit">Submit</button>
  </fieldset>
  <div id="result" style="margin-top: 10px;"></div>
</form>

<script>
  // JavaScript 部分：拦截表单提交，发送给后端
  const form = document.getElementById('myForm');
  const resultDiv = document.getElementById('result');

  form.addEventListener('submit', async (e) => {
    e.preventDefault(); // 阻止页面刷新
    resultDiv.innerText = "Submitting...";

    const formData = new FormData(form);

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        body: formData // 自动处理为 multipart/form-data
      });

      const data = await response.json();

      if (response.ok) {
        resultDiv.innerText = "Success! Data saved.";
        form.reset(); // 清空表单
      } else {
        resultDiv.innerText = "Error: " + (data.error || "Unknown error");
      }
    } catch (error) {
      resultDiv.innerText = "Network Error";
    }
  });
</script>

## YouTube Video Embed

<div class="video-wrapper">
  <iframe src="https://www.youtube-nocookie.com/embed/jNQXAC9IVRw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<br>

---

## Code Snippet from GitHub

<script src="https://gist.github.com/spf13/7896402.js"></script>

<br>

---

## Vimeo Video Player

<div class="video-wrapper">
  <iframe src="https://player.vimeo.com/video/22439234" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
</div>

<br>

---

## Spotify Music Player

<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4PTG3Z6ehGkBFwjybzWkR8?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

<br>

---

## CodePen Interactive Demo

<iframe height="400" style="width: 100%;" scrolling="no" title="Retro Terminal" src="https://codepen.io/MillerTime/embed/XgpNwb?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/MillerTime/pen/XgpNwb">Retro Terminal</a> by MillerTime (<a href="https://codepen.io/MillerTime">@MillerTime</a>) on <a href="https://codepen.io">CodePen</a>.
</iframe>

<br>

---

## Interactive Map

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19501.19687091392!2d6.871649076443455!3d52.21976574218451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b813d9079c5545%3A0x726416ab4bbec1ad!2sEnschede%2C%20Netherlands!5e0!3m2!1sen!2s!4v1635959493980!5m2!1sen!2s" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

<br>

---

## SoundCloud Audio

<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&color=%23eec35e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>


# Showcase

## Headings

The following HTML `<h1>`—`<h6>` elements represent six levels of section headings. `<h1>` is the highest section level while `<h6>` is the lowest.

# H1
## H2
### H3
#### H4
##### H5
###### H6

## Paragraph

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Images

![Terminal Theme Preview](https://raw.githubusercontent.com/panr/hugo-theme-terminal/refs/heads/master/images/terminal-theme.png?raw=true)

### Figure with a caption

<figure>
  <img src="https://raw.githubusercontent.com/panr/hugo-theme-terminal/refs/heads/master/images/terminal-theme.png?raw=true" alt="Terminal Theme Preview">
  <figcaption>
    <p>Terminal Theme Preview</p>
  </figcaption>
</figure>

## Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

### Blockquote without attribution

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Note** that you can use *Markdown syntax* within a blockquote.

### Blockquote with attribution

> Don't communicate by sharing memory, share memory by communicating.  
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Buttons and links

<button>Button</button>
<a href="#">Link</a>

## Tables

Tables aren't part of the core Markdown spec, but Astro supports them out-of-the-box.

### Basic Table

| Name | Age |
| ---- | --- |
| Bob | 27 |
| Alice | 23 |

### Inline Markdown within tables

| Italics | Bold | Code |
| ------- | ---- | ---- |
| *italics* | **bold** | `code` |

## Forms

<fieldset>
  <input type="text" placeholder="Type something"><br>
  <input type="number" placeholder="Insert number"><br>
  <input type="text" value="Input value"><br>
  <select>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select><br>
  <textarea placeholder="Insert a comment..."></textarea><br>
  <label>
    <input type="checkbox"> I understand<br>
  </label>
  <button type="submit">Submit</button>
</fieldset>

## Code Blocks

### Code block with backticks

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
```

For more examples for different programming languages, please go to [code showcase](/blog/code-blocks-examples/).

## List Types

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

* List item
* Another item
* And another item

### Nested list

* Fruit
  * Apple
  * Orange
  * Banana
* Dairy
  * Milk
  * Cheese

## Other Elements — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.