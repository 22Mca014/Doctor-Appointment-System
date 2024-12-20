import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log("Database Connected on Localhost"));
        mongoose.connection.on('error', (error) => console.error("MongoDB Error:", error));
        
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (error) {
        console.error("MongoDB Connection Failed:", error.message);
        process.exit(1); // Exit the process with a failure code
    }
};

export default connectDB;
