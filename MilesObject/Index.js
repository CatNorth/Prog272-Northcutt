/**
 * @author Cat
 * jshint strict:true
 */

var milesConvert = {
	miles : 3,
	feetPerMile : 5280,
	milesToFeet : function() {"use strict";
		return this.miles * this.feetPerMile;
		console.log("Miles in Feet:" + milesConvert.milesToFeet());
	}
};
