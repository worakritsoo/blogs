import dbConnect from "$lib/database/dbconnect";
import Blog from "$lib/models/Blog";

export async function get(params) {
  await dbConnect();
  const blog = await Blog.find({});

  return { body: Blog };
}

export async function post(req) {
  await dbConnect();
  const blog = await Blog.create(req.body);

  return { body: Blog };
}
