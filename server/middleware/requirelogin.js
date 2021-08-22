


module.exports =(req,res,next) => {
    const {authorization} = req.headers
    //authorization ===Bearer effacer4tgsdf
    if(!authorization){
        res.status(401).json({error:"You must be logged in"})
    }
    authorization.replace("Bearer","")

}