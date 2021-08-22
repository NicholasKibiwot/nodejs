const mongoose = require('mongoose')
const postSchema =new mongoose.Schema(
{
    title:{
        type:String,
        required:true,
    },
    photo:{
        type:String,
    default:"no photo"
    },
    postedBy:{
        type:String,
        ref:"User"
    }
}
)
mongoose.model("post",postSchema)