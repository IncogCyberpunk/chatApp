import mongoose from "mongoose";

const connectToMondoDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to the database");
    } catch (error) {
        console.log("error connecting to the database");
        console.log(error);
    }
}

export default connectToMondoDb;