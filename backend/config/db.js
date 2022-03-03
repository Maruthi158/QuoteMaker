const mongoose = require("mongoose");
const URI =
  process.env.URI ||
  "mongodb+srv://Maruthi158:Jethin%401227@cluster0.amapl.mongodb.net/QuoteMaker?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      URI,{
        useUnifiedTopology: true,
        useNewUrlParser: true,
        // useCreateIndex: true,
      }
    );
    console.log(`MongoDB Connected : ${conn.connection.host}`);
  } catch (Error) {
    console.error(`Error : ${Error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
