
define(function() { 
    return function() {
       

          var ref = new Firebase("https://digitalnomads.firebaseio.com/users/");

          ref.on("value", function(snapshot) {
            console.log(snapshot.val());
            }, function(errorObject) {
            console.log("Error!" + errorObject.code);
            });
          }); 
          //Get user data (Favorites) from Firebase




            $('.favorites').html(populateFavs);
});