import User from "../Model/Model.js"
import bcrypt from "bcryptjs"

export const read_data = async(req,res)=>{
    try {
        const read = await User.find()
        res.status(200).json(read)
    } catch (error) {
       res.status(402).json({message:"Unable to read Datas"}) 
    }
}
export const insert_data = async(req,res)=>{
    try {
        const {userName,userMobile} = req.body
        const exists = await User.findOne({userMobile})
        if(exists){
             return res.status(405).json({message:"User Already exist"})
        }
        const insert = await User({userName,userMobile}).save()
        return res.status(202).json({message:"Data Inserted Suceesfully",insert})
    } catch (error) {
        res.status(403).json({message:"Unable to insert Data"})
    }
}
export const updateData =async (req,res)=>{
    try {
        const {userName} = req.params
        const{userMobile} = req.body
        const updataUser = await User.findOneAndUpdate({userName},{$set:{userMobile}})
        if(!updataUser){
            return res.status(404).json({message:"User Not fount"})
        }
        return res.status(205).json({message:`Update ${userName}info Sucessfully`})
    } catch (error) {
        return res.status(500).json({message:"error"})
    }
}
export const deleteData = async(req,res)=>{
    try {
        const {userName} = req.params
        const deleteUser = await User.findOneAndDelete({userName})
        if(!deleteUser){
            return res.status(404).json({message:"User Not Found"})
        }
        return res.status(206).json({message:`${userName} User Deleted Success`})
    } catch (error) {
        return res.status(406).json({message:`${userName} Unable to Delete`})
    }
}

//register New user
export const insertUser = async(req,res)=>{
    try {
        const {userName,userPassword} = req.body
        const exist_user = await User.findOne({userName})
        if(exist_user){
            return res.status(404).json({message:"User already exist"})
        }
        // const insertUser = await User({userName,userPassword}).save()
        const Salt =await bcrypt.genSalt(10)
        const hassedPassword = await bcrypt.hash(userPassword,Salt)        
        const inserNewUser = await User({userName:userName,userPassword:hassedPassword}).save()
        return res.status(201).json({message:"Data Succesfully inserted",data:inserNewUser})
    } catch (error) {
        return res.status(423).json({message:"Data Not inserted",data:error})
    }
}