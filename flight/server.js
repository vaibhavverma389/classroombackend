const express = require("express");
const path = require("path");
const axios = require("axios");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const User = require("./models/User");

const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
    .connect("mongodb://127.0.0.1:27017/flightD")
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "ui"));


app.get("/", (req, res) => {
    res.render("index", {
        title: "Home Page"
    });
});


app.get("/flight", async (req, res) => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");

        const flights = response.data.map((user) => ({
            name: user.name,
            from: user.address.city,
            to: user.address.street
        }));

        res.render("flight", {
            title: "Flight Page",
            flights
        });
    } catch (error) {
        console.log(error);
        res.send("Error loading flights");
    }
});

app.get("/product", (req, res) => {
    res.render("product", {
        title: "Product Page"
    });
});

// ================= LOGIN =================

app.get("/login", (req, res) => {
    res.render("login", {
        title: "Login Page"
    });
});

app.post("/login", async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const userEmail = email || username;

        if (!userEmail || !password) {
            return res.send("Email and password are required");
        }

        const foundUser = await User.findOne({ email: userEmail });

        if (!foundUser) {
            return res.send("User not found");
        }
        console.log(foundUser.name);

        const isMatch = await bcrypt.compare(password, foundUser.password);

        if (isMatch) {
            return res.send(`Welcome  ${foundUser.name}`);
        }

        return res.send("Invalid Password");
    } catch (error) {
        console.log(error);
        return res.send("Error in login");
    }
});

// ================= REGISTER =================

app.get("/register", (req, res) => {
    res.render("register", {
        title: "Register Page"
    });
});

app.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.send("All fields are required");
        }

        const existUser = await User.findOne({ email });

        if (existUser) {
            return res.send("User already exists");
        }

        const hashPassword = await bcrypt.hash(password, 15);

        const newUser = new User({
            name,
            email,
            password: hashPassword
        });

        await newUser.save();

        res.redirect("/login");
    } catch (error) {
        console.log(error);
        res.send("Error in creating account");
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
