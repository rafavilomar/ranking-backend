import express from "express";
import config from '../config';

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(config.api.port, () => {
  console.log(`Listening on port: ${config.api.port}`);
});
