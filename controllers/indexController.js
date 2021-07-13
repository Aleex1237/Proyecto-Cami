const path = require("path");


module.exports = {
    index: (req, res) => {
        res.sendFile(path.join(__dirname, "../views", "home.html"))
    },

    contact: (req, res) => {
        res.sendFile(path.join(__dirname, "../views", "contact.html"))
    },


    services: (req, res) => {
        res.sendFile(path.join(__dirname, "../views", "services.html"))
    },

    aboutMe: (req, res) => {
        res.sendFile(path.join(__dirname, "../views", "aboutMe.html"))
    },

    meme: (req, res) => {
        res.sendFile(path.join(__dirname, "../views", "meme.html"))
    }
}