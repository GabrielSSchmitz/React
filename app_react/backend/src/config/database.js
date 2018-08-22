const mongoose = require('mongoose')
mongoose.Promese = global.Promise
 
module.exports = mongoose.connect('mongodb://localhost/todo')