// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import postcssPxtorem from "postcss-pxtorem";
import path from "path";
export default defineConfig({
  base: "/test/",
  plugins: [vue()],
  server: {
    host: "0.0.0.0",
    port: 8090,
    https: false,
    strictPort: true,
    open: false,
  },
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    postcss: {
      plugins: [
        postcssPxtorem({
          rootValue: (module) => {
            return module.file?.includes("vant") ? 37.5 : 16;
          },
          propList: ["*"],
          selectorBlackList: ["no-rem"],
          exclude: /node_modules/i,
        }),
      ],
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    // 关键：确保小图片被内联
    assetsInlineLimit: 8192, // 增大到8KB

    // 优化资源文件名
    rollupOptions: {
      output: {
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          if (
            assetInfo.name &&
            /\.(png|jpe?g|gif|svg|webp|ico)$/.test(assetInfo.name)
          ) {
            return "assets/img/[name]-[hash][extname]";
          }
          if (assetInfo.name && /\.(css)$/.test(assetInfo.name)) {
            return "assets/css/[name]-[hash][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
});
