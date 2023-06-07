const jwt = require("jsonwebtoken");

async function authenticate(req,res,next){
    try {
        const token =  req.headers["authorization"];
        if(!token){
            return res.json({msg:"Access Denied"});
        }
        const data = await jwt.verify(token,process.env.SECRET_KEY);
        req.userId = data.userId;
        req.loginType = data.loginType;
        next()
    } catch (error) {
        return res.json({msg:"Access Denied"});
    }
}

module.exports = authenticate;