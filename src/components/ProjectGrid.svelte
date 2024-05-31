<script lang="ts">
    import { type Project } from "@islands/types";
    import ProjectCard from "@components/ProjectCard.svelte";

    export let collections: string;
    export let data: Project[];
</script>
        
<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 justify-items-center items-start">
    {#each data as project (project.slug)}
        <ProjectCard data={project} collections={collections} />
    {/each}
</div>
