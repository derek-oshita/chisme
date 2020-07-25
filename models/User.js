const mongoose = require('mongoose');

// --- User Schema --- // 

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, minlength: 2 },
    email: { type: String, required: true, lowercase: true, trim: true },
  },
  { timestamps: true,}
);

// --- Export Model --- // 

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
