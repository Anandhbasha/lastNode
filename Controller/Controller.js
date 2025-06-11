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
export const updateData = (req,res)=>{
    const {id} = req.params
    const{userPassword} = req.body
    res.send(`userPassword is:${userPassword} is Updated Succesfully`)
}
export const deleteData = (req,res)=>{
    const {id} = req.params
    res.send(`${id} User Deleted Succes`)
}