import { atom, onMount } from "nanostores";

export const is_browser = import.meta.env.SSR === false

export const page_path = atom(is_browser ? window.location.pathname : "/");

onMount(page_path, () => {
    if (is_browser) {
        document.addEventListener('astro:page-load', () => {
            page_path.set(window.location.pathname);
        }, { once: false });
    }
});