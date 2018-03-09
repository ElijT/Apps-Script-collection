function myFunction() {
  //List de tout les mails à transférer
  var label = GmailApp.getUserLabelByName('to be transfer');
  var threads = GmailApp.getUserLabelByName('to be transfer').getThreads();
  
  
  // Transférer les emails
  for (var j = 0; j < 200; j++) {
    var emails = threads[j].getMessages();
    threads[j].removeLabel(label);
    
    for (var i = 0; i < emails.length; i++) {
      emails[i].forward("email@email.com");
      }
  }
  
}