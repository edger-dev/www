<script lang="ts">
    import { Heading, A } from "flowbite-svelte";
    import {
        LinkedinSolid,
        GithubSolid,
        FilePdfOutline,
    } from "flowbite-svelte-icons";
</script>

<Heading tag="h1" class="text-center mt-2 mb-8">About</Heading>

<div class="mx-auto max-w-[640px] text-begin flex flex-col gap-4 leading-7">
    <slot />

    <Heading tag="h2" class="text-center mt-8 mb-4">Service</Heading>
    <article class="prose">
        <slot name="service" />
    </article>

    <Heading tag="h2" class="text-center mt-8">Links</Heading>
    <div class="flex flex-row gap-4 place-content-end">
        <A href="https://github.com/yjpark" target="_blank">
            <GithubSolid class="w-6 h-6 bg-gray-100 text-black rounded me-2" />
        </A>
        <A href="https://www.linkedin.com/in/yjpark" target="_blank">
            <LinkedinSolid
                class="w-6 h-6 bg-gray-100 text-black rounded me-2"
            />
        </A>
    </div>
    <div class="flex flex-row gap-2">
        <FilePdfOutline class="mt-1" />
        <A href="/pdf/yjpark-resume-english-2023.pdf" target="_blank">
            resume (updated at Nov. 2023)</A
        >
    </div>
</div>
