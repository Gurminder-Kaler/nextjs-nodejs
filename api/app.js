require("module-alias/register");
require('dotenv').config()
const express = require("express");
const app = express();
const todoRouter = require("@routes/todoRouter");
const authRouter = require("@routes/authRouter");
const newsletterRouter = require("@routes/newsletterRouter");
const userRouter = require("@routes/userRouter");
const mongoose = require("mongoose");
const db = mongoose.connection;
const bodyParser = require("body-parser"); 
const uri = `mongodb+srv://civil:civil0892@cluster0.k6hf6.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// app.use(morgan("dev"));

app.use("/uploads", express.static("uploads"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use('cors');
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", function callback() {
  console.log("Database Connected! API URL : "+process.env.API_URL);
});

mongoose.promise = global.Promise;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use("/api/todo", todoRouter);
app.use("/api/auth", authRouter);
app.use("/api/newsletter", newsletterRouter);
app.use("/api/user", userRouter);

// console.log('app ', app.route);
app.use((req, res, next) => {
  const error = new Error("URL Not found or Please Check POST or GET");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
