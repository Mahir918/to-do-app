const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    name:{
        type:String,
        required:true
    }
})

const Name = mongoose.model('React', TodoSchema)
module.exports = Name