const express = require('express');
const router = express.Router();
const {Team} = require('../models');

router.get("/",(req,res)=>{
    Team.findAll().then(data=>{
        res.json(data)
    })
})

router.get("/:id",(req,res)=>{
    Team.findByPk(req.params.id).then(data=>{
        res.json(data);
    })
})
router.post("/",(req,res)=>{
    Team.create({
        name:req.body.name,
        city:req.body.city,
        primaryColor:req.body.primaryColor,
        accentColor:req.body.accentColor
    }).then(data=>{
        res.json(data)
    })
})

router.put("/:id",(req,res)=>{
    Team.update({
        name:req.body.name,
        city:req.body.city,
        primaryColor:req.body.primaryColor,
        accentColor:req.body.accentColor
    },{
        where:{
            id:req.params.id
        }
    }).then(data=>{
        res.json(data)
    })
})

router.delete("/:id",(req,res)=>{
    Team.destroy({
        where:{
            id:req.params.id
        }
    }).then(data=>{
        res.json(data);
    })
})

module.exports = router;