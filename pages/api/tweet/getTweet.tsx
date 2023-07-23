import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../lib/server/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const userId = req.session.userId;
      const tweet = await db.tweet.findFirst({
        where: {
          userId: Number(userId),
        },
      });
      res.status(200).json({ tweet });
    } catch (error) {
      console.error("Error fetching tweets:", error);
      res.status(500).json({ error: "Failed to fetch tweets" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
