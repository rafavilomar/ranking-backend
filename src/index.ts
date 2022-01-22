import express from "express";
import cors from "cors";
import config from "../config";

// ROUTES
import TeacherRoutes from "./Routes/TeacherRoutes";
import VoteRoutes from "./Routes/VoteRoutes";
import UsersRoutes from "./Routes/UsersRoutes";
import AuthRoutes from "./Routes/AuthRoutes";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/", AuthRoutes);
app.use("/teacher", TeacherRoutes);
app.use("/vote", VoteRoutes);
app.use("/user", UsersRoutes);

app.listen(config.api.port, () => {
  console.log(`Listening on port: ${config.api.port}`);
});
