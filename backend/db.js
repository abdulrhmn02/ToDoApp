const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://abdul:abdul02@cluster.kscq4su.mongodb.net/")
const todoSchema = mongoose.Schema({
    title : String,
    descriptipon : String,
    completed : Boolean
}) 

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}

