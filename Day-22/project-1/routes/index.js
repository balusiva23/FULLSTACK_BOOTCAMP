const router = require("express").Router();
const userRoute = require("./user")
const mentorRoute = require("./mentor")
router.use("/user",userRoute);
router.use("/mentor",mentorRoute);

module.exports = router;