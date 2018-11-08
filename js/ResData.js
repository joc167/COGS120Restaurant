var Restaurant = [
  {'name': 'BurgerKing', 'rank': 1, 'resPic': 'images/resPic/BurgerKing.jpeg', 'liked': false, 'waitTime' : 19},
  {'name': 'Tapioca', 'rank': 2, 'resPic': 'images/resPic/Tapioca.jpeg', 'liked': false, 'waitTime' : 17},
  {'name': 'BombayCoast', 'rank': 3, 'resPic': 'images/resPic/BombayCoast.jpeg', 'liked': false, 'waitTime' : 16},
  {'name': 'Shogun', 'rank': 4, 'resPic': 'images/resPic/Shogun.jpeg', 'liked': false, 'waitTime' : 14},
  {'name': 'PandaExpress', 'rank': 5, 'resPic': 'images/resPic/PandaExpress.jpeg', 'liked': false, 'waitTime' : 12},
  {'name': 'LemonGrass', 'rank': 6, 'resPic': 'images/resPic/LemonGrass.jpeg', 'liked': false, 'waitTime' : 11},
  {'name': 'Subway', 'rank': 7, 'resPic': 'images/resPic/Subway.jpeg', 'liked': false, 'waitTime' : 9},
  {'name': 'Rubios', 'rank': 8, 'resPic': 'images/resPic/Rubios.jpeg', 'liked': false, 'waitTime' : 7},
  {'name': 'Santorini', 'rank': 9, 'resPic': 'images/resPic/Santorini.jpeg', 'liked': false,'waitTime' : 6},
  {'name': 'Seed&Sprout', 'rank': 10, 'resPic': 'images/resPic/Tapioca.jpeg', 'liked': false, 'waitTime' : 1}
]

var timeTable = [
  {'time' : '7:30 am', 'waitTime' : 2},
  {'time' : '8:00 am', 'waitTime' : 8},
  {'time' : '8:30 am', 'waitTime' : 5},
  {'time' : '9:00 am', 'waitTime' : 10},
  {'time' : '9:30 am', 'waitTime' : 5},
  {'time' : '10:00 am', 'waitTime' : 10},
  {'time' : '10:30 am', 'waitTime' : 12},
  {'time' : '11:00 am', 'waitTime' : 15},
  {'time' : '11:30 am', 'waitTime' : 10},
  {'time' : '12:00 pm', 'waitTime' : 15},
  {'time' : '12:30 pm', 'waitTime' : 15},
  {'time' : '1:00 pm', 'waitTime' : 12},
  {'time' : '1:30 pm', 'waitTime' : 10},
  {'time' : '2:00 pm', 'waitTime' : 15},
  {'time' : '2:30 pm', 'waitTime' : 15},
  {'time' : '3:00 pm', 'waitTime' : 16},
  {'time' : '3:30 pm', 'waitTime' : 10},
  {'time' : '4:00 pm', 'waitTime' : 15},
  {'time' : '4:30 pm', 'waitTime' : 8},
  {'time' : '5:00 pm', 'waitTime' : 15},
  {'time' : '5:30 pm', 'waitTime' : 12},
  {'time' : '6:00 pm', 'waitTime' : 17},
  {'time' : '6:30 pm', 'waitTime' : 12},
  {'time' : '7:00 pm', 'waitTime' : 13},
  {'time' : '7:30 pm', 'waitTime' : 12},
  {'time' : '8:00 pm', 'waitTime' : 5},
  {'time' : '8:30 pm', 'waitTime' : 4},
  {'time' : '9:00 pm', 'waitTime' : 2}
]

$(document).ready(function() {
  console.log('hello world');
  // compile the template
  var source   = $("#entry-template").html();
  var template = Handlebars.compile(source);
  var parentDiv = $("#templatedProjects");

  // now iterate through the complexData list and keep appending:
  for (var i = 0; i < timeTable.length; i++) {
    var curData = timeTable[i];
    var curHtml = template(curData);
    parentDiv.append(curHtml);
  }
  console.log(html);
});
