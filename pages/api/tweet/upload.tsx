import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../lib/server/db";
import { withApiSession } from "../../../lib/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { payload } = req.body;
    const userId = req.session.userId!;
    const newTweet = await db.tweet.create({
      data: {
        payload,
        userId,
      },
    });
    res
      .status(201)
      .json({ message: "Data received successfully", tweet: newTweet });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

export default withApiSession(handler);
