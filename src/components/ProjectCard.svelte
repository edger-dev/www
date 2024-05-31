<script lang="ts">
    import { Button, Card, Heading } from "flowbite-svelte";
    import { type Project } from "@islands/types";
    import TagCloud from "./TagCloud.svelte";
    import GitHubButton from "./GitHubButton.svelte";

    export let collections: string;
    export let data: Project;
</script>

<Card
    class="flex flex-col place-content-between gap-2 max-w-full bg-gray-100"
    img={data.cover}
>
    <Button outline href={`/${collections}/${data.slug}/`} class="w-full mb-4">
        <Heading tag="h5">
            {data.title}
        </Heading>
    </Button>

    <TagCloud data={data.tags} />

    <div class="mt-4 text-sm">
        {data.short}
    </div>

    <div>
        {#if data.github}
            <div class="w-full flex place-content-center mt-4 text-gray-100">
                <GitHubButton repo={data.github} />
            </div>
        {/if}

        {#if data.url}
            <div
                class="flex flex-row place-content-end mt-4 bg-gray-100 text-xs"
            >
                <a href={data.url} target="_blank">
                    {data.url}
                </a>
            </div>
        {/if}
    </div>
</Card>
