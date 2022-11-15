const mongoose = require("mongoose");

const user_schema = new mongoose.Schema({
    name: String,
    category: String,
    qty: Number,
    price: Number,
});

module.exports = mongoose.model("Item", user_schema);
