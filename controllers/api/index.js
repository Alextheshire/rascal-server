const express = require('express');
const router = express.Router();
const userRoutes = require("./userRoutes.js");
const rascalRoutes = require("./rascalRoutes.js")


router.use("/user",userRoutes)
router.use("/rascal",rascalRoutes)
module.exports = router;
