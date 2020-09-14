const moment = require("moment");
moment.locale("zh-cn");

module.exports = {
  // base: "/VuePressreDemo/",
  title: "coderxio the blog - 分享学习知识", // 博客标题
  description: "coderxio的blog - 分享学习知识，以及日常生活", // 博客描述
  dest: "public", // 博客部署时输出的文件夹
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  // SEO优化
  head: [
    [
      "link", // favicon图标设置
      {
        rel: "icon",
        href: "/logo.jpg",
      },
    ],
    [
      "meta",
      {
        name: "keywords", // 关键词
        content: "vuepress介绍，vuepress说明，前端知识学习过程，博客搭建，blog",
      },
    ],
    [
      "meta",
      {
        name: "author", // 作者
        content: "coderxio",
      },
    ],
  ],
  theme: "reco", // vuepress挂载的主题
  mode: "dark",
  // 主题的配置
  themeConfig: {
    // 显示所有页面的标题连接
    displayAllHeaders: true,
    // 导航栏配置
    nav: [
      {
        text: "主页", // 导航栏标题内容
        link: "/", // 路径路由
        icon: "reco-home", // 图标样式
      },
      {
        text: "时间轴",
        link: "/timeline/",
        icon: "reco-date",
      },
      {
        text: "文档",
        icon: "reco-message",
        items: [
          {
            text: "笔记",
            link: "/docs/theme-reco/",
          },
        ],
      },
      {
        text: "关于",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/recoluan",
            icon: "reco-github",
          },
        ],
      },
    ],
    // 侧边栏设置
    sidebar: {
      "/docs/theme-reco/": ["", "html","git"],
      "/docs/blog-time/": [""],
    },
    // 主题风格
    type: "blog",
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏中所占的位置，默认占2位
        text: "分类", // 默认分类
      },
      tag: {
        location: 3, // 在导航栏中所占的位置，默认占3位
        text: "标签", // 默认 “标签”
      },
    },
    // 友联的配置
    friendLink: [
      // {
      //   title: "午后南杂",
      //   desc: "Enjoy when you can, and endure when you must.",
      //   email: "1156743527@qq.com",
      //   link: "https://www.recoluan.com",
      // },
      // {
      //   title: "vuepress-theme-reco",
      //   desc: "A simple and beautiful vuepress Blog & Doc theme.",
      //   avatar:
      //     "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
      //   link: "https://vuepress-theme-reco.recoluan.com",
      // },
    ],
    // 博客自定义logo
    logo: "/logo2.png",
    // 当前项目是否要开启搜索栏
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: "更新时间",
    // 作者
    author: "coderxio",
    // 作者头像
    authorAvatar: "/logo2.png",
    // 备案号
    record: "xxxx",
    // 项目开始时间
    startYear: "2020",
  },
  // 代码行数是否显示
  markdown: {
    lineNumbers: true,
  },
  // 插件设置
  plugins: [
    // 看板娘
    // [
    //   "@vuepress-reco/vuepress-plugin-kan-ban-niang",
    //   {
    //     theme: ["blackCat"],
    //     clean: false,
    //     messages: {
    //       welcome: "快来看看coderxio的主页吧!",
    //       home: "心里的花，我想要带你回家。",
    //       theme: "好吧，希望你能喜欢我的其他小伙伴。",
    //       close: "再见哦",
    //     },
    //   },
    // ],
    [
      // 背景漂亮线条插件
      "ribbon",
      {
        size: 90, // width of the ribbon, default: 90
        opacity: 0.8, // opacity of the ribbon, default: 0.3
        zIndex: -1, // z-index property of the background, default: -1
      },
    ],
    // 时间插件
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp) => {
          return moment(timestamp).format("LLLL");
        },
      },
    ],
  ],
};
