const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
const bookRoute = require("./route/bookRoute");
const { connectToDatabase } = require('./database/dbConfig');
connectToDatabase();
app.use(bodyParser.json());
app.use("/", bookRoute);


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
