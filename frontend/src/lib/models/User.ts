import mongoose from 'mongoose'

/*will correspond to a collection in your MongoDB database. */
const UserSchema= new mongoose.Schema({
  name:String,
	username:String,
	displayName:String,
	photoURL:String,
	uid:String
})

export default mongoose.models.User|| mongoose.model('User', UserSchema)