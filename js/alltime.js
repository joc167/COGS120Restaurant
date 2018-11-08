var complexData = [
  {'time' : '07:30', 'waitTime' : 02, 'index': 1},
  {'time' : '08:00', 'waitTime' : 08, 'index': 2},
  {'time' : '08:30', 'waitTime' : 05, 'index': 3},
  {'time' : '09:00', 'waitTime' : 10, 'index': 4},
  {'time' : '09:30', 'waitTime' : 05, 'index': 5},
  {'time' : '10:00', 'waitTime' : 10, 'index': 6},
  {'time' : '10:30', 'waitTime' : 12, 'index': 7},
  {'time' : '11:00', 'waitTime' : 15, 'index': 8},
  {'time' : '11:30', 'waitTime' : 10, 'index': 9},
  {'time' : '12:00', 'waitTime' : 15, 'index': 10},
  {'time' : '12:30', 'waitTime' : 15, 'index': 11},
  {'time' : '13:00', 'waitTime' : 12, 'index': 12},
  {'time' : '13:30', 'waitTime' : 10, 'index': 13},
  {'time' : '14:00', 'waitTime' : 15, 'index': 14},
  {'time' : '14:30', 'waitTime' : 15, 'index': 15},
  {'time' : '15:00', 'waitTime' : 16, 'index': 16},
  {'time' : '15:30', 'waitTime' : 10, 'index': 17},
  {'time' : '16:00', 'waitTime' : 15, 'index': 18},
  {'time' : '16:30', 'waitTime' : 08, 'index': 19},
  {'time' : '17:00', 'waitTime' : 15, 'index': 20},
  {'time' : '17:30', 'waitTime' : 12, 'index': 21},
  {'time' : '18:00', 'waitTime' : 17, 'index': 22},
  {'time' : '18:30', 'waitTime' : 12, 'index': 23},
  {'time' : '19:00', 'waitTime' : 13, 'index': 24},
  {'time' : '19:30', 'waitTime' : 12, 'index': 25},
  {'time' : '20:00', 'waitTime' : 05, 'index': 26},
  {'time' : '20:30', 'waitTime' : 04, 'index': 27},
  {'time' : '21:00', 'waitTime' : 02, 'index': 28}
]

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
 console.log('hello world');

 // compile the template
 var source   = $("#entry-template").html();
 var template = Handlebars.compile(source);
 var parentDiv = $("#templatedProjects");


 // now iterate through the complexData list and keep appending:
 for (var i = 0; i < complexData.length; i++) {
   var curData = complexData[i];
   var curHtml = template(curData);
   parentDiv.append(curHtml);
 }
   console.log(curHtml);
});
