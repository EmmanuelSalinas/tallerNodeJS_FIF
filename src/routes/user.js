const express = require("express");
const user = express.Router();
const jwt= require('jsonwebtoken');
const db = require('../config/database')


user.get('/:id([0-9]{1,3})', async(req,res,next)=>{
    const id = req.params.id;
    const user = await db.query(`SELECT * FROM user WHERE user_id ='${id}';`);
    
    console.log(id);

    if(id >= 1 && id <= 100){
        if(user.length == 1){    
            console.log("esta dentro1")
            return res.status(200).json({code:200 , message:user})
        }
        else{
            return res.status(404).json({code: 404, message: "usuario no encontrado"});
        }
    }
    else{
        return res.status(404).json({code: 404, message: "id invalido"});
    }
});


user.get('/' , async(req,res,next)=>{
    const user = await db.query("SELECT * FROM user");
    
    return res.status(200).json({code:200, message:user});
});



//va al final
module.exports=user;