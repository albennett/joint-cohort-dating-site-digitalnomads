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
["dependencies", "login", 'hbs!../templates/nomads', "hbs!../templates/candidates", "favorites", "hbs!../templates/profileInputFields"], 
function(_$_, login, nomadTemplate, template, fav, profileInputFields) {


    
$('#content').on('click','.submit',function(){
   console.log('test some special magic');
        var bio = $(".bio").val();
        var destination = $(".destination").val();
        console.log("bio" + bio);
});    


// nomad sites are working
    var ref = new Firebase("https://digitalnomads.firebaseio.com/");
    var users = ref.child("users");

     $(".favorites").ready(function() {
      fav();
     });

    $("#nomads-site").on("click", function(){
      console.log("working");
      // var usersFirebase = ref.child.("users");
      users.on("value", function(snapshot) {
        var usersValue = snapshot.val();
        var usersArray = [];
        for (var key in usersValue) {
           usersArray[usersArray.length] = usersValue[key];
        }  console.log("array", usersArray);
        // console.log("dataSnapshot.val()", dataSnapshot.val());
         $("#content").html(nomadTemplate(usersArray));
      });
    });

    $("#content").on("click", ".nomadclass", function() {
      var _this = this;
      users.once("value", function(dataSnapshot) {
        dataSnapshot.forEach(function(childSnapshot) {
          var user = childSnapshot.val();
          if (user.uid === $(_this).find("h3").attr("id")) {
            $("#content").html(template(user));
          }
        });
      });
    });

  if (window.location.pathname === "/home.html") {
    var authData = ref.getAuth();
    users.once("value", function(dataSnapshot) {
        dataSnapshot.forEach(function(childSnapshot) {
          var user = childSnapshot.val();
          if (user.uid === authData.uid) {
            $("#content").html(profileInputFields(user));
          }
        });
      });
    }

  });