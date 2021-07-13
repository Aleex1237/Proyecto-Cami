const express = require("express");
const app = express();
const path = require("path");
const port = 3000
app.use(express.static("public"))

const indexRouter = require("./routes/indexRouter")


app.use("/", indexRouter)

app.use("/contact", indexRouter )

app.use("/services", indexRouter)

app.use("/aboutMe", indexRouter);

app.use("/meme", indexRouter)


app.listen(port, () => {
    console.log("Proyecto Cami funcionando en puerto " + port)
})