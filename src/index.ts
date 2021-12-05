import express from "express";
import config from "../config";

// ROUTES
import TeacherRoutes from "./Routes/TeacherRoutes";
import CommentRoutes from "./Routes/CommentRoutes";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/teacher", TeacherRoutes);
app.use("/comment", CommentRoutes);

app.listen(config.api.port, () => {
  console.log(`Listening on port: ${config.api.port}`);
});
