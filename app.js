import express, { query } from 'express';
import connectsdb from './db/connectdb.js';

const app  = express();
const port = 3000;
const DATABASE_URL="mongodb://127.0.0.1:27017";

import { route } from './roughts/route.js';
app.use(express.json())


connectsdb(DATABASE_URL)


app.use('/',route)



app.listen(port,()=>{
    console.log('server is ready at port :${port}');
})