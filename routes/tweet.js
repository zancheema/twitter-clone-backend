import { Router } from "express";
import controller from "../controllers/tweet.js";

const router = Router();

router.get("/", controller.getTweets);
router.post("/", controller.saveTweet);

export default router;