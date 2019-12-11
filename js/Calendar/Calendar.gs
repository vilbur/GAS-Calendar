/**  
 *	
 */
var Calendar = (function()
{
	/*
		CONSTRUCT
	*/

	function Calendar()
	{
        var spread_name = SpreadsheetApp.getActiveSpreadsheet().getName();
//        var spread_name = "FullCalendar-test";
        var calendar = null;
        
        
        /**
        */
        this.test = function()
        {
            Logger.log( calendar.getName() ) 
        }
        
        
        /**
        */
        this.create = function()
        {
            CalendarApp.createCalendar(spread_name);
            
            init();
        }
        
        
        
        /**
        */
        this.exists = function()
        {
            return calendar != null;
        }
        /**
        */
        this.getId = function()
        {
            return calendar.getId();
        }
        
        /**
        */
        var setCalendar = function()
        {
          var calendars = CalendarApp.getCalendarsByName(spread_name)
      
            Logger.log( calendars.length ) 
            calendar = (calendars.length>0) ? calendars.shift() : null;
            
            
        };
        
        
        /**
        */
        var init = (function()
        {
            setCalendar();
            
            
        })();
        
        
        
        
	}
      

	return Calendar;
})();