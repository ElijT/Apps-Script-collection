var user = 'mail';

function searchevents() {
  var sdate = new Date();
  var years4 = sdate.getYear() + 1;
  var edate = new Date(new Date().setYear(years4));
  var events = CalendarApp.getCalendarById(user).getEvents(sdate, edate);
  var eventsId = events
  var eventsNA = [];
  
  for (i=0; i<events.length; i++) {
      var status = events[i].getMyStatus();
      if (status == 'INVITED') {
        eventsNA[eventsNA.length] = events[i].getTitle();
        Logger.log(eventsNA[eventsNA.length-1]);
      } 
       
  }
 }