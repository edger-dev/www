import { getCollection, type CollectionEntry, getEntryBySlug } from "astro:content";
import { marked } from 'marked';

export type ProjectEntry = CollectionEntry<"projects">;
export type DemoEntry = CollectionEntry<"demos">;

export type ReadmeEntry = CollectionEntry<"readme">;

import { type Project, type Demo, type TagStub } from "@islands/types";
import { baseUrl } from "marked-base-url";

export const convert_tags = function(tags?: string[]) {
    let result: TagStub[] = [];
    if (tags) {
        tags.forEach(tag => {
            result.push({
                slug: tag,
            });
        });
    }
    return result;
}

export const convert_project = function(entry: ProjectEntry) {
    return {
        slug: entry.slug,
        title: entry.data.title,
        short: entry.data.short,
        weight: entry.data.weight,
        tags: convert_tags(entry.data.tags),
        url: entry.data.url,
        year: entry.data.year,
        cover: entry.data.cover?.src,
        github: entry.data.github,
        readme: entry.data.readme,
    } as Project;
}

export const convert_demo = function(entry: DemoEntry) {
    return {
        slug: entry.slug,
        title: entry.data.title,
        short: entry.data.short,
        weight: entry.data.weight,
        tags: convert_tags(entry.data.tags),
        url: entry.data.url,
        year: entry.data.year,
        cover: entry.data.cover?.src,
        github: entry.data.github,
        readme: entry.data.readme,
    } as Project;
}

export const get_all_projects = async function()
        : Promise<ProjectEntry[]> {
    const projects = await getCollection("projects");
    return projects;
}

export const get_all_demos = async function()
        : Promise<DemoEntry[]> {
    const demos = await getCollection("demos");
    return demos;
}

export const get_readme = async function(slug: string): Promise<null | string> {
    const entry = await getEntryBySlug("readme", slug);
    if (entry) {
        console.log("get_readme() ", slug, " found, -> ", entry.body.length);
        return entry.body;
    }
    console.log("get_readme() ", slug, " not found");
    return null;
}

export const render_readme = async function(slug: string, readme?: string): Promise<null | string> {
    if (readme) {
        const markdown = await get_readme(slug);
        marked.use(baseUrl(readme));
        if (markdown) {
            const content = marked.parse(markdown, {
                gfm: true,
            });
            return content;
        }
    }
    return null;
}

export const fetch_remote_readme = async function(readme: string): Promise<string> {
    console.log("fetch_remote_readme: ", readme);
    const response = await fetch(readme);
    const markdown = await response.text();
    console.log("fetch_remote_readme: ", readme, "->", markdown.length);
    return markdown;
}

export const render_remote_readme = async function(readme?: string): Promise<null | string> {
    if (readme) {
        const markdown = await fetch_remote_readme(readme);
        marked.use(baseUrl(readme));
        const content = marked.parse(markdown, {
            gfm: true,
        });
        return content;
    }
    return null;
}