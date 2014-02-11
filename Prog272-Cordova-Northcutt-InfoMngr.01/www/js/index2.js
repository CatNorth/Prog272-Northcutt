/**
 * @author Cat
 * new function: milesConvert
 */


var MilesFunction = function() {
	
	var kilPerMile = 1.60934;
	
	this.milesConvert = function(miles) {
		return miles * kilPerMile;
	};
};

console.log("------------------");
console.log(" Miles Function");
console.log("------------------");
var result = new MilesFunction().milesConvert(3);
console.log('Converting 3 miles to kilometers yields: ' + result);