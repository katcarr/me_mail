MeMail.Email = DS.Model.extend({
  author: DS.attr(),
  receiver: DS.attr(),
  title: DS.attr(),
  message: DS.attr(),
  folder : DS.belongsTo('folder', {async: true})
});
