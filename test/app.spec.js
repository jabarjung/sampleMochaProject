const assert = require('assert');
var rectangle = require('../app/app.js');
describe('testingRectangleClass', function () {
  it('should assert if the area of the rectangle is greater than 100', function(done) {
    // Assertion goes here
    var square = new rectangle(10, 20);
    assert.ok(square.area > 100);
    done();
  });
  it('should check if it is a square', function(done) {
    // Assertion goes here
    var quadrilateral = new rectangle(10, 10);
    assert.ok(quadrilateral.isItSquare());
    done();
  });
});