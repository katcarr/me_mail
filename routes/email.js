MeMail.EmailRoute = Ember.Route.extend({

  renderTemplate: function() {
    this.render({ outlet: 'email' });
  }
});
