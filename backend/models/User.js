
import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  name:String,
  email:String,
  password:String,
  role:{type:String,enum:["admin","employer","jobseeker"],default:"jobseeker"}
});
export default mongoose.model("User",UserSchema);
