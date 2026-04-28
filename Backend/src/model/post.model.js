const mg = require('mongoose')

const postSchema = new mg.Schema({
    image: String,
    caption: String
})

const postModel = mg.model('Post', postSchema)

module.exports = postModel