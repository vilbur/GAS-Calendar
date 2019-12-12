/** CalendarTest
*/

function CalendarTest()
{  
    var _Calendar = new Calendar();
    
//    _Calendar.test();
    
    Logger.log( _Calendar.exists() );      

    if( ! _Calendar.exists() )
      _Calendar.create();

      Logger.log( _Calendar.getId() );
}


/** syncCalendarToSheet
*/

function syncCalendarToSheet()
{  
    var _Calendar = new Calendar();
    var _CalendarSpread = new CalendarSpread();

    if( ! _Calendar.exists() )
      return;
//      Logger.log( "Create" );
    var events = _Calendar.getEvents();
//      Logger.log( _Calendar.getId() );
    
    _CalendarSpread.insertEvents( events );
//    Logger.log( "-----" );
//    Logger.log( 3 == 3.0 );
    
}

