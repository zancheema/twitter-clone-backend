import express from "express";
import tweetRouter from "./routes/tweet.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

// Config
const app = express();
dotenv.config();
const port = process.env.PORT || 5000;
const uri = process.env.DB_CONNECTION;

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/tweet", tweetRouter);

// Connect to the Database
async function connect() {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true });
        console.log("Connected to Db Successfully!");
    } catch (err) {
        console.log(`Error connecting to Db: ${err}`);
    }
}
connect();

// To ensure server is running
app.get("/", (req, res) => {
    res.send("<h2>Server running...</h2>")
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}...`);
});