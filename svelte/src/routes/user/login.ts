import dbConnect from "$lib/database/dbconnect";
import User from "$lib/models/User";

export async function post(req) {
  await dbConnect();
  const user = await User.findOne(req.body);
  if (!user) {
    const newUser = await User.create(req.body);
    return { body: newUser };
  }
  return { body: user };
}
export async function get(req) {
  await dbConnect();
  const users = await User.find({});
  return { body: users };
}

export async function put(req) {
  await dbConnect();
  const user = await User.findOneAndUpdate(req.params.username, req.body);
  return { body: await user.save() };
}
export async function del(req) {
  await dbConnect();
  const user = await User.findOneAndDelete(req.params.username);
  return { body: user};
}
