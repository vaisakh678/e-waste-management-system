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
const Trade = require("./models/Trade");

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

    console.log(decode);
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
            owner: decode["username"],
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
    const decode = jwt.verify(token, SECRETE_KEY);
    if (!decode) {
        res.json({ status: "err", err: "token error" });
        console.log("token error");
        return;
    }
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

app.post("/api/my-items", async (req, res) => {
    const token = req.headers["x-access-token"];
    const decode = jwt.verify(token, SECRETE_KEY);
    if (!decode) {
        res.json({ status: "err", err: "token error" });
        console.log("token error");
        return;
    }
    try {
        let result = await Item.find({ owner: decode["username"] });
        res.json({ status: "ok", result });
        console.log(`${decode["username"]} has fetched ads list`);
    } catch (err) {
        res.json({ status: "err" });
        console.log(err);
    }
});

app.post("/api/purchase", async (req, res) => {
    const token = req.headers["x-access-token"];
    const decode = jwt.verify(token, SECRETE_KEY);
    if (!decode) {
        res.json({ status: "err", err: "token error" });
        console.log("token error");
        return;
    }

    try {
        const _date = new Date();
        let seller = await Item.findOne({ _id: req.body.itemId });
        seller = seller.owner;
        console.log(seller);
        await Trade.create({
            itemId: req.body.itemId,
            purpose: req.body.purpose,
            buyer: decode["username"],
            date: _date,
            seller,
        });
        console.log(`${decode["username"]} has purchased ${req.body.itemId}`);
        res.json({ status: "ok" });
    } catch (err) {
        res.json({ status: "err" });
        console.log(err);
    }
});

app.post("/api/fetch-brought-items", async (req, res) => {
    const token = req.headers["x-access-token"];
    const decode = jwt.verify(token, SECRETE_KEY);
    if (!decode) {
        res.json({ status: "err", err: "token error" });
        console.log("token error");
        return;
    }

    try {
        let result = [];
        const TradeRes = await Trade.find({
            buyer: decode["username"],
        });
        for (let i = 0; i < TradeRes.length; i++) {
            let tmp = {};
            const ItemDetaild = await Item.findOne({
                _id: TradeRes[i]["itemId"],
            });
            tmp["itemName"] = ItemDetaild["name"];
            tmp["supplier"] = TradeRes[i]["seller"];
            const _date = new Date();
            tmp["date"] = _date;
            result.push(tmp);
        }
        console.log(result);

        res.json({ result: result, status: "ok" });
    } catch (err) {
        res.json({ status: "err" });
        console.log(err);
    }
});

app.post("/api/fetch-sold-items", async (req, res) => {
    const token = req.headers["x-access-token"];
    const decode = jwt.verify(token, SECRETE_KEY);
    if (!decode) {
        res.json({ status: "err", err: "token error" });
        console.log("token error");
        return;
    }
    try {
        const sold_items = await Trade.find({ seller: decode["username"] });
        let result = [];
        for (let i = 0; i < sold_items.length; i++) {
            let tmp = {};
            const ItemDetails = await Item.findOne({
                _id: sold_items[i].itemId,
            });
            tmp["ItemName"] = ItemDetails["name"];
            tmp["purpose"] = sold_items[i]["purpose"];
            tmp["date"] = sold_items[i]["date"];
            tmp["buyer"] = sold_items[i]["buyer"];
            result.push(tmp);
        }
        res.json({ status: "ok", result });
    } catch (err) {
        res.json({ status: "err" });
        console.log(err);
    }
});

// User.create({
//     name: "lakshmi",
//     lastname: "s",
//     username: "lakshmi123",
//     email: "lakshmi@gmail.com",
//     register_date: Date.now(),
//     smart_catching: true,
//     darkTheme: true,
//     password: "123",
//     type: "admin",
//     disenable: false,
// });

app.listen(PORT, () => {
    console.log("server is up🚀");
});
