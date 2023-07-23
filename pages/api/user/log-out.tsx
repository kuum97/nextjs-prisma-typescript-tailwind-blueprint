import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "../../../lib/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    if (req.session) {
      req.session.destroy();
    }
    return res.status(200).end();
  } else {
    return res.status(405).end();
  }
}

export default withApiSession(handler);
