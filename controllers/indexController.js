module.exports = {
    index: (req, res) => {
        return res.render("home")
    },

    contact: (req, res) => {
        return res.render("contact")
    },


    services: (req, res) => {
        return res.render("services")
    },

    aboutMe: (req, res) => {
        return res.render("aboutMe")
    },

    meme: (req, res) => {
        return res.render("meme")
    }
}