import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import Components from "unplugin-vue-components/vite";

const root = "./src";

export default defineConfig(({ mode }) => ({
  root,
  base: mode === "development" ? "/" : "/dist/",

  resolve: {
    alias: {
      "~/": `${resolve(__dirname, root)}/`,
      "@": `${resolve(__dirname, root)}/`,
      vue: "vue/dist/vue.esm-bundler.js",
    },
  },

  build: {
    outDir: resolve(__dirname, "public/dist"),
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: resolve(root, "main.ts"),
    },
  },

  plugins: [
    Vue(),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      dirs: ["components"],
      dts: "components.d.ts",
    }),
  ],
}));
