/**
 * @author Cat
 * new function: milesConvert
 */

var milesConvertObj = {
	miles : 3,
	feetPerMile : 5280,
	//f : miles * feetPerMile,
	milesConvert : function() {"use strict";
		return this.miles * this.feetPerMile;
		console.log("Miles in Feet:" + milesConvertObj.milesConvert());
	}
	//milesToFeet : function() {"use strict";
	//return this.miles * this.feetPerMile;
	//console.log("Miles in Feet:" + milesConvert.milesToFeet());
	//}
};

