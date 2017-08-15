var a = {
  name: 'Hello World',
  sayName: function() {
    console.log(this.name);
  }
}
var b = a.sayName;
b();