MeMail.ApplicationRoute = Ember.Route.extend({
  model: function() {
    this.store.push('folder', {
      id: 1,
      name: "inbox"
    });

    this.store.push('folder', {
      id: 2,
      name: "sent"     
    });
  }
});
