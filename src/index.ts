import express from "express";
import cors from "cors";
import config from "../config";
import passport from "passport";

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
  res.send("Welcome to Ranking! :)");
});
app.use("/", AuthRoutes);
app.use("/teacher", passport.authenticate('jwt', { session: false }), TeacherRoutes);
app.use("/vote", passport.authenticate('jwt', { session: false }), VoteRoutes);
app.use("/user", passport.authenticate('jwt', { session: false }), UsersRoutes);

app.listen(config.api.port, () => {
  console.log(`Listening on port: ${config.api.port}`);
});
