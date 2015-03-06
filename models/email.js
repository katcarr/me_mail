MeMail.Email = DS.Model.extend({
  author: DS.attr(),
  receiver: DS.attr(),
  title: DS.attr(),
  folder : DS.belongsTo('email', {async: true})
});
