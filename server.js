const express = require("express");
const app = express();
const config = require("./config/key");
// var cookieParser = require('cookie-parser')
const mongoose = require("mongoose");
// app.use(cookieParser())


// Mongo Datebase
const connect = mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Routes
    // app.use('/api/users', require('./routes/users'));
    // app.use('/api/comment', require('./routes/comment'));
    // app.use('/api/like', require('./routes/like'));
    // app.use('/api/favorite', require('./routes/favorite'));

// Client Connections
if (process.env.NODE_ENV === "production") {

    // Set static folder
    app.use(express.static("client/build"));

    // index.html for all page routes
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}
// Server Listen
const port = process.env.Port || 3000
app.listen(port, () => {
    console.log(`Server Running at ${port}`)
})