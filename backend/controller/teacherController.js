const teacherModel = require("../models/TeacherModel");


// Create Data
const createPost = async (req, res) => {
    const newData = teacherModel(req.body);

    const saveData = await newData.save();

    if (saveData) {
        res.send(saveData);
    }
};

// Read Data 
const readData = async (req, res) => {
    const getData = await teacherModel.find();
    if (getData) {
        res.send(getData);
    }
};

// Read Single
const readOneData = async (req, res) => {
    const getOneData = await teacherModel.find(
        { _id: req.params.id }
    );

    if (getOneData) {
        res.send(getOneData);
    }
};

// Update Data 
const updateData = async (req, res) => {
    const updateData = await teacherModel.updateOne(
        { _id: req.params.id },
        { $set:req.body}
    );
    if(updateData){
        res.send("updated");
    }
};

// Delete Data 
const deletData = async (req,res) => {
    const deletData = await teacherModel.deleteOne(
        {_id:req.params.id}
    );

    if(deletData){
        res.send("deleted");
    }
};

module.exports = { createPost, readData, readOneData, updateData,deletData }