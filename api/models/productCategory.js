const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var URLSlug = require("mongoose-slug-generator");
mongoose.plugin(URLSlug);

const productCategorySchema = Schema({
  _id: Schema.Types.ObjectId,
  title: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    slug: "title",
  },
  parent: {
    type: Number,
    default: 0,
  },
  img: {
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
productCategorySchema.pre("save", function (next) {
  this.slug = this.title.split(" ").join("-");
  next();
});

module.exports = mongoose.model("ProductCategory", productCategorySchema);
