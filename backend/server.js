const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const studentRouter = require("./routers/StudentRouter");
const teacherRouter = require("./routers/teacherRouter");
const documentRouter = require("./routers/documentRouter");

const Port = 2222;

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/SchoolSystem").then(() => {
    console.log("connected To The Mongoooose");
});

app.use(studentRouter);
app.use(teacherRouter);
app.use(documentRouter);

app.use("/allDocuments", express.static("document"))

app.listen(Port, () => {
    console.log(`The Server IS connected to the ${Port}`);
});
