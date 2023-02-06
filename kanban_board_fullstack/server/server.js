import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import Boards from "./model/Model.js";

const connection_str =
  "mongodb+srv://javascriptmastery:javascriptmastery@cluster0.bjmaauy.mongodb.net/?retryWrites=true&w=majority";

const port = 3001;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/boards", async (req, res) => {
  const boards = await Boards.find();

  res.json(boards);
});

app.post("/create/board", async (req, res) => {
  const newBoard = await new Boards({
    name: req.body.name,
  });

  newBoard.save();

  res.json(newBoard);
});

mongoose
  .connect(connection_str)
  .then(() => {
    console.log("Mongo DB connected");
  })
  .catch((err) => console.log(err.message));

app.listen(port, () => {
  console.log("Server is running!");
});
