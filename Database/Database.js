import mongoose from "mongoose"

const dataBase = (URL)=>{
    try {
        mongoose.connect(URL)
        const db = mongoose.connection
        db.once("open",()=>{
            console.log("Db is Connected");
            
        })
    } catch (error) {
        console.log("Unable to connect Db");
        
    }
}
export default dataBase