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

// get all the user data
app.get("/user/myUser", async (req, res) => {
  const myUserData = await userModel.find();

  res.json(myUserData);
});

// create user data
app.post("/user/createUser", (req, res) => {
  const createUser = new userModel({
    userName: req.body.userName,
    icon: req.body.icon,
  });

  createUser.save();

  res.json(createUser);
});

// commentModel

// get all the comment data
app.get("/comments/data", async (req, res) => {
  const commentsData = await commentsModel.find();

  res.json(commentsData);
});

// CREATE
// create new comment
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

// UPDATE
// update the vote values
app.put("/comments/update/vote/:id", async (req, res) => {
  const updateComment = await commentsModel.findById(req.params.id);
  updateComment.vote = {
    cnt: updateComment.vote.cnt + req.body.cnt,
    selector: req.body.selector,
  };

  updateComment.save();

  res.json(updateComment);
});

// update description
app.put("/comments/update/desc/:id", async (req, res) => {
  const updateComment = await commentsModel.findById(req.params.id);
  updateComment.description = req.body.description;

  updateComment.save();

  res.json(updateComment);
});

// DELETE
// delete a comment
app.delete("/comments/delete/:id", async (req, res) => {
  const deleteComment = await commentsModel.findByIdAndDelete(req.params.id);

  res.json(deleteComment);
});

mongoose.connect(mongooseConnStr).then(() => {
  console.log("Mongoo is running");
});

app.listen(app_endpoint, () => {
  console.log("Server is running");
});
