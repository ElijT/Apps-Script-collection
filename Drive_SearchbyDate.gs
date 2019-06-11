function SearchFilesByDate() {
  var Allfiles = DriveApp.getFolderById('folder ID').getFiles();
  var time = new Date();
  
  var NbFiles = Allfiles.length;
  Logger.log(Allfiles[1].getName());
  Logger.log(NbFiles);
  
  var Files = []
  
  
  
//  while (Allfiles.hasNext()) {
//    var file = files.next();
//    if (new Date() - file.getLastUpdated() > 7 * 24 * 60 * 60 * 1000) {
//      file.setTrashed(true);
//    }
//  }
}

function SearchDaterange() {
  
  var today = new Date();
  var DateS = new Date();
  
  
  DateS.setYear(today.getYear()-10);
    var DateE = new Date();
  DateE.setTime(today.getTime()-(1050 * 24 * 60 * 60 * 1000));
  
  var sheet = SpreadsheetApp.getActiveSheet();
  var data;
  var count = 0;
  
  sheet.appendRow(["Name", "Date", "Owner", "Size", "URL", "Download", "Description", "Type"]);
  
  var query = 'modifiedDate > "' + DateS.getYear() + '-' + DateS.getMonth() + '-' + DateS.getDate() +'" and modifiedDate < "' + DateE.getYear() + '-' + DateE.getMonth() + '-' + DateE.getDate() +'"';
  //  Logger.log(query);
  
  var files = DriveApp.searchFiles(query);
  
  while (files.hasNext()) {
    var file = files.next();
    data = [ 
      file.getName(),
      file.getDateCreated(),
      file.getSize(),
      file.getUrl(),
      "https://docs.google.com/uc?export=download&confirm=no_antivirus&id=" + file.getId(),
      file.getDescription(),
      "audio/mp3"
    ];
      
    sheet.appendRow(data);
  
  }
  
}

function size() {
  var folder =DriveApp.getFolderById('folder ID');
  Logger.log(folder.getName());
  Logger.log(folder.getSize());
  
}
