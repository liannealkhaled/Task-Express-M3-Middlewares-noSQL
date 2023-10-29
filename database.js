const mongoose = require("mongoose");
// require.dotenve.config
require("dotenv").config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB_URL);
    console.log(`mongo connected`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
