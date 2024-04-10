// This create an object that can be accessed outside of this module
// The object name will be given by the variable requiring this file
// In this way of exporting, each function is a method inside the object
exports.sumTwoValues = function (a, b) {
  return a + b;
};

exports.squareArea = function (width) {
  return width * width;
};

exports.squarePerimeter = function (width) {
  return width * 4;
};
