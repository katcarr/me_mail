MeMail.FolderController = Ember.ObjectController.extend({
  actions: {
    delete: function() {
      this.get('model').destroyRecord();
      this.transitionToRoute('folders');
    },

    deleteEmail: function(email){
      var folder = this.get('model');
      folder.get("emails").removeObject(email);
      folder.save();
      email.destroyRecord();
      this.transitionToRoute('folders', folder);
    }
  }

});
