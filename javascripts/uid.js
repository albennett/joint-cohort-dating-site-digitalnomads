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
    },

    getProfile: function() {
		return profileImageURL;
	},

	setProfile: function(newProfile) {
		profileImageUrl = newProfile;
	},

	getName: function() {
		return displayName;
	},

	setName: function(newName) {
		displayName = newName;
	}

  };
});



