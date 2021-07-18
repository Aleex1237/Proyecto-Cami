const express = require("express");
const app = express();
const path = require("path");
const port = 3000
app.use(express.static("public"))

//set view engine
app.set("view engine", "ejs")

//Asignando carpeta views
app.set("views", path.join(__dirname, "views"))

//REQUIRIENDO ROUTES
const indexRouter = require("./routes/indexRouter")

//CREANDO RUTAS
app.use("/", indexRouter)

app.use("/contact", indexRouter )

app.use("/services", indexRouter)

app.use("/aboutMe", indexRouter);

app.use("/meme", indexRouter)

//LEVANTANDO SERVIDOR
app.listen(port, () => {
    console.log("Proyecto Cami funcionando en puerto " + port)
})