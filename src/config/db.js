const mongoose = require("mongoose");

const connectDB = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URI).then(() => {
      console.log("DB connected successfully");
    });
  } catch (error) {
    console.log("Error in DB Connection");
  }
};

module.exports = connectDB;
