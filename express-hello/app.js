const express = require("express");
// Create the express object
const app = express();
// Set the variable to the port
// Remember to set a different port to the front and backend
const PORT = 3000;

// "get" is the HTTP method
app.get("/users", function (req, res) {
  res.send("Hello World");
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}`);
});
