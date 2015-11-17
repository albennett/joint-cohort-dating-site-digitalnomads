define(function(require) {
  var uid = null;
  return {
    getUid: function() {
      return uid;
    },
    setUid: function(newId) {
      uid = newId;
    },
    
    getProfile: function() {
	return github.profileImageURL;
	},

	setProfile: function(newProfile) {
		github.profileImageUrl = newProfile;
	},

	getName: function() {
		return github.profileImageURL;
	},

	setName: function(newName) {
		github.displayName = newName;
	}
  };
});



