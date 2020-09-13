// (function(window){
// 	var patGreeter ={};
// patGreeter.name = "patel";
// hello ="hi";
// patGreeter.sayhi = function() {
// 	console.log(hello + patGreeter.name);
// }
// window.patGreeter = patGreeter;
// })(window);
// // this is the immidiate by the invoke by the expressi;
(function(window){
var goodbye = {};
var speakgoodbye ="goodbye";
goodbye.speak =function (names) {
console.log(speakgoodbye +" " + names);
}
window.goodbye = goodbye;
})(window);