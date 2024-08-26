const mongoose=require('mongoose');


const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI)
        console.log(`mongo db connected`)

        }catch(err){
        console.log(`Error:${err.message}`)
        process.exit(1);
        }

    }
 module.exports=connectDB;