<script lang="ts">
    import {
        Navbar,
        NavBrand,
        NavLi,
        NavUl,
        NavHamburger,
        Dropdown,
        DropdownItem,
        DropdownDivider,
        DarkMode,
        DropdownHeader,
    } from "flowbite-svelte";
    import { ChevronDownOutline } from "flowbite-svelte-icons";
    import { page_path } from "@islands/states";

    let projects_opened = false;
    let demos_opened = false;

    function close_projects() {
        projects_opened = false;
    }

    function close_demos() {
        demos_opened = false;
    }
</script>

<Navbar class="bg-[#D9E7DA]">
    <NavBrand href="/">
        <img src="/icon.svg" class="me-3 h-8" alt="edger.dev Icon" />
        <img
            src="/logo.svg"
            class="h-6 fill:color-gray-500"
            alt="edger.dev Logo"
        />
    </NavBrand>
    <NavHamburger />
    <NavUl activeUrl={$page_path}>
        <NavLi href="/">Home</NavLi>
        <NavLi href="/projects">Projects</NavLi>
        <NavLi href="/demos">Demos</NavLi>
        <!--
        <NavLi href="https://edger.substack.com" target="_blank">News</NavLi>
        -->
        <NavLi href="/about/">About</NavLi>
    </NavUl>
</Navbar>
