import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "HOSPITAL_MNG_SYSTEM_DEPLOYED"
    }).then(()=>{
        console.log("database connected successfully!!");
    }).catch(err=>{
        console.log(`error occured: ${err}`);
    });
};