const express = require("express");
const teacherController = require("../controller/teacherController")

const router = express.Router();


router.post("/create/teacher", teacherController.createPost);
router.get("/read/teacher", teacherController.readData);
router.get("/readOne/teacher/:id", teacherController.readOneData);
router.put("/update/teacher/:id", teacherController.updateData);
router.delete("/delete/teacher/:id", teacherController.deletData);


module.exports = router