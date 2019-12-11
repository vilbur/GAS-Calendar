
var calendar_id = "5lpv6sd94mcagot58k6o70on2g@group.calendar.google.com";


var events_test = [
  0,1,2
];

/**
*/
function createEventTest(start_time, end_time)
{
    var createEventTest = new Event();

    var eventCal = CalendarApp.getCalendarById(calendar_id);

    Logger.log( start_time.toString()  );
    Logger.log( end_time.toString()  );

    eventCal.createEvent("summary", start_time, end_time)


}


/**
*/
function createEventTestSeed(start_time, end_time)
{

  for (var i=0;i<events_test.length;i++) 
  {
      
      var start_time = new Date()
      var end_time = new Date()
  
      start_time.setHours( i ,0,0)
      end_time.setHours( i+1 ,0,0)
     
     createEventTest(start_time, end_time)
     
     
  }
}


function deleteEventTest()
{

  
  var cal = CalendarApp.getCalendarById(calendar_id);
  
  
    var events = cal.getEventsForDay(new Date());
  
  
    for (var i=0;i<events.length;i++) 
    {
  //      Logger.log(  events[i].getTitle()  );
        
        events[i].deleteEvent()
       
    }
}