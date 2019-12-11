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
          Logger.log( events );

        }
 
         
        
        /**
        */
        var init = (function()
        {            
            
        })();
        
        
        
        
	}
      

	return CalendarSpread;
})();