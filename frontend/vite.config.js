import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
   server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#06141B",
        panel: "#11212D",
        surface: "#253745",
        muted: "#4A5C6A",
        textMuted: "#9BA8AB",
        textLight: "#CCD0CF",
      },
      borderRadius: {
        xl: "14px",
        "2xl": "18px",
      },
    },
  },
});