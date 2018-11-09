var dropdownTable = [
  {'time' : '07:30', 'index' : 0},
  {'time' : '08:00', 'index' : 1},
  {'time' : '08:30', 'index' : 2},
  {'time' : '09:00', 'index' : 3},
  {'time' : '09:30', 'index' : 4},
  {'time' : '10:00', 'index' : 5},
  {'time' : '10:30', 'index' : 6},
  {'time' : '11:00', 'index' : 7},
  {'time' : '11:30', 'index' : 8},
  {'time' : '12:00', 'index' : 9},
  {'time' : '12:30', 'index' : 10},
  {'time' : '13:00', 'index' : 11},
  {'time' : '13:30', 'index' : 12},
  {'time' : '14:00', 'index' : 13},
  {'time' : '14:30', 'index' : 14},
  {'time' : '15:00', 'index' : 15},
  {'time' : '15:30', 'index' : 16},
  {'time' : '16:00', 'index' : 17},
  {'time' : '16:30', 'index' : 18},
  {'time' : '17:00', 'index' : 19},
  {'time' : '17:30', 'index' : 20},
  {'time' : '18:00', 'index' : 21},
  {'time' : '18:30', 'index' : 22},
  {'time' : '19:00', 'index' : 23},
  {'time' : '19:30', 'index' : 24},
  {'time' : '20:00', 'index' : 25},
  {'time' : '20:30', 'index' : 26},
  {'time' : '21:00', 'index' : 27}
]

$(document).ready(function() {
  var source3   = $("#dropdown-template").html();
  var template3 = Handlebars.compile(source3);
  var parentDiv3 = $("#myDropdown");

  // now iterate through the complexData list and keep appending:
  for (var i = 0; i < dropdownTable.length; i++) {
    var curData3 = dropdownTable[i];
    var curHtml3 = template3(curData3);
    parentDiv3.append(curHtml3);
  }
});
