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
  ["dependencies", "login", "profileInputFields"], 
  function(_$_, login, profileInputFields) {
    if (window.location.pathname === "/home.html") {
      profileInputFields.profileInputDisplay();
    }

  var ref = new Firebase("https://digitalnomads.firebaseio.com/");
var authData = ref.getAuth();
if (authData) {
  console.log("Authenticated user with uid:", authData.uid);
}

    
$('#content').on('click','.submit',function(){
   console.log('test some special magick');
        var bio = $(".bio").val();
        var destination = $(".destination").val();
        console.log("bio" + bio);
});    


     

    /*
      You can choose to use the REST methods to interact with
      Firebase, or you can use the Firebase API with event
      listeners. It's completely up to each team.

      If you choose the former, I created two boilerplate modules
      named `potential-mates.js`, and `add-favorite.js`.
     */
    
  }
);
