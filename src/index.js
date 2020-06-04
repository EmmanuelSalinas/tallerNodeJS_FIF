    //Dependencies
const morgan = require('morgan');
const express = require('express');   //aqui se importa la libreria express
const app = express();  //se crea una instancia 
const user = require('./routes/user')

//middleware
app.use(morgan('dev'));

app.get("/" , (req,res,next)=>{
    res.send("Bienvenido al servidor");
});

app.use("/user",user)

app.listen(process.env.PORT ||3000, () => {
    console.log("Server is running... ;)")
});//uso de funcion flecha


