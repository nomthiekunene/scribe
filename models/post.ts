import mongoose from "mongoose";

const {Schema} = mongoose
const postSchema = new Schema({
    subtitle: 
    {type: String, 
    required: true},
    
    title: 
    {type: String, 
    required: true},

    description: 
    {type: String, 
    required: true},

    date : 
    {type: Date, 
    default: Date.now},

    imageUrl : 
    {type: String, 
    required: true}
})

export default mongoose.models.post || mongoose.model("post", postSchema);