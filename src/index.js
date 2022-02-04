
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  let arr = [];
  matrix.forEach(function(item, index) {
    if (index % 2) {
      item.reverse()
    }
    item.forEach(el => arr.push(el))
  });
  return arr;
}
