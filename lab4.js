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
/*
var complexData = [
  {
    'title': 'BurgerKing',
    'rank': 1,
    'resPic': 'images/resPic/BurgerKing.jpeg',
    'liked': false
    'waitTime' : 19
  },

  {
    'title': 'Tapioca',
    'rank': 2,
    'resPic': 'images/resPic/Tapioca.jpeg',
    'liked': false
    'waitTime' : 17
  },

  {
    'title': 'BombayCoast',
    'rank': 3,
    'resPic': 'images/resPic/BombayCoast.jpeg',
    'liked': false
    'waitTime' : 16
  },

  {
    'name': 'Shogun',
    'rank': 4,
    'resPic': 'images/resPic/Shogun.jpeg',
    'liked': false
    'waitTime' : 14
  },
  {
    'title': 'PandaExpress',
    'rank': 5,
    'resPic': 'images/resPic/PandaExpress.jpeg',
    'liked': false
    'waitTime' : 12
  },

  {
    'title': 'LemonGrass',
    'rank': 6,
    'resPic': 'images/resPic/LemonGrass.jpeg',
    'liked': false
    'waitTime' : 11
  },

  {
    'title': 'Subway',
    'rank': 7,
    'resPic': 'images/resPic/Subway.jpeg',
    'liked': false
    'waitTime' : 9
  },

  {
    'title': 'Rubios',
    'rank': 8,
    'resPic': 'images/resPic/Rubios.jpeg',
    'liked': false
    'waitTime' : 7
  },

  {
    'title': 'Santorini',
    'rank': 9,
    'resPic': 'images/resPic/Santorini.jpeg',
    'liked': false
    'waitTime' : 6
  },

  {
    'title': 'Seed&Sprout',
    'rank': 10,
    'resPic': 'images/resPic/Tapioca.jpeg',
    'liked': false
    'waitTime' : 1
  }

]
*/

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  console.log('hello world');

  // compile the template
  var source   = $("#entry-template").html();
  var template = Handlebars.compile(source);

  var parentDiv = $("#templatedProjects");

  // BEGIN - STEP 1

  // start with a simple template
  /*var html = template(simpleData);
  console.log(html);
  parentDiv.append(html);*/

  // now iterate through the complexData list and keep appending:
  for (var i = 0; i < complexData.length; i++) {
    var curData = complexData[i];
    var curHtml = template(curData);
    parentDiv.append(curHtml);
  }
    console.log(curHtml);

  // END - STEP 1


  // BEGIN - STEP 2
  /*
  // when you first load the page, set a custom name if you have one:
  var name = localStorage.getItem('customName');
  if (name) {
    $("#myName").html(name);
  }
  // use localStorage to store your name
  $("#changeName").click(function() {
    var newName = prompt("What's your new name?");
    if (newName) {
      $("#myName").html(newName);
      localStorage.setItem('customName', newName);
    }
  });
  */
  // END - STEP 2


  // BEGIN - STEP 3
  /*
  // Use the URLSearchParams API to make fake-database queries using a URL
  // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
  var queryParams = new URLSearchParams(window.location.search);
  var projectTitle = queryParams.get('project');
  console.log('query for', projectTitle);
  // to get this to work like in class, comment out the "STEP 1" parts
  // above between BEGIN and END.
  for (var i = 0; i < complexData.length; i++) {
    var curData = complexData[i];
    if (curData.title == projectTitle) {
      var curHtml = template(curData);
      parentDiv.append(curHtml);
    }
  }
  */
  // END - STEP 3
});
