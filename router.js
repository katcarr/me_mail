MeMail.Router.map(function(){
  this.resource('folders', {path: '/'}, function(){
    this.resource('new-folder');
  });
  this.resource('folder', {path: ':folder_id'}, function(){
    this.resource('new-email');
  });
  this.resource('email', {path: ':email_id'});
});
