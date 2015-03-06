MeMail.Folder = DS.Model.extend({
  name: DS.attr(),
  emails: DS.hasMany('email', {asymc: true})

});
