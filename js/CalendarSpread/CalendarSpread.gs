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
          var resolution = 4;
          var hours = resolution*24;

          var sheet = SpreadsheetApp.getActiveSheet();
          var events_insert = arrayIntegers(hours).map(function(x,i){return [""];});
          var range = sheet.getRange(1,1,hours,1);
            
            for (var i=0;i<events.length;i++) 
            {
              Logger.log( "----- " );

               var start_time =  ( events[i].getStartTime().getHours() );
               Logger.log( start_time );
               Logger.log( events[i].getTitle() );
               
               events_insert[start_time] = [ events[i].getTitle() ];

            }

            range.setValues( events_insert );
        }

        /**
        */
        var init = (function()
        {            
            
        })();
        
        
        
        
	}
      

	return CalendarSpread;
})();