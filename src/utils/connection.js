import {createClient} from "next-sanity";

class SanityClient {
    constructor() {
        if (!this.client) {
            this.client = createClient({
                projectId: process.env.PROJECT_ID,
                dataset: process.env.DATASET,
                apiVersion: process.env.API_VERSION,
                useCdn: false,
            });
        }
        return this.client;
    }
}

export default function getClient() {
    return new SanityClient();
}