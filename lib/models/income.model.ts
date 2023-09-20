import mongoose from "mongoose";

const incomeSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true
  }
});

const Income =
  mongoose.models.Income ||
  mongoose.model("Income", incomeSchema);

export default Income;
