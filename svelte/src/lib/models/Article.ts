import mongoose from 'mongoose'

/*will correspond to a collection in your MongoDB database. */
const ArticleSchema= new mongoose.Schema({
    title:String,
    content:String,
    url:String,
	image:String,

})

export default mongoose.models.Article|| mongoose.model('Article', ArticleSchema)