const express = require('express');
const router = express.Router();

const { getGoal, setGoal, putGoal, deleteGoal } = require('../controllers/goalController')

// Middleware for goal protection

const {protect}=require('../middleware/authMiddleware');


router.route('/').get(protect,getGoal).post(protect,setGoal);
router.route('/:id').put(protect,putGoal).delete(protect,deleteGoal);



module.exports = router; 