const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const moment = require("moment");
const fileUpload = require("express-fileupload");
const path = require("path");
const fs = require("fs");

const User = require("./models/User");
const Item = require("./models/Item");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

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

app.post("/api/add-item", async (req, res) => {
    const token = req.headers["x-access-token"];
    const decode = jwt.verify(token, SECRETE_KEY);
    if (!decode) {
        res.json({ status: "err", err: "token error" });
        console.log("token error");
        return;
    }
    let photos = [];
    if (req.files) {
        for (const obj in req.files) {
            const md5 = req.files[obj].md5;
            const type = req.files[obj].mimetype.split("/")[1];
            const name = md5 + "." + type;
            const img = req.files[obj].data;
            console.log(path.join(__dirname, "bucket", name));
            fs.writeFile(path.join(__dirname, "bucket", name), img, (err) => {
                if (err) {
                    console.error(err);
                }
            });
            photos.push(name);
        }
    }

    try {
        Item.create({
            name: req.body.itemName.toLowerCase(),
            category: req.body.category.toLowerCase(),
            qty: req.body.qty,
            price: req.body.price,
            photos,
        });
        console.log(req.body);
        res.json({ status: "ok" });
    } catch (err) {
        res.json({ status: "err" });
        console.log(err);
    }
});

app.post("/api/search", async (req, res) => {
    const token = req.headers["x-access-token"];
    // const decode = jwt.verify(token, SECRETE_KEY);
    // if (!decode) {
    //     res.json({ status: "err", err: "token error" });
    //     console.log("token error");
    //     return;
    // }
    try {
        console.log(req.body);
        let result;
        if (req.body.itemName)
            result = await Item.find({ name: req.body.itemName });
        else result = await Item.find({ category: req.body.category });
        console.log(result);
        res.json({ status: "ok", result });
    } catch (err) {
        res.json({ status: "err" });
        console.log(err);
    }
});

app.listen(PORT, () => {
    console.log("server is up🚀");
});
