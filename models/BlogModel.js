const mongoose = require('mongoose')

const BlogSchema = mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    }
})

const BlogModel = mongoose.model('blog', BlogSchema)

module.exports = BlogModel