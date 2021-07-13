const express = require("express");
const router = express.Router();

const { index, contact, services, aboutMe, meme } = require("../controllers/indexController")

router.get("/", index)

router.get("/contact", contact)

router.get("/services", services)

router.get("/aboutMe", aboutMe);

router.get("/meme", meme)

module.exports = router;