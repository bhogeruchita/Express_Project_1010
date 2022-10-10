const mongoose = require('mongoose');


const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must have name']
    },
    contact: {
        type: Number,
        required: [true, 'Must have number']
    },
    project: {
        type: String,
        required: [true, 'Must have project']
    }
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;