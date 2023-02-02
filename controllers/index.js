const express = require('express');
const router = express.Router();

const teamRoutes = require("./teamController")
router.use("/api/teams",teamRoutes);

const playerRoutes = require("./playerController")
router.use("/api/players",playerRoutes);

router.get("/",(req,res)=>{
    res.send("this is from the controller!")
})

module.exports = router;