const express = require('express');
const router = express.Router();
const { User, Rascal } = require('../../models');
const tokenAuth = require("../../middleware/tokenAuth")
const sequelize = require("../../config/connection.js")


router.get("/", (req, res) => {
    Rascal.findAll().then(rascals => {
        res.json(rascals)
    }).catch(err => {
        console.log(err)
        res.json(err)
    })
})
router.get("/load/:id", (req, res) => {
    Rascal.findOne({where:{UserId:req.params.id}}).then(rascal => {
        res.json(rascal)
    }).catch(err => {
        console.log(err)
        res.json(err)
    })
})

router.post("/new/:id",(req,res)=>{
    Rascal.create({...req.body,UserId:req.params.id}).then(newRascal=>{
        res.json(newRascal)
    }).catch(err=>{
        console.log(err)
        res.json(err)
    })
})
router.put("/update/:id",(req,res)=>{
    delete req.body.id
    console.log(req.body)
    Rascal.update(req.body,{where:{UserId:req.params.id}}).then(updatedRascal=>{
        res.json(updatedRascal)
    }).catch(err=>{
        console.log(err)
        res.json(err)
    })
})
// //////////This drops database, do not use
router.delete('/deletethisroute',(req,res)=>{
    // this will delete ALL data, including users
    sequelize.query('SET FOREIGN_KEY_CHECKS = 0').then(function() {
        sequelize
            .sync({
                force: true
            }).then(function() {
                sequelize.query('SET FOREIGN_KEY_CHECKS = 1').then(function() {
                    console.log('Database synchronised.');
                    res.send("success")
                });
            }).catch(function(err) {
                console.log(err);
                res.json(err)
            });;
    }).catch(function(err) {
        console.log(err);
        res.json(err)
    });
})
// ??????? Test Route
router.post('/postwithheaders',tokenAuth,(req,res)=>{
    res.json({
        body:req.body,
        message:"auth"
    })
})
module.exports = router