function myFunction() {
  var files = DriveApp.getFiles();
  while (files.hasNext()) {
    var file = files.next();
    var date = file.getDateCreated().toString();
    if (file.getOwner().getEmail() === 'myemail')
    {
      if (date.indexOf('Jun 06 2021') >= 0 || date.indexOf('Jun 07 2021') >= 0) {
      Logger.log(file.getName());
      Logger.log(date);
      file.setTrashed(true);
      Logger.log(file.getName() + " is trashed");
      }
    }
  }
}
