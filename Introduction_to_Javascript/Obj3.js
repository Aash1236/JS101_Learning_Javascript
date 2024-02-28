function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.area = function () {
  return this.length * this.width;
};

Rectangle.prototype.perimeter = function () {
  return 2 * (this.length + this.width);
};

const myRectangle = new Rectangle(5, 8);

console.log("Area:", myRectangle.area());
console.log("Perimeter:", myRectangle.perimeter());
