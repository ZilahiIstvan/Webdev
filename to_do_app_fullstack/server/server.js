import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import Task from "./model/Task.js";

const app = express();
const dataBaseConnStr =
  "mongodb+srv://javascriptmastery:javascriptmastery@cluster0.bjmaauy.mongodb.net/?retryWrites=true&w=majority";
const port = 3001;

app.use(express.json());
app.use(cors());

app.get("/tasks", async (req, res) => {
  const tasks = await Task.find();

  res.json(tasks);
});

app.post("/tasks/new", (req, res) => {
  const newTask = new Task({
    text: req.body.text,
  });

  newTask.save();

  res.json(newTask); // to async await can be used
});

app.put("/tasks/completed/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);
  task.completed = !task.completed;

  task.save();

  res.json(task);
});

app.delete("/tasks/delete/:id", async (req, res) => {
  const tasks = await Task.findByIdAndDelete(req.params.id);

  res.json(tasks);
});

mongoose
  .connect(dataBaseConnStr)
  .then(() => console.log("Mongo database connected!"))
  .catch((err) => console.log(err.error));

app.listen(port, () => console.log("Server is running!"));
