const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const todoSchema = Schema({
  _id: Schema.Types.ObjectId,
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  //completed, in-progress
  status: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: null,
  },
  deletedAt: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model("Todo", todoSchema);
