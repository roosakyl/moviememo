//const apikey = process.env.API_KEY;

$('#searchButton').click(function(e) {
  e.preventDefault();
  $.get('"http://www.omdbapi.com/?apikey=' + API_KEY + '&t=lord+of+the+rings"', function(data, status){
    console.log("Data: " + data + "\nStatus: " + status);
  });
})