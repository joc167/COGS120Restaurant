// This serves as a fake database:

 var complexData = [
  {'title': 'Burger King', 'waitTime' : 1 , 'index': 1},
  {'title': 'Tapioca', 'waitTime' : 3 , 'index': 2},
  {'title': 'LemonGrass', 'waitTime' : 4, 'index': 3},
  {'title': 'Subway', 'waitTime' : 6, 'index': 4},
  {'title': 'Shogun', 'waitTime' : 7, 'index': 5},
  {'title': 'Rubios', 'waitTime' : 8, 'index': 6},
  {'title': 'Santorini', 'waitTime' : 11, 'index': 7},
  {'title': 'Seed&Sprouts', 'waitTime' : 15, 'index': 8},
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
