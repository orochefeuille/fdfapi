const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cheeseSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    milk: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('cheese', cheeseSchema);