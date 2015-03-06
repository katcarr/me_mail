MeMail.FolderController = Ember.ObjectController.extend({
  inbox: function() {
    return this.get('name') === 'inbox';
  }
});
