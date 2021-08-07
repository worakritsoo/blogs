import mongoose from 'mongoose'

/*will correspond to a collection in your MongoDB database. */
const ArticleSchema= new mongoose.Schema({
    title:String,
    content:String,
    url:String,
	photoURL:String,

})

export default mongoose.models.Article|| mongoose.model('Article', ArticleSchema)