const express = require("express");
const app = express();
const config = require("./config/key");
// var cookieParser = require('cookie-parser')
const mongoose = require("mongoose");
// app.use(cookieParser())

const connect = mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));










if (process.env.NODE_ENV === "production") {

    // Set static folder
    app.use(express.static("client/build"));

    // index.html for all page routes
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}





const port = process.env.Port || 3000
app.listen(port, () => {
    console.log(`Server Running at ${port}`)
})