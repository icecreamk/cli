// PWA（Progressive Web Apps，渐进式 Web 应用）
// 是一种创建与平台和网络连接无关的应用程序的方法

module.exports = (cli) => {
  cli.injectFeature({
    name: "Progressive Web App (PWA) Support",
    value: "pwa",
    short: "PWA",
    description:
      "Improve performances with features like Web manifest and Service workers",
    link: "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa",
  });

  cli.onPromptComplete((answers, options) => {
    if (answers.features.includes("pwa")) {
      options.plugins["@vue/cli-plugin-pwa"] = {};
    }
  });
};
