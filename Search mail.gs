function SearchMail(query) {
  var emails;
  var allemails = [];
  
  Logger.log(query);

  emails = GmailApp.search(query, 0, 100);
  
  //create batches of 50 emails and treat them one by one and put them all in one array
  
  if (emails.length > 50) {
      
    var a = 0;
    var start = 0;
    while (a<1) {
      
      var search = GmailApp.search(query, start, 50);
      
      start += 50;
      allemails = allemails.concat(search);
      if (search.length < 50) {a=10;}
      
    }    
  }
  
  
  else {
   allemails = GmailApp.search(query);
   
  } 
}
