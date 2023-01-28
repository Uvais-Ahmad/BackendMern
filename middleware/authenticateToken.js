const jwt = require('jsonwebtoken');
//for authenticate token
const auth = (req , res , next )=>{
    const token = req.cookies.access_token;
    if(!token ){
        return res.status(403).json({
            message : "Token missing"
        })
    }

    //verify the token and it return user object
    const decoded_token = jwt.verify(token ,process.env.JWT_Secret);
    if( !decoded_token ){
        return res.status(401).json({
            message : "UnAuthorisez user"
        })
    }
    req.user = decoded_token;
    return next();
}
module.exports = auth;