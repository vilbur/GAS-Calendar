/** Remote Google calendar via script in spreadsheet
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
            Logger.log( calendar.getName() ); 
        };
        /**
        */
        this.create = function()
        {
            CalendarApp.createCalendar(spread_name);
            
            init();
        };
        /**
        */
        this.exists = function()
        {
            return calendar !== null;
        };
        /**
        */
        this.getId = function()
        {
            return calendar.getId();
        };
        /**
        */
        this.getEvents = function()
        {
            var sheet = SpreadsheetApp.getActiveSheet();

            var today = (function(today)
            {
              today.setHours(23, 59, 59);
              return today;
            })(new Date());
            
            var yesterday_midnight = (function(yesterday_midnight)
            {
              yesterday_midnight.setDate( yesterday_midnight.getDate() -1 );
              yesterday_midnight.setHours(23, 59, 59);
            
              return yesterday_midnight;
            })( new Date());
  
            return calendar.getEvents( yesterday_midnight, today  );
        };
        
        
        /**
        */
        var setCalendar = function()
        {
            var calendars = CalendarApp.getCalendarsByName(spread_name);
      
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