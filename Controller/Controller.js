export const read_data = (req,res)=>{
    res.send("Node is working")
}
export const insert_data = (req,res)=>{
    const {userName,userPassword} = req.body
    res.send(`UserName is :${userName} and userPasword is: ${userPassword}`)
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