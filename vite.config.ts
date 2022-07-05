import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Unocss from "unocss/vite";
import { presetIcons } from "unocss";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unocss({
      presets: [presetIcons()],
    }),
  ],
  server: {
    host: "0.0.0.0",
  },
});
