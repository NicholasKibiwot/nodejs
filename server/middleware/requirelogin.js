
const jwt =require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')



module.exports =(req,res,next) => {
    const {authorization} = req.headers
    //authorization ===Bearer effacer4tgsdf
    if(!authorization){
        res.status(401).json({error:"You must be logged in"})
    }
    const token = authorization.replace("Bearer","")
    jwt.verify(token,JWT_SECRET,(err, payload) => {
        if(err){
        res.status(401).json({error:"You must be logged in"})
    }})

}