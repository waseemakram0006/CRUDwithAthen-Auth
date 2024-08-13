const asyncHandler = require('express-async-handler');


const getGoal = asyncHandler(async (req, res) => {

    res.json({
        message: "Get Goals"
    });

});


const setGoal = asyncHandler(async (req, res) => {
    console.log(req.body.name);
    if (!req.body.name) {
        res.status(400);
        throw new Error('Add a name feild');

    }
    res.status(200).json({
        message: `${req.body.name}`
    });

});

const putGoal = asyncHandler(async (req, res) => {

    res.json({
        message: `Put Goals ${req.params.id}`
    });

});

const deleteGoal = asyncHandler(async (req, res) => {

    res.json({
        message: `Delete Goals ${req.params.id}`

    });

});


module.exports = {
    getGoal, setGoal, putGoal, deleteGoal
}