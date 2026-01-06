
import express from "express";
import User from "../models/User.js";
import Job from "../models/Job.js";
const router = express.Router();
router.get("/users",async(req,res)=>res.json(await User.find()));
router.get("/jobs",async(req,res)=>res.json(await Job.find()));
export default router;
