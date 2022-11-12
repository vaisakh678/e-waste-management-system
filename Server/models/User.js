const mongoose = require("mongoose");

const user_schema = new mongoose.Schema({
    name: String,
    lastname: String,
    username: String,
    email: String,
    register_date: String,
    smart_catching: Boolean,
    darkTheme: Boolean,
    password: String,
    type: String,
    disenable: false,
});

module.exports = mongoose.model("User", user_schema);
