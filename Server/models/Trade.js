const mongoose = require("mongoose");

const user_schema = new mongoose.Schema({
    itemId: String,
    buyer: String,
    seller: String,
    purpose: String,
    date: Date,
});

module.exports = mongoose.model("Trade", user_schema);
