const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const contactFormSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  //subscribed = true, un-subscribed = false
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  reply: {
    type: String,
  },
  repliedAt: {
    type: Date,
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

module.exports = mongoose.model("ContactForm", contactFormSchema);
