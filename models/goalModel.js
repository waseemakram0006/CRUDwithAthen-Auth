const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'add a text']
    },

},

    {
        timesstamps: true,
    }
)

module.exports=mongoose.model('Goal',goalSchema);