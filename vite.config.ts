import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import Components from "unplugin-vue-components/vite";

const root = "./src";

// https://vitejs.dev/config/
export default defineConfig({
  define: { "process.env": {} },
  plugins: [
    vue(),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      dirs: ["components"],
      dts: "components.d.ts",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, root),
      vue: "vue/dist/vue.esm-bundler.js",
    },
  },
  build: {
    outDir: path.resolve(__dirname, "public/dist"),
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: path.resolve(root, "main.ts"),
    },
  },
});
