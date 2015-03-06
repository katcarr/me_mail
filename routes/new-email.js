MeMail.NewEmailRoute = Ember.Route.extend({
  model: function(params) {
    var folder = this.modelFor('folder');
debugger;
    var email = this.store.createRecord('email');

    folder.get('emails').then(function(emails){
      emails.pushObject(email);
    });
    return email;
  },

  renderTemplate: function() {
  this.render({ outlet: 'new-email' });
}

});
