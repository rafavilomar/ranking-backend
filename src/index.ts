import express from "express";
import config from "../config";
import TeacherRoutes from "./Routes/TeacherRoutes";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/teacher", TeacherRoutes);

app.listen(config.api.port, () => {
  console.log(`Listening on port: ${config.api.port}`);
});
