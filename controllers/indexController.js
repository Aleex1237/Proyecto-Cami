module.exports = {
    index: (req, res) => {
        return res.render("home",{title: "Inicio"})
    },

    contact: (req, res) => {
        return res.render("contact",{title: "Contacto"})
    },


    services: (req, res) => {
        return res.render("services",{title: "Servicios"})
    },

    aboutMe: (req, res) => {
        return res.render("aboutMe",{title: "Sobre mi"})
    },

    meme: (req, res) => {
        return res.render("meme",{title: "Meme"})
    }
}