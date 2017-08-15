var a = {
    name: 'Hello World',
    getSayNameFunc: function() {
        return function() {
            console.log(this.name);
        }
    }
}
var b = {
    name: 'hello world',
    getSayNameFunc: function() {
        var that = this;
        return function() {
            console.log(that.name);
        }
    }
}
a.getSayNameFunc()();
b.getSayNameFunc()();