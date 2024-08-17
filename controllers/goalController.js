const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalModel');
const User = require('../models/userModel');


const getGoal = asyncHandler(async (req, res) => {

    const goals = await Goal.find({ user: req.user.id })

    res.json(goals);

});


const setGoal = asyncHandler(async (req, res) => {

    if (!req.body.text) {
        res.status(400);
        throw new Error('Add a name feild');

    }

    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })
    res.status(200).json(goal);

});

const putGoal = asyncHandler(async (req, res) => {


    const data = await Goal.findById(req.params.id);
    if (!data) {
        res.status(400).json({
            message: "data not foiund"
        })
    }

    const user = await User.findById(req.user.id);
    if (!user) {
        res.status(401)
        throw new Error('User not fount')
    }
    // make sure the login user matches the goal user
    if (goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not found')
    }

    const updatedData = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.json(updatedData);

});

const deleteGoal = asyncHandler(async (req, res) => {

    const goal = await Goal.findById(req.params.id)

    if(!goal)
    {
        res.status(400)
        throw new Error('Goal not found')
    }


    const user = await User.findById(req.user.id);
    if (!user) {
        res.status(401)
        throw new Error('User not fount')
    }
    // make sure the login user matches the goal user
    if (goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not found')
    }


    await goal.remove()

    res.status(200).json({id:req.params.id})

});


module.exports = {
    getGoal, setGoal, putGoal, deleteGoal
}