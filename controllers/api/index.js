const express = require('express');
const router = express.Router();
const userRoutes = require("./userRoutes.js");
const rascalRoutes = require("./rascalRoutes.js")
const itemRoutes = require("./itemRoutes.js")


router.use("/user",userRoutes)
router.use("/rascal",rascalRoutes)
router.use("/item",itemRoutes)
module.exports = router;
