import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../lib/server/db";
import hashPassword from "../../../lib/server/hashPassword";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, password, password_confirm } = req.body;
    if (password == password_confirm) {
      const hashedPassword = await hashPassword(password);
      const newUser = await db.user.create({
        data: {
          email,
          hashedPassword,
        },
      });
      res
        .status(201)
        .json({ message: "Data received successfully", user: newUser });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
