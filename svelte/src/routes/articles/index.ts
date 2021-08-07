import dbConnect from "$lib/database/dbconnect";
import Article from "$lib/models/Article";



export async function get(params) {
    await  dbConnect()
    const articles = await Article.find({ })
    return {body:articles}
}