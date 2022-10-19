function start() {
    const start = new Date().getTime();
    var sourceFolder = "21wei.nina@scsmustangs.org";
    var targetFolder = "21wei.nina@scsmustangs.org";

    var sharedFolders = DriveApp.searchFolders('sharedWithMe');
    while (sharedFolders.hasNext()) {
      var sFolder = sharedFolders.next();
      if (sourceFolder === sFolder.getName()) {
        var source = sFolder;
      }
    }
    var target = DriveApp.createFolder(targetFolder);
    copyFolder(source, target, start);
}

function copyFolder(source, target, start) {
  var start = start;
  var end = new Date().getTime();
  Logger.log('Time elapsed: ' + (end - start));
  var maxTime = 1000*60*1;

  
    var folders = source.getFolders();
    var files   = source.getFiles();

    while(files.hasNext()) {
      var file = files.next();
      file.makeCopy(file.getName(), target);
    }

    while (folders.hasNext()) {
      if (end - start <= maxTime) {
        var subFolder = folders.next();
        var folderName = subFolder.getName();
        var targetFolder = target.createFolder(folderName);
        Logger.log('Current folder: ' + folderName);
        copyFolder(subFolder, targetFolder, start);
      }
      else {
      Logger.log('insufficient time');
      }
    }
}
