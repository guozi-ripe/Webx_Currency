module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue: (module) => {
        const filePath = module.file || "";

        if (filePath.includes("vant")) {
          return 37.5;
        }

        // 根据你的项目结构设置判断逻辑
        if (
          filePath.includes("mobile-components") ||
          filePath.includes("src/mobile")
        ) {
          return 75; // 移动端750设计稿
        } else {
          return 192; // PC端1920设计稿
        }
      },
      propList: ["*"],
      selectorBlackList: ["no-rem"],
      exclude: /node_modules/i,
      unitPrecision: 5,
      minPixelValue: 2,
      mediaQuery: false, // 媒体查询中的px不转换
    },
  },
};
