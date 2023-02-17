import mongoose from "mongoose";

const UserModel = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});

const Comments = mongoose.Schema({
  icon: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    default: "5 minutes ago",
  },
  replies: {
    type: [],
    default: [],
  },
  description: {
    type: String,
    default: "",
  },
  vote: {
    type: {},
    default: {
      cnt: 0,
      selector: 0,
    },
  },
});

export const userModel = mongoose.model("userModel", UserModel);
export const commentsModel = mongoose.model("commentsModel", Comments);
