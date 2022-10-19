function myFunction() {
  //var files = DriveApp.getFiles();
  /*while (files.hasNext()) {
    var file = files.next();
    Logger.log(file.getName());
  }*/
  var files = DriveApp.getFilesByName('filename');
  //var dest = DriveApp.getFolderById("folderid");
  var file = files.next();
  Logger.log(file.getName());
  Logger.log(file.getOwner().getEmail());
  file.addEditor('destemail');
  file.setOwner('destemail');
  Logger.log(file.getOwner().getEmail());
}
