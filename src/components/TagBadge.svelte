<script lang="ts">
    import { Badge } from "flowbite-svelte";
    import { type TagStub } from "@islands/types";

    export let data: TagStub;

</script>

<Badge color="green">
    {data.slug}
</Badge>