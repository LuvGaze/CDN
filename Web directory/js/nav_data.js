/**
 * 导航数据配置文件
 * 这个文件定义了导航页面显示的所有分组和链接
 * 数据结构说明：
 * - groups: 分组数组，每个分组包含标题、备注和链接列表
 *   - title: 分组标题
 *   - note: 分组备注说明（可选）
 *   - links: 链接数组，每个链接包含名称、URL和图标
 *     - name: 链接名称
 *     - url: 链接地址
 *     - icon: 链接图标URL
 *     - desc: 链接描述（可选）
 */
const navData = {
  // 分组数组 - 包含所有导航分类
  groups: [
    {
      title: "常用网站",
      note: "日常高频使用的工具，涵盖开发、图床等核心服务。",
      links: [
        {
          name: "❀ 等风听雨 ︱ 梅花落 ❀",
          url: "https://莫慧琳.我爱你",
          icon: "https://xn--1iu713bnjl.xn--6qq986b3xl/favicon.ico",
          desc: "个人博客站点，记录生活感悟与技术成长历程。"
        },
        {
          name: "GitHub",
          url: "https://github.com/LuvGaze",
          icon: "https://github.com/favicon.ico",
          desc: "代码托管平台，用于版本控制与开源项目协作。"
        },
        {
          name: "Picgo",
          url: "https://www.picgo.net/luvgaze/albums",
          icon: "https://img.picgo.net/content/images/users/SKRQd/av_1752172312.jpg",
          desc: "图床管理系统，支持多平台上传与图片管理。"
        },
        {
          name: "Cloudflare",
          url: "https://dash.cloudflare.com/3f90b81792a0d19e215b7bdf/home/domains",
          icon: "https://dash.cloudflare.com/favicon.ico",
          desc: "全球CDN与DNS服务提供商，提供网站加速与安全防护。"
        }
      ]
    },
    {
      title: "学习资源",
      note: "在线课程、编程学习与知识库平台。",
      links: [
        {
          name: "Bilibili",
          url: "https://www.bilibili.com",
          icon: "https://www.bilibili.com/favicon.ico",
          desc: "视频学习平台，涵盖大量编程教学与知识分享内容。"
        },
        {
          name: "Coursera",
          url: "https://www.coursera.org",
          icon: "https://www.coursera.org/favicon.ico",
          desc: "国际知名在线教育平台，提供高质量大学课程。"
        },
        {
          name: "MDN Web Docs",
          url: "https://developer.mozilla.org",
          icon: "https://developer.mozilla.org/favicon.ico",
          desc: "前端开发者必备文档，涵盖HTML/CSS/JS等核心技术详解。"
        }
      ]
    },
    {
      title: "文档图片转换",
      note: "高效便捷的文件格式转换工具集合。",
      links: [
        {
          name: "ILovePDF",
          url: "https://www.ilovepdf.com/",
          icon: "https://www.ilovepdf.com/favicon.ico",
          desc: "PDF合并、压缩、加密、转Word等一站式处理工具。"
        },
        {
          name: "Online Convert",
          url: "https://www.online-convert.com",
          icon: "https://www.online-convert.com/favicon.ico",
          desc: "多功能在线文件转换平台，支持视频、音频、图像等多种格式。"
        },
        {
          name: "Remove.bg",
          url: "https://www.remove.bg/",
          icon: "https://www.remove.bg/favicon.ico",
          desc: "一键去除图片背景，自动抠图效果出色。"
        },
      ]
    },
    {
      title: "AI 工具",
      note: "人工智能辅助工具，提升效率与创造力。",
      links: [
        {
          name: "通义千问",
          url: "https://www.tongyi.com/",
          icon: "https://img.alicdn.com/imgextra/i4/O1CN01EfJVFQ1uZPd7W4W6i_!!6000000006051-2-tps-112-112.png",
          desc: "阿里巴巴推出的AI助手，支持多轮对话、代码理解与创作。"
        },
        {
          name: "DeepSeek",
          url: "https://chat.deepseek.com/",
          icon: "https://chat.deepseek.com/favicon.svg",
          desc: "DeepSeek提供先进的对话式AI服务，专注于深度理解和自然语言处理。"
        },
        {
          name: "ChatGPT",
          url: "https://openai.com/blog/chatgpt/",
          icon: "https://openai.com/favicon.ico",
          desc: "由OpenAI开发的大型语言模型，能够生成文本、回答问题并协助写作等。"
        }
      ]
    },
  ]
};