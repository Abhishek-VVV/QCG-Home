const mongoose = require('mongoose')
const Schema = mongoose.Schema({
    text: String
})
module.exports = mongoose.model('Feedback', Schema)