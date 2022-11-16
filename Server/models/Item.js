const mongoose = require("mongoose");

const user_schema = new mongoose.Schema({
    name: String,
    category: String,
    owner: String,
    qty: Number,
    price: Number,
    photos: Array,
});

module.exports = mongoose.model("Item", user_schema);
