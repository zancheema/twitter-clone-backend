import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now()
    }
});

export default mongoose.model("Tweet", tweetSchema, "tweets");