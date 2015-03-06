MeMail.FolderController = Ember.ObjectController.extend({
  actions: {
    delete: function() {
      this.get('model').destroyRecord();
    },

  deleteEmail: function(email){
    var lot = this.get('model');
    lot.get("emails").removeObject(email);
    lot.save();
    email.destroyRecord();
  }
  },
  inbox: function() {
    return this.get('name') === 'inbox';
  }
});
