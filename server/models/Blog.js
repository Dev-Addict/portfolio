const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    slug: {
        type: String,
        unique: true,
        sparse: true,
        required: [true, 'slug is required.']
    },
    title: {
        type: String,
        required: [true, 'title is required.']
    },
    subTitle: {
        type: String,
        required: [true, 'subTitle is required.']
    },
    story: {
        type: String,
        required: [true, 'story is required.']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: String,
        default: 'draft'
    },
    author: {
        type: String,
        required: [true, 'author is required.']
    }
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;