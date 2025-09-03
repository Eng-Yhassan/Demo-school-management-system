const express = require("express");
const documnerController = require("../controller/documentController")
const uploadDocument = require("../middleware/uploadDocument")

const router = express.Router();


router.post("/create/document", uploadDocument.single("newDoc"), documnerController.createPost);
router.get("/read/document", documnerController.readData);
router.get("/readOne/document/:id", documnerController.readOneData);
router.put("/update/document/:id", uploadDocument.single("newDoc"), documnerController.updateData);
router.delete("/delete/document/:id", documnerController.deletData);


module.exports = router