import sanityClient, { processProjectEntry } from "$lib/utils/sanity";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async({params}) => {
    const {slug} = params;
    const rawProjects: Project[] = await sanityClient.fetch(`*[_type == "project" && slug == $slug]`, {slug});
    if(rawProjects.length !==1)
    {
        throw error(404, "Project not found");
    }
    const project = processProjectEntry(rawProjects[0]);
    return project;
}