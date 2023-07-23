import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../lib/server/db";
import { withApiSession } from "../../../lib/server/withSession";

const bcrypt = require("bcrypt");

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      return res.status(201).json({ error: "User is not found" });
    }
    const hashedPassword = user.hashedPassword;
    const isPasswordValid = await bcrypt.compare(password, hashedPassword);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Incorrect password" });
    }
    req.session.loggedIn = true;
    req.session.userId = user.id;
    await req.session.save();
    res.status(200).json({ message: "Log in successfully", isPasswordValid });
  } else {
    res.status(500).json({ message: "Server error" });
  }
}

export default withApiSession(handler);
