/**
 * Takes a number and returns double that number
 */
function double(a) {
  // Write a "return" statement below which takes number set in 'a' and returns double that number
  return a * 2
}

console.log('double(4):', double(4)); // 8
console.log('double(7):', double(7)); // 14
console.log('double(2.4):', double(2.4)); // 4.8

console.log('\n===\n');


/**
 * Returns true if number is between 25 and 71
 */
function isBetweenRange(a) {
  // Write a "return" statement below which returns true or false depending on if number set as is between 25 and 71
  if (a > 25 && a < 71) {
    return true
  }
  else {
    return false
  }
}

console.log('isBetweenRange(26):', isBetweenRange(26)); // true
console.log('isBetweenRange(24):', isBetweenRange(24)); // false
console.log('isBetweenRange(71):', isBetweenRange(71)); // false
console.log('isBetweenRange(70):', isBetweenRange(70)); // true


/**
 * Returns the area of a rectangle
 */
function getRectangleArea(width, height) {
  // Write a "return" statement below which provides the area of a rectangle based on the provided width and height
  return width * height
}

console.log('getRectangleArea(4, 2):', getRectangleArea(4, 2)); // 8
console.log('getRectangleArea(1, 1):', getRectangleArea(1, 1)); // 1
console.log('getRectangleArea(53, 21):', getRectangleArea(53, 21)); // 1113

console.log('\n===\n');


/**
 * Returns the area of a square *using* the "getRectangleArea" function
 * Make sure you call getRectangleArea() in this function
 */
const getSquareArea = (width) => {
  // Write a "return" statement below which returns the area of a square but calls the getRectangleArea function to get an area rather than do its own calculation
  return getRectangleArea(width, width)
}

console.log('getSquareArea(3):', getSquareArea(3)); // 9
console.log('getSquareArea(1):', getSquareArea(1)); // 1
console.log('getSquareArea(28.4):', getSquareArea(28.4)); // 806.56

console.log('\n===\n');
