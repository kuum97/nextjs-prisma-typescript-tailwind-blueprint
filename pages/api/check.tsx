import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "../../lib/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const session = req.session;
    if (session && session.loggedIn === true) {
      res.status(200).json({ isLoggedIn: true });
    } else {
      res.status(200).json({ isLoggedIn: false });
    }
  } else {
    res.status(405).end();
  }
}

export default withApiSession(handler);
