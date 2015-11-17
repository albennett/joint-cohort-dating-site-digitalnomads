
define(function() { 
    return function() {

                //Get user data (Favorites) from Firebase

          var myFirebaseRef = new Firebase("https://digitalnomads.firebaseio.com/users/");
            myFirebaseRef.on("value", function(snapshot) {
    
          var users = snapshot.val();

           var usersArray = [];
            for (var key in users) {
               usersArray[usersArray.length] = users[key];
                 }

            var usersObject = {users: usersArray};
            //Display to page 
            displayFavorites(usersArray);
   
             });


            //Display function for handlebars
          function displayFavorites(usersArray) {         
            require(['hbs!../templates/favorites'], function(favoriteTemplates){
              $('.favorites').html(favoriteTemplates(usersArray));
               });
          }
          



          function returnMatches() {
            var matches = new Object();

            


            return matches;
            //Function will check if a match.  If a match display. 
          }


      };
    });
