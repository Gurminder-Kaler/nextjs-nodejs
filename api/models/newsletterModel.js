const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const newsletterSchema = Schema({
  _id: Schema.Types.ObjectId,
  newsletterEmail: {
    type: String,
    required: true,
  },
  //subscribed = true, un-subscribed = false
  subscribed: {
    type: Boolean,
    default: true,
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

module.exports = mongoose.model("Newsletter", newsletterSchema);
