const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "../", "views", "index.html")); //dirname is the current folder name here it is routres
});
module.exports = router;
