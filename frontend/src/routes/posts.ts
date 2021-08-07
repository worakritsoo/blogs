    // src/routes/posts.ts
    
import dbConnect from '$lib/database/dbconnect';
import { API } from '$lib/Env';
import Article from '$lib/models/Article';
import type { EndpointOutput } from '@sveltejs/kit';
    
const baseAPI =API
export async function get(): Promise<EndpointOutput> {
        const res = await fetch(`${baseAPI}/posts`);
        const data = await res.json();
        if(res.ok){

            return { body: data };
        }
        await dbConnect()
        const articles = await Article.find({ })
        return {body:articles}

}
