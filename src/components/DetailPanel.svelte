<script lang="ts">
    import { Accordion, AccordionItem, Button } from "flowbite-svelte";
    import { PaperClipOutline } from "flowbite-svelte-icons";
    export let data: null | string;
    export let readme_url: undefined | string;
</script>

<article class="mx-auto prose prose-lg lg:prose-xl xl:prose-2xl dark:prose-invert mt-2">
    <slot />
</article>

{#if data}
    <Accordion inactiveClass="text-white">
        <AccordionItem open borderSharedClass="bg-gray-700">
            <span slot="header">README</span>
            <article class="mx-auto prose prose-lg lg:prose-xl xl:prose-2xl prose-invert">
                {@html data}
            </article>
        </AccordionItem>
    </Accordion>
    {#if readme_url}
    <div class="flex flex-row place-content-end mt-1">
        <Button color="alternative" href={readme_url} target="_blank">
            <PaperClipOutline class="mx-2" />
            {readme_url}
        </Button>
    </div>
    {/if}
{/if}
