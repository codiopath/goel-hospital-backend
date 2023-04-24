const mongoose = require('mongoose')

const ReportSchema = mongoose.Schema({
    patientName: {
        type: String
    },
    patientId: {
        type: String
    },
    reportFile: {
        type: String
    },
    createdAt: {
        type: Date, default: Date.now()
    }
})

const ReportModel = mongoose.model('report', ReportSchema)

module.exports = ReportModel