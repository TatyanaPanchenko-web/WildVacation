import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/

const SCSS_Logger = {
  warn(message, options) {
    // Mute "Mixed Declarations" warning
    if (options.deprecation && message.includes("mixed-decls")) {
      return;
    }
    // List all other warnings
    // console.warn(`▲ [WARNING]: ${message}`);
  },
};

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        logger: SCSS_Logger,
      },
    },
  },
});
