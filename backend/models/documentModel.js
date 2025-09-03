const mongoose = require("mongoose");

const documentSchema = mongoose.Schema({
    document:{
        type:String,
        required:true
    }
});


module.exports = mongoose.model("Documents", documentSchema)