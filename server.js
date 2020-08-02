const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = 1130;

const app = express();
var MONGODG_URI = process.env.MONGODG_URI || "mongod: //localhost/mongoHeadlines";

mongoose.connect(MONGODG_URI);

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// mongoose.connect("mongodb://localhost/workout", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

// routes
app.use(require("./routes/api.js"));
require("./routes/view.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});



