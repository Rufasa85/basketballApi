const express = require('express');
const router = express.Router();
const {Player,Team} = require('../models');

router.get("/",(req,res)=>{
    Player.findAll().then(data=>{
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
    Player.findByPk(req.params.id,{
        include:[{
            model:Team,
            include:[Player]
        }]
    }).then(data=>{
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
    Player.create({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        age:req.body.age,
        jerseyNumber:req.body.jerseyNumber,
        position:req.body.position
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

router.put("/:id",(req,res)=>{
    Player.update({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        age:req.body.age,
        jerseyNumber:req.body.jerseyNumber,
        position:req.body.position
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
    Player.destroy({
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