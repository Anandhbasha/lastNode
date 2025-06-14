import express from 'express'
import { deleteData, insert_data, insertUser, read_data, updateData } from '../Controller/Controller.js'

const route = express.Router()

route.get('/', read_data)

route.post('/insert',insert_data)
route.put('/edit/:userName',updateData)
route.delete('/delete/:userName',deleteData)
route.post('/insertuser',insertUser)

export default route