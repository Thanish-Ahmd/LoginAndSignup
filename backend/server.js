const express = require("express") ;
const mongoose = require("mongoose") ;
const bodyParser = require("body-parser") ;
const cors = require("cors") ;
const dotnev = require("dotenv") ;
const app = express() ;
require("dotenv").config() ;



const  PORT = process.env.PORT || 8070 ;

app.use( cors() ) ;
app.use( bodyParser.json() ) ;


const URL = process.env.MONGODB_URL ;

mongoose.connect( URL ) ;


// mongoose.set('strictQuery', false);

const connection  = mongoose.connection ;

connection.once("open" , ()=> {
    console.log("Mongo db connection success!") ;
})


const userRouter = require("./api/Routes/users.js") ;
app.use("/user" , userRouter) ;


app.listen( PORT , () => {
    console.log(`Server is up and running on port ${PORT}`)
});