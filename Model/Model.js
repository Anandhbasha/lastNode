import mongoose from "mongoose";

const userModel = new mongoose.Schema(
    {
        userName:String,
        userMobile:Number,
        userAge:Number,
        userAddress:String
    }
)

const User = mongoose.model("Users",userModel,"register_User")

export default User