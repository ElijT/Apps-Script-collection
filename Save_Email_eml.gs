function SaveAsEmlFiles(emails) {
  var threads = emails
  for (i in threads) {
    var messages = threads[i].getMessages();
    Logger.log(i);
    Logger.log(threads[i].getFirstMessageSubject());
    for (j in messages) {
      Logger.log(j);
      var subject = messages[j].getSubject();
      Logger.log(subject);
      var RawContent = messages[j].getRawContent();
      var Blob = Utilities.newBlob(RawContent, 'message/rfc822', subject);
      var filename = subject + '.eml';
      Blob.setName(filename);
      Logger.log(Blob);
      DriveApp.createFile(Blob);
      
    }
  }
}