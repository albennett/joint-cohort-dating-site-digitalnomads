require.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'q': '../lib/bower_components/q/q',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
    'firebase': '../lib/bower_components/firebase/firebase'
  },
  shim: {
    'bootstrap': ['jquery']
  }
});

require(
  ["dependencies", "login", 'hbs!../templates/nomads'], 
  function(_$_, login, nomadTemplate) {

// nomad sites are working
      var ref = new Firebase("https://digitalnomads.firebaseio.com/");
      var users = ref.child("users");

    $("#nomads-site").on("click", function(){
      console.log("working");
      // var usersFirebase = ref.child.("users");
      users.on("value", function(snapshot) {

        var users = snapshot.val();
             var usersArray = [];
              for (var key in users) {
                 usersArray[usersArray.length] = users[key];
              }  console.log("array", usersArray);
        // console.log("dataSnapshot.val()", dataSnapshot.val());
         $("#content").html(nomadTemplate(usersArray));
      });
    });

    $("#content").on("click", ".nomadclass", function() {
      users.once("value", function(dataSnapshot) {
        dataSnapshot.forEach(function(childSnapshot) {
          var user = childSnapshot.val();
          if (user.uid === $(this).find("h3").attr("id")) {
            $("#content").html(template(user));
          }
        });
      });
    });


  });
