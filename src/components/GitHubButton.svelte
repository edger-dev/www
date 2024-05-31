<script type="ts">
    import { atom } from "nanostores";
    import { onMount } from "svelte";

    export let show_fork = true;
    export let repo = "edger-dev/demos";

    const mounted = atom(false);

    onMount(() => {
        mounted.set(true);
    });

    // Need to manuall include script block for this to work, need to figure out how to do that automatically
</script>

<div class="h-8">
    {#if $mounted}
        <script defer src="https://buttons.github.io/buttons.js"></script>
        <a
            class="github-button"
            href="https://github.com/{repo}"
            data-size="large"
            data-show-count="true"
            aria-label="Star {repo} on GitHub"
        >
            Star
        </a>
        {#if show_fork}
            <a
                class="github-button"
                href="https://github.com/{repo}/fork"
                data-size="large"
                data-show-count="true"
                aria-label="Fork {repo} on GitHub"
            >
                Fork
            </a>
        {/if}
    {/if}
</div>
