var complexData = [
  {'time' : '7:30 am', 'waitTime' : 2, 'index': 1},
  {'time' : '8:00 am', 'waitTime' : 8, 'index': 2},
  {'time' : '8:30 am', 'waitTime' : 5, 'index': 3},
  {'time' : '9:00 am', 'waitTime' : 10, 'index': 4},
  {'time' : '9:30 am', 'waitTime' : 5, 'index': 5},
  {'time' : '10:00 am', 'waitTime' : 10, 'index': 6},
  {'time' : '10:30 am', 'waitTime' : 12, 'index': 7},
  {'time' : '11:00 am', 'waitTime' : 15, 'index': 8},
  {'time' : '11:30 am', 'waitTime' : 10, 'index': 9},
  {'time' : '12:00 pm', 'waitTime' : 15, 'index': 10},
  {'time' : '12:30 pm', 'waitTime' : 15, 'index': 11},
  {'time' : '1:00 pm', 'waitTime' : 12, 'index': 12},
  {'time' : '1:30 pm', 'waitTime' : 10, 'index': 13},
  {'time' : '2:00 pm', 'waitTime' : 15, 'index': 14},
  {'time' : '2:30 pm', 'waitTime' : 15, 'index': 15},
  {'time' : '3:00 pm', 'waitTime' : 16, 'index': 16},
  {'time' : '3:30 pm', 'waitTime' : 10, 'index': 17},
  {'time' : '4:00 pm', 'waitTime' : 15, 'index': 18},
  {'time' : '4:30 pm', 'waitTime' : 8, 'index': 19},
  {'time' : '5:00 pm', 'waitTime' : 15, 'index': 20},
  {'time' : '5:30 pm', 'waitTime' : 12, 'index': 21},
  {'time' : '6:00 pm', 'waitTime' : 17, 'index': 22},
  {'time' : '6:30 pm', 'waitTime' : 12, 'index': 23},
  {'time' : '7:00 pm', 'waitTime' : 13, 'index': 24},
  {'time' : '7:30 pm', 'waitTime' : 12, 'index': 25},
  {'time' : '8:00 pm', 'waitTime' : 5, 'index': 26},
  {'time' : '8:30 pm', 'waitTime' : 4, 'index': 27},
  {'time' : '9:00 pm', 'waitTime' : 2, 'index': 28}
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
