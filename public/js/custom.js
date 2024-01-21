//The search button on the home page is clicked
$('#mainSearchButton').on('click', function (event) {
  event.preventDefault();
  let movieName = $('#movieName').val();
  console.log(movieName);
  fetchFilmApi(movieName);
});

//Navbar search button is clicked
$('#navSearchButton').on('click', function (event) {
  event.preventDefault();
  fetchFilmApi($('#navSearchInput').val());
});

//Search movies
function fetchFilmApi(movieName) {
  const functionAddress = '../../.netlify/functions/api_requests2?t=' + movieName + '&searchType=s';
  $.get(functionAddress, function(data, status){
    //pass results to a function that shows them on the page
    displayResults(JSON.parse(data));
  });
}

//Display results after they're fetched
function displayResults(resultList) {
  if ($('#results').children.length > 0) {
    $('#results').children().remove();
  }
  if (resultList['Search'] == undefined) {
    $('#results').append('<p>No results</p>').css('color', 'white');
    return;
  }
  resultList = resultList['Search'];
  console.log(resultList);
  let movieTitles = '';
  for (let i = 0; i < resultList.length; i++) {
    let movieTitle = '<div class="row searchresult-item">';
    movieTitle += '<div class="col-md-2"><img class="search-poster" src="' + resultList[i].Poster + '"/></div>';
    movieTitle += '<div class="col-md-10"><h2>' + resultList[i].Title + '</h2>';
    movieTitle += '<p>' + resultList[i].Year + '</p>';
    movieTitle += '<p>' + resultList[i].Type + '</p>';
    //movieTitle += '<input onclick="createModal(event)" type=button id="' + resultList[i].imdbID + '" value="More information"></input>'
    movieTitle += '<button onclick="findFilmById(event)" id="' + resultList[i].imdbID + '" type="button" class="btn btn-primary" data-toggle="modal">Launch demo modal</button>'
    movieTitle += '</div></div>'
    movieTitles += movieTitle;
  }
  //movieTitles += '</div>'
  $('#results').append(movieTitles).css('color', 'white');
}


//Create modal window and launch it
function findFilmById(event) {
  event.preventDefault;
  const movieId = (event.target.id);
  const functionAddress = '../../.netlify/functions/api_requests2?t=' + movieId + '&searchType=i';
  $.get(functionAddress, function(data, status){
    //Pass result to a function that opens and populates the modal window with data
    createModal(JSON.parse(data));
  });
}

function createModal(data) {
  $('#exampleModal').modal('show');
  $('#exampleModalLabel').text(data.Title);
}