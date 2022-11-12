const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const User = require("./models/User");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;
const SECRETE_KEY = "636fc6a1559182e8783d0f43";
mongoose.connect("mongodb://localhost:27017/e_waste_management_system");

app.post("/api/login/", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    try {
        const user = await User.findOne({ username, password });
        if (user) {
            const token = jwt.sign(
                {
                    username,
                    email: user.email,
                    type: user.type,
                },
                SECRETE_KEY
            );
            res.json({ status: "ok", token });
            console.log(`"${username}" has successfully logged in`);
        } else res.json({ status: "ok" });
    } catch (err) {
        res.json({ status: "err" });
        console.log(err);
    }
});

app.listen(PORT, () => {
    console.log("server is up🚀");
});
