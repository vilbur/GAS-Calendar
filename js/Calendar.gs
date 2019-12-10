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
		var month_names = [ 'Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec' ];
		
		/** Create array filled with integers
		* @param      integer	max	max count of items
		* @example    arrayIntegers(5) // return [1, 2, 3, 4, 5]
		* @return     array 	 
		*/
		function  arrayIntegers(max)
		{
		  return max? arrayIntegers(max-1).concat(max):[];
		}
		
		/**
		*/
		function getDatesInMonth(days_in_month) 
		{
			return arrayIntegers(days_in_month).map(function(date){
			   return date+'.';
			});
		}
		
		/**
		*/
		// Accepts a Date object or date string that is recognized by the Date.parse() method
		function getDayOfWeek(date) 
		{
		  return new Date(date).getDay(); 
		}
		
		/**
		*/
		function getDaysInMonth( first_day_in_month, days_count_in_month) 
		{
		  var days_in_week = ['Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So'];
		  
		  var days_in_month = [].concat.apply([], [days_in_week, days_in_week, days_in_week, days_in_week, days_in_week, days_in_week]);
		  
		  return days_in_month.slice( first_day_in_month, first_day_in_month+days_count_in_month );
		}
		
		/**
		*/
		function getNumberOfMonth( month ) 
		{
		  return month_names.indexOf(month) + 1;
		}
		
		/**
		*/
		function CALENDAR(year, month)
		{
		  
		  if( typeof year == 'undefined' )
			year = (new RegExp(/(\d+)/gi).exec( SpreadName() )).pop()
			
		  if( typeof month == 'undefined' )
			  month = getNumberOfMonth( SheetName() );
		 
		
		  var date_first = new Date( year, parseInt(month-1), 1);
		  var date_last  = new Date( year, parseInt(month), 0);
		  
		  var days_in_month = date_last.getDate();
		  var first_day_in_month = getDayOfWeek(date_first);
		  
		  var header             = [month_names[month-1] + ' ' + year];              // E.G.: 'Leden 2019'
		  var _days_in_month  = getDaysInMonth( first_day_in_month, days_in_month ); // E.G.: 'Po | Ut | St | ...'
		  var _dates_in_month = getDatesInMonth(days_in_month);                      // E.G.: '1. | 2. | 3. | ...'
		  
		  return [ 
					[].concat.apply([] ,[header, _days_in_month]),
					[].concat.apply([] ,[[""],    _dates_in_month]),
				 ];
		}
		/**
		*/
		function daysInMonth (month, year)
		{
			return new Date(year, month, 0).getDate();
		}


	}

	return Calendar;
})();