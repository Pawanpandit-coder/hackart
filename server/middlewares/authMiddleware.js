const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const verifyToken = (req,res,next)=>{
    try {
        
        const authHeader = req.headers['authorization']
    
        if(!authHeader){
            return res.status(401).json({message:"token required"})
        }
    
        const token = authHeader.split(' ')[1]
    
        if(!token){
            return res.status(401).json({message:'Invalid token'})
        }
    
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
    
        req.user = decoded;
    
        next()
    } catch (err) {
        return res.status(401).json({message:'Token is invalid or expired'})
    }
}
const generateToken = (userId)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET_KEY,{expiresIn:'4m'})
    return token;
}

module.exports = {generateToken, verifyToken}