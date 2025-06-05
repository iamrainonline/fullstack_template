import express from "express";
import authRoutes from "./routes/auth.js";
import posts from "./routes/posts.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());

// CORS
const corsConfig = {
  origin: "http://localhost:3000",
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,POST,DELETE, PATCH",
};
app.use(cors(corsConfig));

app.use("/api/auth", authRoutes);
app.use("/api/posts", posts);

app.listen(9000, () => {
  console.log("Listening on port 9000");
});
