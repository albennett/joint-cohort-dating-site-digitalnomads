define(["jquery", "hbs"], function($, hbs) {

  	// We're returning the function immediately so we can use the function like an object,
  	// where profileDisplay is a key.
  	return {
	    profileInputDisplay: function(data) {
	    	console.log("kitten power");

	      require(['hbs!../templates/profileInputFields'], function (profileInputFields){
	        	console.log("Hi!");
	        	$("#content").html(profileInputFields(data));

	    	});  
		}
	};
});