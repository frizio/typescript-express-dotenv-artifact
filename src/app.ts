import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (_req, res) => {
  res.send('<h1>Demo Express API with Typescript</h1>');
});


app.get("/ping", async (_req, res) => {
  res.send({
    message: "pong",
  });
});


export default app;
