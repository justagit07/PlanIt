import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import dbconnection from './connection/dbconnection.js'
import bodyParser from 'body-parser'
import cors from 'cors'
import userroutes from './routes/userroutes.js'


const app = express()

// middle ware to parse the request data
app.use(express.json())
app.use(bodyParser.json({limit: "30mb", extended:true}))

app.use(cors(
    {
        origin:process.env.CORS,
        credentials:true,
        methods:["PUT", "DELETE", "POST", "GET", "PATCH"]
    }
))

/* **************************** database connection *************************/
dbconnection();


app.listen(process.env.PORT, ()=>
{
    console.log(`your server is running at the 3000  http://localhost:${process.env.PORT}`);
})


// routes

app.use('/user', userroutes)