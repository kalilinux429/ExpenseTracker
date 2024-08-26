const express=require('express');
const dotenv=require('dotenv');
const colors=require('colors');
const morgan=require('morgan')
const transaction=require('./routes/transactions');
const connectDB=require('./config/db')
dotenv.config({path:'./config/config.env'})
 
const app=express();
app.use(express.json());
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
connectDB();
app.get('/',(req,res)=>res.send('Hello'))

const PORT=process.env.PORT || 5000;

app.listen(PORT,console.log( `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

app.use('/api/v1/transactions',transaction);