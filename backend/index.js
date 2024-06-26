const express = require("express");
const mongoose = require("mongoose");
const usermodel = require("./models/User")
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect("mongodb://127.0.0.1:27017/user");
mongoose.connection.on('connected', () => console.log('db connected successfully'));

// var isDBconnected = false;
// async function dbconnect() {
//     try {
//         await mongoose.connect("mongodb://127.0.0.1:27017/user");
//         isDBconnected = true;
//         console.log("db connected success");
//     }
//     catch (error) {
//         console.log("database connection error: ", error);
//     }
// }
// dbconnect();

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    usermodel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password && email === email) {
                    res.json("Success");
                }
                else {

                    res.json("password is incorrect");
                }
            }
            else {

                res.json("user have no account");
            }
        })
})

let isDBconnected = false;

app.post("/signup", (req, res) => {
    console.log("inside signup api");
    isDBconnected = true;
    if (!isDBconnected) {
        console.log("db is not connected");
    }
    else {
        usermodel.create(req.body)
            .then(user => res.json(user))
            // .then(console.log("signup successful"))
            .catch(err => res.json(err)
            )

        console.log("final signup success");
    }
})


app.listen(3000, () => {
    console.log("App is running at 3000");
})