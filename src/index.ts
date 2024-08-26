import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import healthRoutes from "./routes/healthRoutes";

dotenv.config();

const app = express();
const port = 3000;

app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use("/health", healthRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
