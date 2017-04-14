// server.js
// where your node app starts

// init project
var express = require('express');
var XLSX = require('XLSX');
var app = express();
var cors = require('cors')
var port = 3000;

// http://expressjs.com/en/starter/static-files.html
app.use(cors());

function excelCheck() {
  if(typeof require !== 'undefined') XLSX = require('xlsx');
  var workbook = XLSX.readFile('./assets/TestExcel.xlsx');
  var first_sheet_name = workbook.SheetNames[0];
  var address_of_cell = 'A1';

  /* Get worksheet */
  var worksheet = workbook.Sheets[first_sheet_name];
  return XLSX.utils.sheet_to_json(worksheet);
  console.log('tick')
  setTimeout(excelCheck, 5000)
}

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.send(excelCheck());
});

// listen for requests :)
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
  setTimeout(excelCheck, 5000);
});
