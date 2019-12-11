/**
*/
function createTestEvent() 
{
  var spreadsheet = SpreadsheetApp.getActiveSheet();

//  var calendar_id = spreadsheet.getRange('E4').getValue();
  var calendar_id = "5lpv6sd94mcagot58k6o70on2g@group.calendar.google.com";

  var eventCal = CalendarApp.getCalendarById(calendar_id);

      var event = {
//          'location': location,
          'description': "description",
//          'guests':guests +',',
          'sendInvites': 'True',
      }


   var startTime = "10.12.19 10:00";
  var endTime = "10.12.19 11:00";

//  eventCal.createEvent("summary", startTime, endTime, event)

    eventCal.createAllDayEvent("createTestEvent", new Date() )
    
    
}



/**
*/
function deleteTestEvent()
{


var calendar_id = "5lpv6sd94mcagot58k6o70on2g@group.calendar.google.com";
var cal = CalendarApp.getCalendarById(calendar_id);


  var events = cal.getEventsForDay(new Date());

  var sheet = SpreadsheetApp.getActiveSheet();
Logger.log( events.length  );


  // Clear the spreadsheet content before running
  sheet.clearContents();  
  
  // Create a header record on the current spreadsheet in cells A1:N1 - Match the number of entries in the "header=" to the last parameter
  // of the getRange entry below
  var header = [["Calendar Address", "Event Title", "Event Description", "Event Location", "Event Start", "Event End", "Calculated Duration", "Visibility", "Date Created", "Last Updated", "MyStatus", "Created By", "All Day Event", "Recurring Event", "ID","Email","Status","Name"]]
  
  var range = sheet.getRange(1,1,1,18);
  
  range.setValues(header);
  // Loop through all calendar events found and write them out starting on row 2 (row = 2) to allow for the header on row 1
  var row = 2; 
  
  for (var i=0;i<events.length;i++) 
  {
      Logger.log(  events[i].getTitle()  );
      
      events[i].deleteEvent()
      
      
//     var baseUrl = "https://www.googleapis.com/calendar/v3/calendars/{calendar_id}/events/{eventId}?sendNotifications=true";
//
//      var   eventId = events[i].getId();
//      
//     eventId = eventId.substr(0, eventId.indexOf("@"));
//      Logger.log( eventId  );
//     var url = baseUrl.replace("{calendar_id}", calendar_id).replace("{eventId}", eventId);
//
//      var options = {
//    
//        "method": "DELETE",
//        "headers": {"Authorization":"Bearer " + ScriptApp.getOAuthToken()},
//        "muteHttpExceptions": true
//    
//      };
//    // https://stackoverflow.com/questions/49794213/how-to-delete-an-event-with-google-apps-script-and-sending-an-email
//      var res = UrlFetchApp.fetch(url, options).getContentText();  
//      Logger.log(res);    
    




//      var myformula_placeholder = '';
//      // Matching the "header=" entry above, this is the detailed row entry "details=", and must match the number of entries of the GetRange entry below
//  
//      var guestList=events[i].getGuestList();   //GET THE EMAIL AND STATUS OF EACH GUEST FOR EACH EVENT 
//  
//      for(var d=0; guestList!=null && d<guestList.length; d++)
//      {
//          var details=[[calendar_id,events[i].getTitle(), events[i].getDescription(), events[i].getLocation(), events[i].getStartTime(), events[i].getEndTime(), myformula_placeholder, ('' + events[i].getVisibility()), events[i].getDateCreated(), events[i].getLastUpdated(), events[i].getMyStatus(), events[i].getCreators(), events[i].isAllDayEvent(), events[i].isRecurringEvent(), events[i].getId(), guestList[d].getEmail(), guestList[d].getGuestStatus(), guestList[d].getName()]];
//  
//          Logger.log(details);
//  
//          var range2 = sheet.getRange(row+d,1,1,18);
//          range2.setValues(details);
//  
//          var cell=sheet.getRange(row+d,7); // go to column 7 (the placeholder) of the output data
//          cell.setFormula('=(HOUR(F' +row+ ')+(MINUTE(F' +row+ ')/60))-(HOUR(E' +row+ ')+(MINUTE(E' +row+ ')/60))'); // calculate the number of hours of the session
//          cell.setNumberFormat('.00');
//  
//      }
//      row=row+d; // increment row to start the next output after the previous output
  
  }
}