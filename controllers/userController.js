const express = require('express');
const router = express.Router();
const {User} = require('../models');
const bcrypt = require("bcrypt");

router.get("/",(req,res)=>{
    User.findAll().then(data=>{
        res.json(data)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            msg:"an error occurred",
            err:err
        })
    })
})

router.get("/:id",(req,res)=>{
    User.findByPk(req.params.id).then(data=>{
        if(data){
           return  res.json(data);
        } else {
            res.status(404).json({
                msg:"no such record"
            })
        }
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            msg:"an error occurred",
            err:err
        })
    })
})
router.post("/",(req,res)=>{
    User.create({
       email:req.body.email,
        password:req.body.password
    }).then(data=>{
        res.status(201).json(data)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            msg:"an error occurred",
            err:err
        })
    })
})

router.post("/login",(req,res)=>{
    //find the user by the provided email,
    User.findOne({
        where:{
            email:req.body.email
        }
    }).then(userData=>{
        if(!userData){
            return res.status(404).json({msg:"no such user!"})
        } else {
            if(bcrypt.compareSync(req.body.password,userData.password)){
                return res.json(userData)
            } else {
                return res.status(401).json({msg:"wrong password"})
            }
        }
    })
    //ensure the passwords match
    //if so, login!
})

router.put("/:id",(req,res)=>{
    User.update({
       email:req.body.email,
        password:req.body.password
    },{
        where:{
            id:req.params.id
        }
    }).then(data=>{
        if(data[0]){
            return res.json(data)
        } else {
            return res.status(404).json({msg:"no such record"})
        }
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            msg:"an error occurred",
            err:err
        })
    })
})

router.delete("/:id",(req,res)=>{
    User.destroy({
        where:{
            id:req.params.id
        }
    }).then(data=>{
        if(data){
            return res.json(data)
        } else {
            return res.status(404).json({msg:"no such record"})
        }
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            msg:"an error occurred",
            err:err
        })
    })
})

module.exports = router;