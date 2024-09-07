import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,  // Ensure email is unique
    trim: true,
    lowercase: true
  },
  username: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true });  // Automatically add createdAt and updatedAt fields

userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
  };
  
const User = mongoose.model('User', userSchema);

export default User