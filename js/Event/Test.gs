

/**
*/
function createEventTest(title, start_time, end_time)
{
//    var _Calendar = new Calendar();

    var createEventTest = new Event();

    var eventCal = CalendarApp.getCalendarById( (new Calendar()).getId() );

    Logger.log( start_time.toString()  );
    Logger.log( end_time.toString()  );

    eventCal.createEvent(title, start_time, end_time)
}


/**
*/
function createEventTestSeed()
{
   deleteEventTest();
 
  var events_count = 3;

  var start_time = new Date()
  var end_time = new Date()
  var duration = 2
  
  start_time.setHours( 0 ,0,0)

  for (var i=0;i<events_count;i++) 
  {
      
      end_time.setHours( start_time.getHours()+duration ,0,0)
     
      createEventTest( "Summary "+i,start_time, end_time)
         
      start_time.setHours( end_time.getHours() ,0,0)

  }
}


function deleteEventTest()
{

  
  var cal = CalendarApp.getCalendarById( (new Calendar()).getId() );
  
  
    var events = cal.getEventsForDay(new Date());
  
  
    for (var i=0;i<events.length;i++) 
    {
  //      Logger.log(  events[i].getTitle()  );
        
        events[i].deleteEvent()
       
    }
}