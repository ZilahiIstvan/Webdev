import mongoose from "mongoose";
import cors from "cors";
import express from "express";

import { userModel, commentsModel } from "./model/Model.js";

const app_endpoint = 3001;
const mongooseConnStr =
  "mongodb+srv://javascriptmastery:javascriptmastery@cluster0.bjmaauy.mongodb.net/?retryWrites=true&w=majority";

const app = express();
app.use(express.json());
app.use(cors());

// userModel

app.get("/user/myUser", async (req, res) => {
  const myUserData = await userModel.find();

  res.json(myUserData);
});

app.post("/user/createUser", (req, res) => {
  const createUser = new userModel({
    userName: req.body.userName,
    icon: req.body.icon,
  });

  createUser.save();

  res.json(createUser);
});

// commentModel

app.get("/comments/data", async (req, res) => {
  const commentsData = await commentsModel.find();

  res.json(commentsData);
});

app.post("/comments/create", (req, res) => {
  const createComment = new commentsModel({
    icon: req.body.icon,
    name: req.body.name,
    description: req.body.description,
    createdAt: req.body.createdAt,
  });

  createComment.save();

  res.json(createComment);
});

app.put("/comments/update/:id", async (req, res) => {
  const updateComment = await commentsModel.findById(req.params.id);
  updateComment.vote += req.body.vote;

  updateComment.save();

  res.json(updateComment);
});

mongoose.connect(mongooseConnStr).then(() => {
  console.log("Mongoo is running");
});

app.listen(app_endpoint, () => {
  console.log("Server is running");
});
