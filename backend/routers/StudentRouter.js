const express = require("express");
const studentController = require("../controller/studentController")

const router = express.Router();


router.post("/create/student", studentController.createPost);
router.get("/read/student", studentController.readData);
router.get("/readOne/student/:id", studentController.readOneData);
router.put("/update/student/:id", studentController.updateData);
router.delete("/delete/student/:id", studentController.deletData);


module.exports = router