const mongoose = require('mongoose')

const entrySchema = new mongoose.Schema({
    name: {
      type: String,
      required: true

    },
    enteredToForm: {
        type: String,
      required: true

    },
    enteredDate: {
        type: Date,
      required: true,
      default: Date.now

    }
})

module.exports = mongoose.model('Entry', entrySchema)