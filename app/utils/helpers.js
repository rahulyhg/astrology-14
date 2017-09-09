
var axios = require('axios'); 
var Astroapi = require('./AstroSdk'); 

var helper = {
	 getHoroscope: function(sign,period){

	 	console.log("runQuery has been hit")
		var QueryURL= 'https://aztro.herokuapp.com/?day='+period+'&sign='+sign;	
		console.log("Query URL " + QueryURL);

	 return axios.post(QueryURL,{
			}).then(function(results){
				console.log("Axios HORO Results", results);
				return results.data;
		});
},

	 getGeocodeAPI: function(address, dob){

	 	console.log("getGeocodeAPI has been hit")
		var QueryURL= 'https://maps.googleapis.com/maps/api/geocode/json?address='+encodeURIComponent(address)+'&key=AIzaSyCfYfZuZYiwlx4W9-vYYI0bCLILm-pj9hA';
		console.log("Query URL " + QueryURL);

	 return axios.get(QueryURL,{
			}).then(function(results){
				console.log("Axios GEo Results", results.data.results["0"].geometry.location);
				////return results.data.results["0"].geometry.location;
				var lat = results.data.results["0"].geometry.location.lat;
				var lng = results.data.results["0"].geometry.location.lng;
				var DOB = "01-02-2004"; //dob;
		        var llt = {"lat": lat,
		        		"lng": lng,
		        		"TZ":"5.5" }
		        console.log(llt);	
		        return llt;			
				//var resultsData = this.getTimezoneResults(lat,lng,DOB, function (error, result){});
//				return resultsData
		});
},

	 getMatchMakingResults: function(maleJson,femaleJson, callback){
				// //var resource = "match_ashtakoot_points";

				var resource = "match_making_report";


				// call matchMakingCall method of VRClient for matching apis and print Response
				var matchMakingData = Astroapi.matchMakingCall(resource, maleJson, femaleJson
					, function(error, result){

				    if(error)
				    {
				        console.log("Error returned!!");
				    }
				    else
				    {
				        // console.log('Response has arrived from API server --');
				        // console.log(result);
				        var jsonResult = JSON.parse(result)
				        console.log( maleJson);
				        console.log( femaleJson);
				         console.log("jsonResult");
				         console.log(jsonResult);
				        return callback(null, jsonResult);
				    }
				} // call back
				);
				// console.log("Match data is");
				// console.log(matchMakingData);
	}
}


module.exports = helper;