    //Dependencies
const morgan = require('morgan');
const express = require('express');   //aqui se importa la libreria express
const app = express();  //se crea una instancia 
const user = require('./routes/user')

//middleware
app.use(morgan('dev'));
    //para usar el body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/" , (req,res,next)=>{
    res.status(200).json({code:1,message:"Bienvenido al Servidor"})
});

app.use("/user",user)


app.use((req,res,next)=>{
    return res.status(404).json({code:404, message:"URL no encontrada"});
});

app.listen(process.env.PORT ||3000, () => {
    console.log("Server is running... ;)")
});//uso de funcion flecha


