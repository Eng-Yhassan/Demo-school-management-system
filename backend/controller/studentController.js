const studentModel = require("../models/StudentModel");


// Create Data
const createPost = async (req, res) => {
    const newData = studentModel(req.body);

    const saveData = await newData.save();

    if (saveData) {
        res.send(saveData);
    }
};

// Read Data 
const readData = async (req, res) => {
    const getData = await studentModel.find();
    if (getData) {
        res.send(getData);
    }
};

// Read Single
const readOneData = async (req, res) => {
    const getOneData = await studentModel.find(
        { _id: req.params.id }
    );

    if (getOneData) {
        res.send(getOneData);
    }
};

// Update Data 
const updateData = async (req, res) => {
    const updateData = await studentModel.updateOne(
        { _id: req.params.id },
        { $set:req.body}
    );
    if(updateData){
        res.send("updated");
    }
};

// Delete Data 
const deletData = async (req,res) => {
    const deletData = await studentModel.deleteOne(
        {_id:req.params.id}
    );

    if(deletData){
        res.send("deleted");
    }
};

module.exports = { createPost, readData, readOneData, updateData,deletData }