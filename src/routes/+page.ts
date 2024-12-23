import sanityClient from "$lib/utils/sanity";
import { processProjectEntry } from "$lib/utils/sanity";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
    const workExperience: DevExperience[] = 
        await sanityClient.fetch('*[_type == "devExperience"] | order(startDate desc)');


    const rawProjects: Project[] = await sanityClient.fetch('*[_type == "project"] | order(date desc)');

    const projects = rawProjects.map(processProjectEntry);
    
    return {workExperience, projects};
}