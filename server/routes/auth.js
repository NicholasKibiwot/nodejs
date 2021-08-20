const express = require('express')
const router = express.Router()
mongoose =require('mongoose')
const User =mongoose.model("User")

router.get('/',(req,res) =>{
    res.send("Hello")
})

router.post('/signup',(req,res) =>{
    const{name,email,password} = req.body
    if(!name || !password || !email){
     return res.status(422).json({errors:"please add all the fields"})
    }
    User.findOne({email:email})
    .then((savedUser) => {
        if(savedUser){
            return res.status(422).json({errors:"user already exists with that email"})
        }
        const user = new User({email,
        password,
        name})
        user.save()
        .then(user => {
            res.json({message:"saved succesfully"})
        })
        .catch((err) => {
            console.log(err)
        })
    })
    .catch(err => {
        console.log(err)
    })
})


module.exports = router