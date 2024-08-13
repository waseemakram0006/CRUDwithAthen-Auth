const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalModel');


const getGoal = asyncHandler(async (req, res) => {

    const goals = await Goal.find()

    res.json(goals);

});


const setGoal = asyncHandler(async (req, res) => {

    if (!req.body.text) {
        res.status(400);
        throw new Error('Add a name feild');

    }

    const goal = await Goal.create({
        text: req.body.text
    })
    res.status(200).json(goal);

});

const putGoal = asyncHandler(async (req, res) => {


    const data=await Goal.findById(req.params.id);
    if(!data)
    {
        res.status(400).json({
            message:"data not foiund"
        })
    }

    const updatedData=await Goal.findByIdAndUpdate(req.params.id, req.body,{new:true});

    res.json(updatedData);

});

const deleteGoal = asyncHandler(async (req, res) => {

    const deleteData=await Goal.findByIdAndDelete(req.params.id, req.body,{new:true});

    res.json(deleteData);

});


module.exports = {
    getGoal, setGoal, putGoal, deleteGoal
}