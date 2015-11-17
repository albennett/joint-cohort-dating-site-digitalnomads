define(function(require) {
  var firebase = require("firebase");
  var $ = require("jquery");
  var uid = require("uid");
  
//If your user does not have an existing session, you can prompt the user 
//to login and then invoke the GitHub login popup
	  var ref = new Firebase("https://digitalnomads.firebaseio.com/");

//github authentication
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
			    uid.setProfile(authData.github.profileImageURL);
			    uid.setName(authData.github.displayName);

			    var usersFirebase = ref.child("users");
			    var userExists = false;
			    console.log("usersFirebase", usersFirebase);
//real time api
			    usersFirebase.on("value", function(snapshot){
			    	var allUsersObject = snapshot.val();
			    	for (var key in allUsersObject) {
				    	console.log(allUsersObject[key].uid);
				    	if (allUsersObject[key].uid === authData.uid) {
				    		console.log("firing?");
				    		userExists = true;
				    		break;
				    	}
			    	}

			    console.log("allUsersObject", allUsersObject);
			    });

			    if (userExists === false) {
			    	usersFirebase.push({
			    		uid: authData.uid,
			    		image: authData.github.profileImageURL,
			    		displayName: authData.github.displayName
			    		// bio: bio
			    	});
			    }
			    window.location.assign("home.html");
			  }
			},
			  { //session will expire upon browser shutdown
			  remember: "sessionOnly",
			  scope: "user,gist"
			});
		} else {
			uid.setUid(authData.uid);
			uid.setProfile(authData.github.profileImageURL);
			uid.setName(authData.github.displayName);
			window.location.assign("home.html");
		}


    });







  });