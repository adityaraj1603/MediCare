const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected to mongoDB`.bgGreen.white);
  } catch (error) {
    console.log(`error while connected to mongoDB`.bgRed.white);
  }
};

module.exports = connectDB;
