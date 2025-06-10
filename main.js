import express from 'express'
import route from './Router/Router.js'
import dataBase from './Database/Database.js'

const app = express()
app.use(express.json())
const PORT = 3666

dataBase("mongodb://127.0.0.1:27017/Newone")
app.use(route)
app.listen(PORT,()=>{
    console.log(`This port is running under http://localhost:${PORT}`)   
})
