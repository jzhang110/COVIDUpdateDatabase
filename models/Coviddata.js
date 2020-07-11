const mongoose = require("mongoose");

const CovidDataSchema = new mongoose.Schema({

    county: {
        type: String,
        required: true,
        unique: true
    },

    cases: {
        type: Number,
        required: true
    },

    fatalities:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('COVIDProj', CovidDataSchema);