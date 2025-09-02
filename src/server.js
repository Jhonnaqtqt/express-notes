import express from "express";
import notesRouter from "./routes/notes.js";

const app = express();
app.use(express.json());

// Routes
app.use("/api", notesRouter);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
