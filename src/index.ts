import express from "express";
import cors from "cors";
import config from "../config";
import passport from "passport";
import bodyParser from "body-parser";

// ROUTES
import TeacherRoutes from "./Routes/TeacherRoutes";
import VoteRoutes from "./Routes/VoteRoutes";
import UsersRoutes from "./Routes/UsersRoutes";
import AuthRoutes from "./Routes/AuthRoutes";
import EmployeeRoutes from "./Routes/EmployeeRoutes";
import InterestRoutes from "./Routes/InterestRoutes";
import SchoolRoutes from "./Routes/SchoolRoutes";
import SubjectRoutes from "./Routes/SubjectRoutes";

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
app.use("/employee", passport.authenticate('jwt', { session: false }), EmployeeRoutes);
app.use("/interest", passport.authenticate('jwt', { session: false }), InterestRoutes);
app.use("/school", passport.authenticate('jwt', { session: false }), SchoolRoutes);
app.use("/subject", passport.authenticate('jwt', { session: false }), SubjectRoutes);

app.listen(config.api.port, () => {
  console.log(`Listening on port: ${config.api.port}`);
});
