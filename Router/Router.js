import express from 'express'
import { deleteData, insert_data, read_data, updateData } from '../Controller/Controller.js'

const route = express.Router()

route.get('/', read_data)

route.post('/insert',insert_data)
route.put('/edit/:id',updateData)
route.delete('/delete/:id',deleteData)

export default route