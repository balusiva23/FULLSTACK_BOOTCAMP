const router = require("express").Router();
const adminRouter = require("./admin");
const userRouter = require("./user");
const mentorRouter = require("./mentor");
const syllabusRouter = require("./syllabus");
router.use("/user",userRouter)
router.use("/admin",adminRouter)
router.use("/mentor",mentorRouter)
router.use("/syllabus",syllabusRouter)


module.exports = router;