import Tweet from "../model/Tweet.js"

export default {
    getTweets: async (req, res) => {
        try {
            const tweets = await Tweet.find();
            res.json(tweets);
        } catch (e) {
            res.status(400).send([]);
        }
    },
    saveTweet: async (req, res) => {
        const { text } = req.body;
        try {
            const tweet = new Tweet({ text: text });
            await tweet.save();
            res.json(tweet);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    }
}