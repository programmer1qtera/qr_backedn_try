const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var packageSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

},{
    timestamps: true
});

//Export the model
module.exports = mongoose.model('Package', packageSchema);