import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: "../static",
        emptyOutDir: true,
        sourcemap: true
    },
    server: {
        proxy: {
            "/ask": "http://127.0.0.1:5000",
            "/chat": "http://127.0.0.1:5000",
            "/getcontext": "http://127.0.0.1:5000",
            "/conversation": "http://127.0.0.1:5000",
            "/history/generate": "http://127.0.0.1:5000",
            "/history/update": "http://127.0.0.1:5000",
            "/history/delete": "http://127.0.0.1:5000",
            "/history/list": "http://127.0.0.1:5000",
            "/history/read": "http://127.0.0.1:5000",
            "/history/rename": "http://127.0.0.1:5000",
            "/history/delete_all": "http://127.0.0.1:5000",
            "/history/clear": "http://127.0.0.1:5000",
            "/history/ensure": "http://127.0.0.1:5000"
        }
    }
});
