const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var URLSlug = require("mongoose-slug-generator");
mongoose.plugin(URLSlug);

const productSchema = Schema({
  _id: Schema.Types.ObjectId,
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    slug: "title",
  },
  coverImage: {
    type: String,
  },
  img: {
    type: String,
    required: true,
  },
  images: {
    type: String,
    required: true,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  isNew: {
    type: Boolean,
    default: false,
  },
  price: {
    type: Number,
    required: true,
  },
  discountType: {
    type: String,
    default: "percentage",
  },
  discount: {
    type: Number,
    default: 0,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
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
productSchema.pre("save", function (next) {
  this.slug = this.title.split(" ").join("-");
  next();
});

module.exports = mongoose.model("Product", productSchema);
