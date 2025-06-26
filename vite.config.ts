import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    server: {
        allowedHosts: ["localhost", "127.0.0.1", "0.0.0.0", "bm-victoria-options-thailand.trycloudflare.com"]
    }
});
