//x.name = "facebook";
//x.ceo.rank ="five star"
//console.log(x);
/*var facebook = {
	//firstname : "prajjawal",
	//ceo :{
		//lastname: "Patel",
		//secondname: "Kumar"
	//}
	
//console.log(facebook);*/
/*function makemultiply(multipliar){
	var j = function(x){
		return multipliar * x;
	};
	return j;
}
muti3 = makemultiply(10);

function makeoperation(x, operation){
	return operation(x);
}
console.log(makeoperation(3,muti3));*/
/*function x(radius) {
	this.radius = 10;
	getarea:function increaseradius() {
		this.radius=20;
		console.log(this);
	};
	increaseradius();
	return Math.PI * Math.PI * this.radius;
};
console.log(x.getarea())*/
// var array = new Array();
// array[0]="prajjawal";
// array[1]=2;
// array[2]= function(name){
// 	console.log("hello " + name);
// };
// array[3]={course:"Html,css,js"};
// console.log(array);
// array[2](array[0]);
// console.log(array[3].course);
// var name = ["prajjawal", "Kumar", "Patel"];
//  name.greeting ="hi";
// var myObj = {
// 	name : "prajjawal",
// 	course :"html/css/js",
// 	clg : "aith"
// };
// for (var i in myObj) {
// 	console.log(i + ":" + myObj[i]);
// }
// 
// var counter = 0;
// var myArray = ["Yaakov", 2, {handle: "yaakovchaikin"}];
// for (var i = 0; i < myArray.length; i++) {
//   counter++;
// }
// console.log(counter);
//closure:--------------------------------------->
// function makemultiplier (multipliar) {
// 	return (function (x) {
// 			return multipliar * x;
// 	}
// 	);
// }
// var double = makemultiplier(2);
// console.log(double(10));

// making name spaces in js ==========================>
// var praGreeter = {};
// praGreeter.name ="prajjawal";
// praGreeter.sayhello = function (){
// 	console.log("hello " + praGreeter.name);
// }
// immideat invoke function expression

(function () {
	var names = ["prajjawal" , "javascript" , "jara"]; 
	for(var i ;i < names.lenght; i++) {
		var firstLetter = names[i].charAt(0).toLowerCase();
		if(firstLetter === 'j') {
			goodbye.speak(names[i]);
		}
		else {
			hello.speak(names[i]);	
		}
	 }
})();