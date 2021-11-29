const express = require('express');
const router = express.Router();
const { User, Rascal, Limb } = require('../../models');
const tokenAuth = require("../../middleware/tokenAuth")
const sequelize = require("../../config/connection.js")

router.get('/',(req,res)=>{
    Limb.findAll().then(data=>{
        res.json(data)
    })
})
router.get('/rascal/:id',(req,res)=>{
    Limb.findAll({RascalId:req.params.id}).then(limbs=>{
        res.json(limbs)
    }).catch(err=>{
        console.log(err)
        res.json(err)
    })
})
router.post('/post/:id',(req,res)=>{
    Limb.create({...req.body,RascalId:req.params.id}).then(e=>{
        res.json("success")
    }).catch(err=>{
        console.log(err)
        res.json(err)
    })
})
router.put('/put/:id',(req,res)=>{
    Limb.update(req.body,{where:{RascalId:req.params.id,id:req.body.id}}).then(e=>{
        res.json("success")
    }).catch(err=>{
        console.log(err)
        res.json(err)
    })
})


module.exports = router