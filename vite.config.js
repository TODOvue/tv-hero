import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      outputDir: "dist",
      skipDiagnostics: false,
    })],
  build: {
    lib: {
      entry: "src/entry.ts",
      name: "TvHero",
      fileName: format => `tv-hero.${format}.js`,
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      external: ["vue", "@todovue/tv-button"],
      output: {
        globals: {
          vue: "Vue"
        },
        exports: 'named'
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler"
      }
    }
  }
});
