const express = require('express');
const router = express.Router();
const {Team} = require('../models');

router.get("/",async (req,res)=>{
    try {
        const teamData = await Team.findAll();
        return res.json(teamData)
    } catch(err){
        console.log(err);
        res.status(500).json({
            msg:"an error occurred",
            err:err
        })
    }
})

router.get("/:id",async (req,res)=>{
    try{
        const oneTeam = await Team.findByPk(req.params.id);
        if(oneTeam) {
           return res.json(oneTeam)
        } else {
            return res.status(404).json({msg:"no such record"})
        }
    }catch(err){
        console.log(err);
        res.status(500).json({
            msg:"an error occurred",
            err:err
        })
    }
})
router.post("/", async (req,res)=>{
    try{
        const newTeam =  await Team.create({
            name:req.body.name,
            city:req.body.city,
            primaryColor:req.body.primaryColor,
            accentColor:req.body.accentColor
        })
        res.status(201).json(newTeam)
    } catch(err){
        console.log(err);
        res.status(500).json({
            msg:"an error occurred",
            err:err
        })
    }
})

router.put("/:id",async (req,res)=>{
    try {

        const updateTeam = await Team.update({
            name:req.body.name,
            city:req.body.city,
            primaryColor:req.body.primaryColor,
            accentColor:req.body.accentColor
        },{
            where:{
                id:req.params.id
            }
        })
        if(updateTeam[0]){
            return res.json(updateTeam)
        } else {
            return res.status(404).json({msg:"no such record"})
        }
    }catch(err){
        console.log(err);
        res.status(500).json({
            msg:"an error occurred",
            err:err
        })
    }
})

router.delete("/:id",async (req,res)=>{
    try{
        const delTeam = await Team.destroy({
            where:{
                id:req.params.id
            }
        })
        if(delTeam){
            return res.json(delTeam)
        } else {
            return res.status(404).json({msg:"no such team"})
        }
    }catch(err){
        console.log(err);
        res.status(500).json({
            msg:"an error occurred",
            err:err
        })
    }
})

module.exports = router;