import express from "express";
import cors from "cors";
import config from "../config";

// ROUTES
import TeacherRoutes from "./Routes/TeacherRoutes";
import VoteRoutes from "./Routes/VoteRoutes";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/teacher", TeacherRoutes);
app.use("/vote", VoteRoutes);

app.listen(config.api.port, () => {
  console.log(`Listening on port: ${config.api.port}`);
});
