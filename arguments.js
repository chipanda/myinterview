function test() {
  var arr = Array.prototype.slice.call(arguments);
  console.log(arr);
}

function testES6(...args) {
  console.log(...args);
}
test(1, 2, 3);
testES6(1, 2, 3);