function myFunction() {
  Logger.log('ya');
  var source = DriveApp.getFolderById('folderid');
  var target = DriveApp.getFolderById('folderid');
  copyFolder(source, target);
}

function copyFolder(source, target) {
  var folders = source.getFolders();
  var files   = source.searchFiles('not "me" in owners and not "me" in writers');

  if (files.hasNext()) {
    Logger.log('Folder: ' + source.getName());
  }
  while(files.hasNext()) {
    var file = files.next();
    var fileName = file.getName();
    Logger.log(fileName);
    file.makeCopy(fileName, target);
  }

  while(folders.hasNext()) {
    var subFolder = folders.next();
    var folderName = subFolder.getName();
    //Logger.log('Folder: ' + folderName);
    if (folderName !== 'foldername') {
      var targetFolder = target.getFoldersByName(folderName).next();
      copyFolder(subFolder, targetFolder);
    }
  }
}
