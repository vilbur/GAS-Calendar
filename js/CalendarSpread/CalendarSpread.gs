/**  
 *	
 */
var CalendarSpread = (function()
{
	/*
		CONSTRUCT
	*/

	function CalendarSpread()
	{
        var spread_name = SpreadsheetApp.getActiveSpreadsheet().getName();
        

        /** Create array filled with integers
        * @param		integer	max	max count of items
        * @example	 arrayIntegers(5) // return [1, 2, 3, 4, 5]
        * @return	array 	 
        */
        var arrayIntegers = function(max)
        {
          return max? arrayIntegers(max-1).concat(max):[]
        }
        /**
        */
        this.test = function()
        {

        }
        /**
        */
        this.insertEvents = function(events)
        {
          Logger.log( "insertEvents" );
//          Logger.log( events );
          
          var resolution = 4;
          var hours = resolution*24;
              Logger.log( hours );

//          var events_insert = arrayIntegers().map(function(){return [];});

          var events_insert = arrayIntegers(hours).map(function(){return [""];});
                    
          Logger.log( events_insert );
//          events_insert = [[1],[2],[3]]
//          events_insert = [[""],[""],[""]]

//          var events_insert = []; 
          var sheet = SpreadsheetApp.getActiveSheet();
          
          var range = sheet.getRange(1,1,hours,1);

//          var range = sheet.getRange(1,1,3,1);
          
//          var events_insert = events.map(function(event){
//            return [ event.getTitle() ];
//          })
          
          var event = events.shift();
         // var details=[[calendar_id,events[i].getTitle(), events[i].getDescription(), events[i].getLocation(), events[i].getStartTime(), events[i].getEndTime(), myformula_placeholder, ('' + events[i].getVisibility()), events[i].getDateCreated(), events[i].getLastUpdated(), events[i].getMyStatus(), events[i].getCreators(), events[i].isAllDayEvent(), events[i].isRecurringEvent(), events[i].getId(), guestList[d].getEmail(), guestList[d].getGuestStatus(), guestList[d].getName()]];
  
        
  
  
  
//          for (var i=0;i<24;i++) 
//          {
////              Logger.log(  );
//              
//               var start_time =  ( event.getStartTime().getHours() );
////               var start_time = parseInt(-3.2);
//                  Logger.log( start_time== i );
//
//              var cell = [];  
//              Logger.log( "-----" );
////              Logger.log( events.length );
//              Logger.log( i );
//              
////              if ( start_time == i && i < events.length )
////              {
////              
////                cell.push( event.getTitle() )
////                event = events.shift();
////    
////              }
//              
//              events_insert.push( cell );
//          
//            
//          
//          }
              Logger.log( "*****" );
              Logger.log( events_insert );
              Logger.log( events_insert.length );

          range.setValues(events_insert);
        }
 
         
        
        /**
        */
        var init = (function()
        {            
            
        })();
        
        
        
        
	}
      

	return CalendarSpread;
})();