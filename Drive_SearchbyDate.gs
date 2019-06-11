function SearchDaterange() {
  
  var today = new Date();
  var DateS = new Date();
  
  
  DateS.setYear(today.getYear()-10);
    var DateE = new Date();
  //Edit here to introduce the time limit that you want 
  //the time is should be input in milliseconds(!!!) and I have written it so I can input the limit in days
  //the formula below is: 365 (number of days) * 24 (Hours within  ad day) * 60 * 60 (sixty minutes, and and sixty seconds) * 1000 (to have milliseconds)
  //Probably the function could pick a cell in a spreadsheet
  DateE.setTime(today.getTime()-(365 * 24 * 60 * 60 * 1000));
  
  var sheet = SpreadsheetApp.getActiveSheet();
  var data;
  var count = 0;
  
  sheet.appendRow(["Name", "Date", "Size", "URL", "Download", "Description", "Action"]);
  
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
      "Keep"
    ];
      
    sheet.appendRow(data);
  
  }
  
}

function size() {
  var folder =DriveApp.getFolderById('folder ID');
  Logger.log(folder.getName());
  Logger.log(folder.getSize());
  
}

function SearchFilesByDate() {
  //Edit folder ID below
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
