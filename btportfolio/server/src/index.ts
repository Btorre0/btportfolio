import express from "express";
import cors from "cors";
import contactRouter from "./routes/contact";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRouter);

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
