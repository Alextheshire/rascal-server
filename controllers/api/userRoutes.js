const { application } = require('express');
const express = require('express');
const router = express.Router();
const { User, Rascal } = require('../../models');
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
    User.findAll().then(users => res.json(users)).catch(err => {
        console.log(err)
        res.json(err)
    })
})
router.get("/:id", (req, res) => {
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
            res.status(401).json({ message: "incorrect email or password" })
        }else {
            if (bcrypt.compareSync(req.body.password, foundUser.password)){
                res.json("Authenticated")
            }else{
                res.json("password bad")
            }
        }
    }).catch(err=>{
        console.log(err)
        res.json(err)
    })
})

module.exports = router