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
["dependencies", "login", "hbs!../templates/candidates"], 
function(_$_, login, template) {
  var ref = new Firebase("https://digitalnomads.firebaseio.com/");
  if (window.location.pathname === "/home.html") {
    var authData = ref.getAuth();
    var usersFirebase = ref.child("users");
    usersFirebase.once("value", function(dataSnapshot) {
        dataSnapshot.forEach(function(childSnapshot) {
          var user = childSnapshot.val();
          if (user.uid === authData.uid) {
            $("#content").html(template(user));
          }
        });
      });
    }
  }
);