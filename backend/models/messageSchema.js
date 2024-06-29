import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required:true,
        minLength:[3, "First Name Must contain At Least 3 characters!"]
    },
    lastName: {
        type:String,
        required:true,
        minLength:[3, "Last Name Must contain At Least 3 characters!"]
    },
    email: {
        type:String,
        required:true,
        validate:[validator.isEmail,"Please Provide A Valid Email!"]
    },
    phone: {
        type:String,
        required:true,
        minLength: [10, "Phone Number Must contain exact 10 Digits!"],
        maxLength: [10, "Phone Number Must contain exact 10 Digits!"],
    },
    message: {
        type:String,
        required:true,
    },
});

export const Message = mongoose.model("Message", messageSchema);