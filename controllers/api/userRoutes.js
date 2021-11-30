const express = require('express');
const router = express.Router();
const { User, Rascal } = require('../../models');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const tokenAuth = require("../../middleware/tokenAuth")

// Routes for finding users
router.get("/", (req, res) => {
    User.findAll().then(users => res.json(users)).catch(err => {
        console.log(err)
        res.json(err)
    })
})
router.get("/byid/:id", (req, res) => {
    User.findByPk(req.params.id).then(user => res.json(user)).catch(err => {
        console.log(err)
        res.json(err)
    })
})
router.post("/new",(req,res)=>{
    User.create({
        email:req.body.email,
        password:req.body.password,
        lastLoggedOn: Date.now()
        
    }).then(newUser=>res.json(newUser)).catch(err=>{
        console.log(err)
        res.json(err)
    })
})
router.post("/login",(req,res)=>{
    User.findOne({
        where: {
            email:req.body.email
        }
        
    }).then(foundUser=>{
        if(!foundUser){
            res.status(401).json({ message: "Incorrect Credentials" })
        }else {
            if (bcrypt.compareSync(req.body.password, foundUser.password)){
                const token = jwt.sign({
                    email:foundUser.email,
                    id:foundUser.id
                },
                process.env.JWT_SECRET
                ,{
                    expiresIn:"2h"
                })    
                res.json({
                    token:token,
                    user:foundUser
                });
                User.update({lastLoggedOn:Date.now()},{where:{id:foundUser.id}})
            }else{
                res.json("Incorrect Credentials")
            }
        }
    }).catch(err=>{
        console.log(err)
        res.json(err)
    })
})

router.get("/verify",tokenAuth,(req,res)=> {
    User.findByPk(req.user.id).then(foundUser=>{
        res.json(foundUser)
    }).catch(err=>{
        console.log(err)
        res.json({err:err,message:"InvalidToken"})
    })
})

module.exports = router