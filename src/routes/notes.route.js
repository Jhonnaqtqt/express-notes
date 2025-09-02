import express from "express";
import prisma from "../config/prisma.config.js";

const router = express.Router();

// Update Note
router.put("/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const updatedNote = await prisma.note.update({
      where: { id: parseInt(id) },
      data: { title, content },
    });

    res.json({ message: "Note updated successfully", data: updatedNote });
  } catch (error) {
    console.error("Error updating note:", error);
    res.status(500).json({ error: "Failed to update note" });
  }
});

export default router;
