define(function(require) {
  var firebase = require("firebase");
  var $ = require("jquery");
  var uid = require("uid");
  var profileInputFields = require("profileInputFields");
  
//If your user does not have an existing session, you can prompt the user 
//to login and then invoke the GitHub login popup
	var ref = new Firebase("https://digitalnomads.firebaseio.com/");
	$("#github-image").on("click", function(){
		console.log("doingsomething");
		var authData = ref.getAuth();
			if (authData === null){
			ref.authWithOAuthPopup("github", function(error, authData) {
			  if (error) {
			    console.log("Login Failed!", error);
			  } else {
			    console.log("Authenticated successfully with payload:", authData);
			    uid.setUid(authData.uid);
			    var usersFirebase = ref.child("users");
			    var userExists = false;
			    for (var key in usersFirebase) {
			    	if (usersFirebase[key].uid === authData.uid) {
			    		userExists = true;
			    		break;
			    	}
			    }

			    if (userExists === false) {
			    	usersFirebase.push({uid:authData.uid});
			    }
			    window.location.assign("home.html");
			    // profileInputFields.profileInputDisplay();
			  }
			},
			  { //session will expire upon browser shutdown
			  remember: "sessionOnly",
			  scope: "user,gist"
			});
		} else {
			uid.setUid(authData.uid);
			window.location.assign("home.html");
			profileInputFields.profileInputDisplay();
			console.log("hey");
		}
    });

	//signup login
    	$("#signup-login").on("click", function(){
    	console.log("doingsomething");
		var authData = ref.getAuth();
    	  
		  var user = $('#nameInput').val();
	      var text = $('#messageInput').val();
	      
	      var namepassword = {
	      	email: user,
	      	password: text
	      };
	      

	      $('#messageInput').val('');
			ref.createUser(
				namepassword, function(error, userData) {
			  if (error) {
			    console.log("Error creating user:", error);
			  } else {
			    console.log("Successfully created user account with uid:", userData.uid);
			  }
			
			});
		   });


		//log in
		$("#login-button").on("click", function(){
			console.log("I just clicked the login button!");

			var user = $('#nameInput').val();
			var text = $('#messageInput').val();

			var namepassword = {
				email: user,
				password: text
			};

			ref.authWithPassword(
			  namepassword,
			 function(error, authData) {
			  if (error) {
			    console.log("Login Failed!", error);
			  } else {
			    console.log("Authenticated successfully with payload:", authData);
			    uid.setUid(authData.uid);
			    window.location.assign("home.html");
			    console.log("Welcome to the jungle!");
			  }

			});
		});


  });