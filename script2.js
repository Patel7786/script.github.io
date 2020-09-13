(function(window){
var hello = {};
var speakhello = hello;
hello.speak =function (names) {
console.log(speakhello +" " + names);
}
window.hello = hello;
})(window);