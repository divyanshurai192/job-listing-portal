
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
const router = express.Router();
router.post("/register",async(req,res)=>{
  const hash=await bcrypt.hash(req.body.password,10);
  const user=await User.create({...req.body,password:hash});
  res.json(user);
});
router.post("/login",async(req,res)=>{
  const user=await User.findOne({email:req.body.email});
  if(!user) return res.status(404).json({msg:"User not found"});
  const ok=await bcrypt.compare(req.body.password,user.password);
  if(!ok) return res.status(401).json({msg:"Invalid"});
  const token=jwt.sign({id:user._id,role:user.role},"secret");
  res.json({token,user});
});
export default router;
