const mongoose = require('mongoose')

const DescSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
})

const DescriptionModel = mongoose.model('description', DescSchema)

module.exports = DescriptionModel