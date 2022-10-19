function start2() {
  Logger.log('START2');
  var sourceFolder = "foldername";
  var targetFolder = "folderid";
  var trashyFolder = "folderid";
  var main = "youremail";
  var sharedFolders = DriveApp.searchFolders('sharedWithMe');
  while (sharedFolders.hasNext()) {
    var sFolder = sharedFolders.next();
    if (main === sFolder.getName()) {
      var mainF = sFolder;
    }
  }
  var source = findFolder2(sourceFolder, mainF);
  Logger.log(source.getName());

  var target = DriveApp.getFolderById(targetFolder);
  var tracker = DriveApp.getFolderById(trashyFolder);
  copyFolder2(source, target, tracker);
}

function copyFolder2(source, target, tracker) {
  var folders = source.getFolders();
  var files   = source.getFiles();
  var tFiles = target.getFiles();
  var arr = [];
  while (tFiles.hasNext()) {
    arr.push(tFiles.next());
  }
  var dup = false;
    while(files.hasNext()) {
      var file = files.next();
      dup = false;
      for (var i = 0; i < arr.length; i++) {
        if (file.getName() === arr[i].getName()) {
          dup = true;
          break;
        }
      }
      if (!dup) {
        file.makeCopy(file.getName(), target);
        Logger.log('Made copy of ' + file.getName());
      }
    }

    while(folders.hasNext()) {
      var subFolder = folders.next();
      var folderName = subFolder.getName();
      var targetFolder = target.getFoldersByName(folderName).next();
      Logger.log('Current folder: ' + folderName);

        copyFolder2(subFolder, targetFolder, tracker);
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

function findFolder2(folder, mainF) {
  var folders = mainF.getFolders();
  while(folders.hasNext()) {
    var subF = folders.next();
    if (subF.getName() === folder) {
      return subF;
    }
    else {
      findFolder2(folder, subF);
    }
  }   
}
