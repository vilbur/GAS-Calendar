/**
*/
function SheetName() 
{
  var key = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getName();
  
  //return "test"
  
  return key;
}
/**
*/
function SpreadName() 
{
  var key = SpreadsheetApp.getActiveSpreadsheet().getName();
  return key;
}
