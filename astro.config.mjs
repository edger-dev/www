import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    integrations: [
        svelte(),
        tailwind(),
        mdx(),
    ],
    output: "static",
    redirects: {
        "/open-source/crates/dioxus-class/": "/projects/dioxus-class"
    },
    vite: {
        optimizeDeps: {
		    exclude: ["surrealdb.wasm", "surrealql.wasm"],
	    },
        resolve: {
          preserveSymlinks: true
        }
    },
    experimental: {
        contentCollectionCache: true,
    },
});
