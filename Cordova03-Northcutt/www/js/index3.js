/**
 * @author Cat
 * new function: milesConvert
 */
/*function Convert() {
			var tempInFahr = 32;
			tempInFahr = parseFloat(tempInFahr);
			tempInCelsius = (5/9) * (tempInFahr - 32)
			document.getElementbyId("tempInFahr").value = 'tempInCelsius'
			document.getElementById('outputDiv').innerHTML= 'equals is: ' + degrees Celsius;">
*/

var TempFunction = function() {
	
	var tempInFahr = 32;
	var tempInFahr = parseFloat(tempInFahr);
	var tempInCelsius = (5/9) * (tempInFahr - 32)
	this.tempConvert = function(temp) {
		return temp * tempInFahr;
	};
};

console.log("------------------");
console.log(" Temperature Function");
console.log("------------------");
var result = new TempFunction().tempConvert(20);
console.log('Converting 20 degrees F to celcius yields: ' + result);