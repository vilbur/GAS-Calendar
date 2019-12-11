/**CONSTRUCT
*/

function CalendarTest()
{  
    var _Calendar = new Calendar();
    
//    _Calendar.test();
    
    Logger.log( _Calendar.exists() );      

    if( ! _Calendar.exists() )
      _Calendar.create();
//      Logger.log( "Create" );

      Logger.log( _Calendar.getId() );

}

