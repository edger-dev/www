<script lang="ts">
    import { Heading } from "flowbite-svelte";
    import GitHubButton from "./GitHubButton.svelte";
    import { atom } from "nanostores";
    import { type Project } from "@islands/types";
    import TagCloud from "./TagCloud.svelte";

    export let data: Project;
</script>

<Heading tag="h1" class="text-center mt-2 mb-8">
    {data.title}
</Heading>
<TagCloud data={data.tags} />

{#if data.github}
    <div class="w-full flex place-content-center mt-8 text-gray-200">
        <GitHubButton repo={data.github} />
    </div>
{/if}

{#if data.url}
    <div class="flex flex-row place-content-end mt-4 text-sm text-gray-600">
        <a href={data.url} target="_blank">
            {data.url}
        </a>
    </div>
{/if}
