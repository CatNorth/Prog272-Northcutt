/**
 * @author Cat
 * new function: sqrtFunction
 */
function Convert() {
	var tempInFahr = 32;
	var tempInFahr = parseFloat(tempInFahr);
	var tempInCelsius = (5/9) * (tempInFahr - 32)
	var value = outputDiv.fahrBox.value;
	alert("Temperature entered:" + value + " is converted to ");
	//document.getElementbyId("tempInFahr").value = 'tempInCelsius'
	//document.getElementById("outputDiv").innerHTML = 'equals is: ' + "degrees Celsius";
}

function calcsqrt() {
	var value = f1.sqrt.value;
	alert("The Squareroot of " + value + " is " + Math.sqrt(value));
}