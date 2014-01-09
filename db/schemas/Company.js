var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    name: Sring,
    location: {
        city: String,
        country: String
    },

    sector: String,
    founded: Date
});
