MeMail.NewEmailController = Ember.ObjectController.extend({
  actions: {
    newEmail: function() {
      var email = this.get('model');
        email.save();

        var controller = this;
        email.get('folder').then(function(folder) {
          folder.save();
          controller.transitionToRoute('folders');
        });
    }
  }
});
