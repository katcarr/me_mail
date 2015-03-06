MeMail.Email = DS.Model.extend({
  author: DS.attr(),
  receiver: DS.attr(),
  folder : DS.belongsTo('', {async: true})
});
