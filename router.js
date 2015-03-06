MeMail.Router.map(function(){
  this.resource('folders', {path: '/'});
  this.resource('folder', {path: ':folder_id'});
  this.resource('new-email');
});
