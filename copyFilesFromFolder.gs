function start() {
  Logger.log('START');
  var sourceFolder = "foldername";
  var targetFolder = "folderid";
  var trashyFolder = "folderid";
  var main = "myemail";
  var sharedFolders = DriveApp.searchFolders('sharedWithMe');
  while (sharedFolders.hasNext()) {
    var sFolder = sharedFolders.next();
    if (main === sFolder.getName()) {
      var mainF = sFolder;
    }
  }
  var source = findFolder(sourceFolder, mainF);
  Logger.log(source.getName());

  var target = DriveApp.getFolderById(targetFolder);
  var tracker = DriveApp.getFolderById(trashyFolder);
  copyFolder(source, target, tracker);
}

function copyFolder(source, target, tracker) {
  var folders = source.getFolders();
  var files   = source.getFiles();
    while(files.hasNext()) {
      var file = files.next();
      file.makeCopy(file.getName(), target);
    }

    while(folders.hasNext()) {
      var subFolder = folders.next();
      var folderName = subFolder.getName();
      var targetFolder = target.getFoldersByName(folderName).next();
      Logger.log('Current folder: ' + folderName);
      copyFolder(subFolder, targetFolder, tracker);
      var cFolders = tracker.getFoldersByName(folderName)
      if (cFolders.hasNext()) {
        var cFolder = cFolders.next();
        cFolder.setTrashed(true);
        Logger.log(cFolder.getName() + ' is trashed');
      }
      else {
        Logger.log('no folder exists');
      }
    }
}

function findFolder(folder, mainF) {
  var folders = mainF.getFolders();
  while(folders.hasNext()) {
    var subF = folders.next();
    if (subF.getName() === folder) {
      return subF;
    }
    else {
      findFolder(folder, subF);
    }
  }   
}
