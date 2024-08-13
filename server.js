const express=require ("express");
const dotenv=require('dotenv').config();
const {errorHandler}=require('./middleware/errorMiddleware');
const connectDb=require('./config/db');
// const PORT=process.env.PORT || 5000;
const PORT=5000;
const app=express();


connectDb();


app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/goal',require('./routes/goalRoutes'));

app.use(errorHandler);

app.listen(PORT,()=>console.log(`server is running http://localhost:${PORT}`));