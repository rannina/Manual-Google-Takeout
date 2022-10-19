function myFunction() {
  Logger.log('myFUnction');
  var sourceFolder = "folderid";
  var arr = [''];
  var source = DriveApp.getFolderById(sourceFolder);

  copyFolder(source, arr);
}

function copyFolder(source, arr) {
  var folders = source.getFolders();
  var list = arr;

  while(folders.hasNext()) {
    var subFolder = folders.next();
    var folderName = subFolder.getName();
    Logger.log('Current folder: ' + folderName);
    checkDup(list, folderName);
    list.push(folderName);
    copyFolder(subFolder, list);
  }
}

function checkDup(arr, folderName) {
  for (var i = 0; i < arr.length; i++) {
    if (folderName === arr[i])
    {
      Logger.log(folderName + ' is duplicated name!!!!!!!!!');
      break;
    }
  }
}
