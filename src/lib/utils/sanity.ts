import {createClient, type ClientConfig} from "@sanity/client";

const config: ClientConfig ={
    projectId: "hhy2qnr6",
    dataset: 'production',
    useCdn: true,
    apiVersion: '2024-12-09'
}

const sanityClient = createClient(config);
export default sanityClient;