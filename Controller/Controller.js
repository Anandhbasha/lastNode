import User from "../Model/Model.js"

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