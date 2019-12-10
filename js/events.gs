function onOpen() 
{
   var sheet = SpreadsheetApp.getActiveSpreadsheet();
   var entries = [{
       name : "Get calendar info",
       functionName : "getCal" 
    }];

  sheet.addMenu("Calendar Actions", entries);
}
