import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect(process.env.MONGOURI).then(()=>console.log("DB Connected"));
   
}