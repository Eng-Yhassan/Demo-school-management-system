const documnetModel = require("../models/documentModel");

// Create Data
const createPost = async (req, res) => {
    const newData = documnetModel(
        {document: req.file.filename}
    );

    const saveData = await newData.save();

    if (saveData) {
        res.send(saveData);
    }
};

// Read Data 
const readData = async (req, res) => {
    const getData = await documnetModel.find();
    if (getData) {
        res.send(getData);
    }
};

// Read Single
const readOneData = async (req, res) => {
    const getOneData = await documnetModel.find(
        { _id: req.params.id }
    );

    if (getOneData) {
        res.send(getOneData);
    }
};

// Update Data 
const updateData = async (req, res) => {
    const updateData = await documnetModel.updateOne(
        { _id: req.params.id },
        { $set:{
             document : req.file ? req.file.filename : undefined
        }}
    );
    if(updateData){
        res.send("updated");
    }
};

// Delete Data 
const deletData = async (req,res) => {
    const deletData = await documnetModel.deleteOne(
        {_id:req.params.id}
    );

    if(deletData){
        res.send("deleted");
    }
};

module.exports = { createPost, readData, readOneData, updateData,deletData }