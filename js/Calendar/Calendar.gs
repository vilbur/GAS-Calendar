/**  
 *	
 */
var Calendar = (function()
{
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
        this.getEvents = function()
        {
            var sheet = SpreadsheetApp.getActiveSheet();

            var today = new Date();
            var yesterday_midnight =  new Date();
  
            today.setHours(23, 59, 59);
  
            yesterday_midnight.setDate( yesterday_midnight.getDate() -1 )
            yesterday_midnight.setHours(23, 59, 59)
            
            
            Logger.log( today );
            Logger.log( yesterday_midnight );
  
            return calendar.getEvents( yesterday_midnight, today  );
        }
        
        
        /**
        */
        var setCalendar = function()
        {
            var calendars = CalendarApp.getCalendarsByName(spread_name)
      
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