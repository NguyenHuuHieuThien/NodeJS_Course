const mongoose = require('mongoose');
slug = require('mongoose-slug-generator');
const mongoose_delete = require('mongoose-delete');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String },
    description: { type: String },
    image: { type: String },
    slug: { type: String, slug: 'name', unique: true },
    videoId: { type: String },
});
//Add plugin
mongoose.plugin(slug);
Course.plugin(mongoose_delete, {
    overrideMethods: 'all',
    deletedAt: true,
});

module.exports = mongoose.model('Course', Course);
