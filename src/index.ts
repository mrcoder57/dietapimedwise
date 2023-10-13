import fs from 'fs'
import http from "http";

import express from 'express';
import { Request,Response } from 'express';


 import { Router } from 'express';
 import routes from './routes/index2.js'


const app=express();

import connect from './utils/connect.js'

app.get('/',(req:Request,res:Response)=>{
    res.send("<h1> Hello</h1>")
})

const server = http.createServer(app);


server.listen(2000, async () => {
  console.log("server in running on http://localhost:2000")

  await connect();

  app.use('/', routes())
  
});


