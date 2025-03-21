import { genrateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req,res)=>{
    const {fullName,email,password} = req.body
    try {
        if(password.length<6){
            return res.status(400).json({message:"Password must be at least 6 characters"});
        }

        const user = await User.findOne({eamil});

        if(user){
            return res.status(400).json({message:"Email already exists"});
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new User({
            fullName,
            email,
            password
        })

        if(newUser){
            genrateToken(newUser._id,res)
            await newUser.save();
            res.status(201).json({
                _id:newUser._id,
                fullName:newUser.fullName,
                email:newUser.email,
                profilePic:newUser.profilepic
            })
        }else{
            res.status(400).json({message:"Invalid user data"});
        }
    } catch (error) {
        
    }
}

export const login = (req,res)=>{
    res.send("login page");
    console.log(1)
}

export const logout = (req,res)=>{
    res.send("logout page");
}