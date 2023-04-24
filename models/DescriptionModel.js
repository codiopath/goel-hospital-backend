const mongoose = require('mongoose')

const DescSchema = mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    createdAt: {
        type: Date, default: Date.now()
    }
})

const DescriptionModel = mongoose.model('description', DescSchema)

module.exports = DescriptionModel