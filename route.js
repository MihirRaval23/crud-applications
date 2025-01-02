import express from 'express';
const route = express.Router()
import {getallRecords,createnewrecord,readrecordbyid,updaterecordbyid,deleterecordbyid,filterrecord, sortRecords} from '../controllers/crudcontrollers.js';


route.get('/',getallRecords)

route.post('/create',createnewrecord);

route.get('/read/:id',readrecordbyid);

route.post('/update/:id',updaterecordbyid);

route.get('/delete/:id',deleterecordbyid);

route.get('/students',filterrecord);

route.get('/students/sort',sortRecords);



export{route};