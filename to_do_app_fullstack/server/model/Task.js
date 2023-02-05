import mongoose from "mongoose";

const TaskShema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  timeStamp: {
    type: String,
    default: Date.now(),
  },
});

const Task = mongoose.model("TaskModel", TaskShema);

export default Task;
