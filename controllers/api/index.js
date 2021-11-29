const express = require('express');
const router = express.Router();
const userRoutes = require("./userRoutes.js");
const rascalRoutes = require("./rascalRoutes.js")
const limbRoutes = require("./limbRoutes.js")


router.use("/user",userRoutes)
router.use("/rascal",rascalRoutes)
router.use("/limb",limbRoutes)
module.exports = router;
