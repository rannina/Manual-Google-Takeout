function start() {
  Logger.log('hh');
  var sourceFolder = "foldername";

  var main = "youremail";
  var sharedFolders = DriveApp.searchFolders('sharedWithMe');
  while (sharedFolders.hasNext()) {
    var sFolder = sharedFolders.next();
    if (main === sFolder.getName()) {
      var mainF = sFolder;
    }
  }
  var source = findFolder(sourceFolder, mainF);
  Logger.log(source.getName());
}

function findFolder(folder, mainF) {
  var folders = mainF.getFolders();
  while(folders.hasNext()) {
    var subF = folders.next();
    Logger.log('Current folder ' + subF.getName());
    if (subF.getName() === folder) {
      return subF;
    }
    else {
      findFolder(folder, subF);
    }
  }   
}
