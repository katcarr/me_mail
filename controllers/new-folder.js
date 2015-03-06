MeMail.NewFolderController = Ember.Controller.extend({
  actions: {
    newFolder: function() {
      var newFolder = this.store.createRecord('folder', {
        name: this.get('name')
      });
      newFolder.save();
      this.set('name', null);
    
    }
  }
});
