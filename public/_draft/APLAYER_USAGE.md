# APlayer 使用说明

APlayer组件已成功安装到你的Astro博客中。下面是使用方法：

## 重要提示

**必须使用 `.mdx` 文件格式** 在Markdown中导入和使用Astro组件。`.md` 文件不支持组件导入。

如果你有现有的 `.md` 文件想使用APlayer，需要将其改为 `.mdx` 格式。

## 基本用法

在你的MDX文章中导入并使用APlayer组件：

### 方法1：在MDX文件中使用（推荐）

在`.mdx`文件中添加：

```mdx
---
title: "我的文章"
---

import APlayer from '../../components/APlayer.astro';

这是我的文章内容...

<APlayer 
  name="歌曲名称" 
  artist="歌手名称" 
  url="https://example.com/music.mp3" 
  cover="https://example.com/cover.jpg"
/>

继续文章内容...
```

### 方法2：在Astro页面中使用

```astro
---
import APlayer from '../components/APlayer.astro';
---

<APlayer 
  name="歌曲名称" 
  artist="歌手名称" 
  url="https://example.com/music.mp3" 
/>
```

## 组件参数说明

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| name | string | 是 | - | 歌曲名称 |
| artist | string | 是 | - | 歌手/艺术家名称 |
| url | string | 是 | - | 音频文件URL |
| cover | string | 否 | '' | 封面图片URL |
| lrc | string | 否 | '' | 歌词文本（LRC格式）|
| theme | string | 否 | '#b7b7b7' | 主题颜色（十六进制） |
| autoplay | boolean | 否 | false | 是否自动播放 |
| loop | 'all'\|'one'\|'none' | 否 | 'none' | 循环模式 |

## 使用示例

### 基础示例

```mdx
<APlayer 
  name="Canon in D" 
  artist="Johann Pachelbel" 
  url="https://example.com/canon.mp3"
/>
```

### 带封面的示例

```mdx
<APlayer 
  name="夜曲" 
  artist="周杰伦" 
  url="https://example.com/yequ.mp3"
  cover="https://example.com/cover.jpg"
/>
```

### 带歌词的示例

```mdx
<APlayer 
  name="示例歌曲" 
  artist="示例歌手" 
  url="https://example.com/song.mp3"
  cover="https://example.com/cover.jpg"
  lrc="[00:00.00]第一句歌词
[00:05.00]第二句歌词
[00:10.00]第三句歌词"
/>
```

### 自定义主题色和循环

```mdx
<APlayer 
  name="示例歌曲" 
  artist="示例歌手" 
  url="https://example.com/song.mp3"
  theme="#ffa86a"
  autoplay={true}
  loop="one"
/>
```

## 已支持的文章

你的 `2025-wrapped.mdx` 文章已经包含了一个APlayer播放器示例：

```mdx
<APlayer 
  name="The CAVE" 
  artist="Rho" 
  url="https://music.163.com/song/media/outer/url?id=2106243240.mp3" 
  cover="/img/2025-wrapped/cover.png"
/>
```

## 注意事项

1. **文件格式**：必须使用 `.mdx` 格式，不能用 `.md`
2. **音频格式**：推荐使用MP3格式以获得最佳兼容性
3. **跨域问题**：音频文件需要托管在可访问的服务器上，确保支持CORS
4. **封面图片**：推荐尺寸为300x300像素或更大的正方形
5. **歌词格式**：LRC格式时间标签为 `[mm:ss.xx]`，例如 `[00:30.50]歌词内容`

## 样式自定义

APlayer组件已经适配了你的Terminal主题样式。如果需要进一步自定义，可以编辑以下文件：

- [src/styles/aplayer.css](src/styles/aplayer.css) - 全局APlayer样式

## 迁移现有的.md文件

如果你有其他想使用APlayer的`.md`文章，需要：

1. 将文件扩展名从 `.md` 改为 `.mdx`
2. 在文件顶部添加导入语句：`import APlayer from '../../components/APlayer.astro';`
3. 在文章中使用 `<APlayer />` 组件

例如，在Windows PowerShell中：
```powershell
ren "src\content\posts\article.md" "article.mdx"
```
