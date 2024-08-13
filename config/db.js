const mongoose=require('mongoose');

const connectDB=async ()=>{

    try {
        
        const connection=await mongoose.connect(process.env.MONGO_URI);

        console.log('Db connected');

    } catch (error) {
        
        console.log(error);
        process.exit(1)
    }

}


module.exports=connectDB