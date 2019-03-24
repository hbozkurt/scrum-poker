import mongoose from "mongoose";

interface ConnectOptions {
  url: string;
}

async function connect(options: ConnectOptions) {
  mongoose.Promise = global.Promise;
  try {
    await mongoose.connect(options.url, { useNewUrlParser: true });
  } catch (err) {
    console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
    process.exit(1);
  }
}

export default connect;
