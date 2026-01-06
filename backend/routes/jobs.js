
import express from "express";
import Job from "../models/Job.js";
const router = express.Router();
router.post("/",async(req,res)=>{
  const job=await Job.create(req.body);
  res.json(job);
});
router.get("/",async(req,res)=>{
  res.json(await Job.find());
});
export default router;
