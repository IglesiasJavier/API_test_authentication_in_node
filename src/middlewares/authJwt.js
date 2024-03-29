import  jwt from "jsonwebtoken";
import config from "../config";
import User from "../models/User";

export const verifyToken = async (req,res,next) => {
    try {
        const token = req.headers["x-access-token"];
        if (!token) return res.status(403).json({message:"No token provided"})
        
        const decoded  = jwt.verify(token,config.SECRET);
        
        req.user_id = decoded.id;
        const user = await User.findById(req.user_id,{password:0});
        
        if(!user) return res.status(404).json({message:"user not found"});
        
        next();
    } catch (error) {
        return res.status(401).json({message:error.message});
    }
 
}