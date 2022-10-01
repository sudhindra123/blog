const mongoose = require("mongoose")
const Schema = mongoose.Schema

const blogSchema  =new Schema({
    title:{
        type:String,
        required:true
    },
    snippet:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
},{timestamps:true})//creates a new instance of a schema (timestamps gives the time when ever we edit or do a chan ge)



const Blog = mongoose.model("Blog",blogSchema)//to store the model
module.exports=Blog