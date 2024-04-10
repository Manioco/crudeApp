const express = require("express");
// Create the express object
const app = express();
// Set the variable to the port
// Remember to set a different port to the front and backend
const PORT = 3000;

const operations = require("./modules/operations");
const operationsVariation = require("./modules/operationsVariation");

console.log(operationsVariation.squareArea(5))
console.log(operationsVariation.squarePerimeter(5))
console.log(operationsVariation.sumTwoValues(5,5))

// "get" is the HTTP method
app.get("/users", function (req, res) {
  res.send("Hello World");
});

app.get("/sum", function (req, res) {
  res.send(`1 + 2 = ${operations.sumTwoValues(1, 2)}`);
});

app.get("/area", function (req, res) {
  res.send(`Area of a square with side 2 is ${operations.squareArea(2)}`);
});

app.get("/perimeter", function (req, res) {
  res.send(
    `Perimeter of a square with side 6 is ${operations.squarePerimeter(6)}`
  );
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}`);
});
