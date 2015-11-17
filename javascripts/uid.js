define(function(require) {
  var uid = null;
  var profileImageUrl = null;
  var displayName = null;
  
  return {
    getUid: function() {
      return uid;
    },
    setUid: function(newId) {
      uid = newId;
    }


  };
});



