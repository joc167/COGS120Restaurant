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
  {'time' : '07:30', 'waitTime' : 2},
  {'time' : '08:00', 'waitTime' : 8},
  {'time' : '08:30', 'waitTime' : 5},
  {'time' : '09:00', 'waitTime' : 10},
  {'time' : '09:30', 'waitTime' : 5},
  {'time' : '10:00', 'waitTime' : 10},
  {'time' : '10:30', 'waitTime' : 12},
  {'time' : '11:00', 'waitTime' : 15},
  {'time' : '11:30', 'waitTime' : 10},
  {'time' : '12:00', 'waitTime' : 15},
  {'time' : '12:30', 'waitTime' : 15},
  {'time' : '13:00', 'waitTime' : 12},
  {'time' : '13:30', 'waitTime' : 10},
  {'time' : '14:00', 'waitTime' : 15},
  {'time' : '14:30', 'waitTime' : 15},
  {'time' : '15:00', 'waitTime' : 16},
  {'time' : '15:30', 'waitTime' : 10},
  {'time' : '16:00', 'waitTime' : 15},
  {'time' : '16:30', 'waitTime' : 8},
  {'time' : '17:00', 'waitTime' : 15},
  {'time' : '17:30', 'waitTime' : 12},
  {'time' : '18:00', 'waitTime' : 17},
  {'time' : '18:30', 'waitTime' : 12},
  {'time' : '19:00', 'waitTime' : 13},
  {'time' : '19:30', 'waitTime' : 12},
  {'time' : '20:00', 'waitTime' : 5},
  {'time' : '20:30', 'waitTime' : 4},
  {'time' : '21:00', 'waitTime' : 2}
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
