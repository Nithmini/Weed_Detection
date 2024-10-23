const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongodb connection success!");
});


//Feedback router
const feedbackRouter = require("./routes/feedbackRoutes.js");
app.use("/feedback", feedbackRouter);

//Contact router
const contactRouter = require("./routes/contactRoutes.js");
app.use("/contact", contactRouter);

//User router
const userRouter = require("./routes/userRoutes.js");
app.use("/user", userRouter);

const port = process.env.PORT || 5000;

app.listen(port, (error) => {
  console.log(`Server running on port ${port}`);
});




