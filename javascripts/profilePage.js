define(["jquery"], function($) {

		  // We're returning the function immediately so we can use the function like an object,
		  // where profileDisplay is a key.
		  return {
		    profileDisplay: function() {
		      require(['hbs!../templates/profile-page'], function (){
		        $("#content").html(profilePage());
		        console.log("profileDisplay", profileDisplay);
    	
		    	});
		    }
		};
	});