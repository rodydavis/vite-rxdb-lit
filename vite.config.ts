import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import { resolve } from "path";
import { nodeResolve } from "@rollup/plugin-node-resolve";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/vite-rxdb-lit/",
  optimizeDeps: {
    // @ts-ignore
    allowNodeBuiltins: ["pouchdb-browser", "pouchdb-utils"],
  },
  plugins: [nodeResolve(), VitePWA()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
});
