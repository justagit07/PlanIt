import mongoose  from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

  const  dbconnection = async ()=>
  {
   try {
    await mongoose.connect(process.env.MONGODB_URI)
     console.log('your connection is established ');
     
   } 
   catch (error) 
   {
    console.error('getting error in the database connectivity')
    console.log(error);
   }
  }



  export default dbconnection;

