const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/routes.js"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


// Set the app to listen on port 3000
app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
});
