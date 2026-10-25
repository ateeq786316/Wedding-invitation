/**
 * Guest-open logger for the wedding invitation.
 *
 * SETUP (5 minutes):
 * 1. Go to sheets.new → create a sheet named "Guest Opens"
 * 2. Extensions → Apps Script → delete everything → paste this file
 * 3. Deploy → New deployment → type "Web app"
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy the Web app URL → paste into src/config/wedding.ts (trackingUrl)
 * 5. Share links like: your-site.vercel.app/?g=rahman-family
 */
function doPost(e) {
  var data = {};
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {}
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Time', 'Guest', 'Device', 'Referrer', 'Location', 'IP', 'Screen', 'Lang']);
  }
  sheet.appendRow([
    new Date(),
    data.g || 'direct',
    data.ua || '',
    data.ref || '',
    data.loc || '',
    data.ip || '',
    data.scr || '',
    data.lang || '',
  ]);
  return ContentService.createTextOutput('ok');
}
