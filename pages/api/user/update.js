import { getSession } from "next-auth/react";
import prisma from "../../../prisma.config";

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (!session) return res.status(401).json({ error: "Non autorisé" });

  if (req.method === "POST") {
    const { name, image } = req.body;

    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: { name, image },
    });

    return res.status(200).json({ success: true, user: updatedUser });
  }

  res.status(405).json({ error: "Méthode non autorisée" });
}
