const mongoose = require('mongoose')

const ContactSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    subject: {
        type: String
    },
    message: {
        type: String
    },
    createdAt: {
        type: Date, default: Date.now()
    }
})

const ContactModel = mongoose.model('contact', ContactSchema)

module.exports = ContactModel