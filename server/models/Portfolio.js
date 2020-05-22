const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: [true, 'UserId is required'],
        maxLength: 512
    },
    title: {
        type: String,
        required: [true, 'Title is required'],
        maxLength: 256
    },
    company: {
        type: String,
        required: [true, 'Company is required'],
        maxLength: 256
    },
    location: {
        type: String,
        required: [true, 'Location is required'],
        maxLength: 128
    },
    position: {
        type: String,
        required: [true, 'Position is required'],
        maxLength: 256
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        maxLength: 2048
    },
    startDate: {
        type: Date,
        required: [true, 'StartDate is required']
    },
    endDate: {
        type: Date
    }
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

export default Portfolio;