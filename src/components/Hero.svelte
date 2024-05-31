<script lang="ts">
    import { sleep } from "radash";
    import { atom } from "nanostores";
    import { onMount } from "svelte";

    const visible = atom(false);
    onMount(async() => {
        sleep(200);
        visible.set(true);
    });
</script>
<div class="flex flex-col-reverse md:flex-row place-content-around">
    <div class="flex flex-col place-content-center">
        <div class="text-center text-xl font-bold">
            {#if $visible}
            Coding for Fun and Profit
            {:else}
            &nbsp;
            {/if}
        </div>
        <div class="text-center text-lg font-semibold">
            {#if $visible}
            (mostly for fun)
            {:else}
            &nbsp;
            {/if}
        </div>
    </div>
    <img class="w-full md:w-3/5" src="/edger.svg" width="1024" height="1100" alt="edger">
</div>