
export type Project = {
    slug: string,
    title: string,
    short: string,
    weight: number,
    tags: TagStub[],
    url?: string,
    year?: string,
    cover?: string,
    github?: string,
    readme?: string,
}

export type TagStub = {
    slug: string,
}
