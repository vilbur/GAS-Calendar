/**  
 *	
 */
var CalendarSpread = (function()
{
	function CalendarSpread()
	{

        var spread_name	= SpreadsheetApp.getActiveSpreadsheet().getName();
        var sheet	= SpreadsheetApp.getActiveSheet();
        var resolution	= 4;
        var hours	= resolution*24;
        
        /** Create array filled with integers
        * @param		integer	max	max count of items
        * @example	 arrayIntegers(5) // return [1, 2, 3, 4, 5]
        * @return	array 	 
        */
        var arrayIntegers = function(max)
        {
          return max? arrayIntegers(max-1).concat(max):[];
        };
        /**
        */
        this.mergeVertically = function( column, row, height )
        {
            var range = sheet.getRange( column, row, row+height-1, column );
            
            var mergedRanges = range.getMergedRanges();
            for (var i = 0; i < mergedRanges.length; i++)
                mergedRanges[i].breakApart();

            range.mergeVertically(  );
        };
        /**
        */
        this.test = function()
        {

        };
        /**
        */
        this.insertEvents = function(events)
        {
            var events_insert	= arrayIntegers(hours).map(function(x,i){return [""];});
            var range	= sheet.getRange(1,1,hours,1);
            
            Logger.log( events.length );

            /**
            */
            function insertEventByStartTime(event)
            {
               events_insert[event.getStartTime().getHours() * resolution] = [ event.getTitle() ];
            }
            
            for (var i=0;i<events.length;i++) 
              insertEventByStartTime( events[i] );
            
            range.setValues( events_insert );
        };

        /**
        */
        var init = (function()
        {            
            
        })();

	}
	return CalendarSpread;
})();