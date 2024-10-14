const mongoose=require("mongoose")
const Detail=mongoose.Schema({
links:[
    {
label: String,
url: String,
},
],
});

module.exports=mongoose.model("details",Detail)