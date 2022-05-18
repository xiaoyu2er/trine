import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default defineUserConfig({
  // 站点配置
  lang: "zh-CN",
  title: "Awesome Trine",
  description: "关于 Trine 的资料搜集",
  base: "/trine/",

  theme: hopeTheme({
    logo: "https://vuejs.org/images/logo.png",
    sidebar,
    navbar,
    // 默认为 GitHub. 同时也可以是一个完整的 URL
    repo: "xiaoyu2er/trine",
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
    // repoLabel: "GitHub",
    // 是否在导航栏内显示仓库链接，默认为 `true`
    repoDisplay: true,
    docsDir: "/docs/",
    docsBranch: "master",

    blog: {
      name: "Awesome Trine",
      description: `关于 Trine 的资料搜集`,
      medias: {
        // QQ: "http://wpa.qq.com/msgrd?v=3&uin=1178522294&site=qq&menu=yes",
        // Qzone: "https://1178522294.qzone.qq.com/",
        Gmail: "mailto:694537055@qq.com",
        GitHub: "https://github.com/xiaoyu2er/",
        // Linkedin: "https://www.linkedin.com/in/yanqi-zong-b9244496/",
        Wechat: "https://mp.weixin.qq.com/s/o4up2JDXqIVV26eB4u_MaQ",
        // Zhihu: "https://www.zhihu.com/people/mister-hope",
        // Steam: "https://steamcommunity.com/id/Mr-Hope/",
        // Weibo: "https://weibo.com/misterhope",
      },
    },

    plugins: {
      readingTime: {},
      copyCode: {},
      copyright: {},
      mdEnhance: {
        enableAll: true,
      },
      comment: {
        comment: true,
        type: "giscus",
        repo: "xiaoyu2er/trine",
        repoId: "R_kgDOHW3y0g-g",
        category: "Announcements",
        categoryId: "DIC_kwDOHW3y0s4CPLF_",
        mapping: "pathname",
        reactionsEnabled: true,
        inputPosition: "top",
      },
      blog: {
        category: "/category/",
      },
    },
  }),

  plugins: [],
});
