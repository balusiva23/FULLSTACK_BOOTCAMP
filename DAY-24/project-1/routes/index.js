const mentorRoute = require("./mentor");
const UserRoute = require("./user");

const router = require("express").Router();

router.use("/mentor",mentorRoute);
router.use("/user",UserRoute);

module.exports = router; 