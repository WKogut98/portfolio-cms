import {createClient, type ClientConfig} from "@sanity/client";
import urlBuilder from "@sanity/image-url"

const config: ClientConfig ={
    projectId: "hhy2qnr6",
    dataset: 'production',
    useCdn: true,
    apiVersion: '2024-12-09'
}

const sanityClient = createClient(config);
export default sanityClient;

export function processProjectEntries(rawProject: Project)
{
    const imgURLbuilder = urlBuilder(sanityClient);
    const projectImageUrl = imgURLbuilder.image(rawProject.image).url();


    const processedProject: ProcessedProject = {
        name: rawProject.name,
        company: rawProject.company,
        date: rawProject.date,
        stack: rawProject.stack,
        projectImageUrl: projectImageUrl,
        slug: rawProject.slug,
        content: rawProject.content.map(processProjectContent)
    };

    return processedProject;
}

function processProjectContent(content: RawTextContent | RawImageContent)
{
    if(content._type === 'block')
    {
        const processedTextContent: ProcessedTextContent =
        {
            type: "text",
            style: content.style,
            textToRender: content.children.map((elem) => elem.text).join('\n'),
        };
        return processedTextContent;
    }
    else
    {
        const imgURLbuilder = urlBuilder(sanityClient);
        const imageURL = imgURLbuilder.image(content).url();

        const processedImage: ProcessedImageContent =
        {
            type: 'image',
            url: imageURL
        }
        return processedImage;
    }
}