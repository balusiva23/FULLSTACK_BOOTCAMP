function permit(allowed) {
    const isAllowed = (role)=>allowed.indexOf(role) > -1;
    return (req,res,next)=>{
        if(req.loginType && isAllowed(req.loginType)){
            next()
        }else{
            res.json({msg:"Not Authorized"});
        }
    }
}

module.exports = permit;