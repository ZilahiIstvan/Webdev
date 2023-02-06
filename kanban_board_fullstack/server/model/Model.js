import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
  creator: {
    type: Boolean,
    default: false,
  },
  order: {
    type: Number,
    default: 0,
  },
  data: {
    type: [],
    default: [],
  },
});

const Boards = mongoose.model("Boards", Schema);

export default Boards;
