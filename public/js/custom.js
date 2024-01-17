$('#mainSearchButton').on('click', function (event) {
  event.preventDefault();
  let movieName = $('#movieName').val();
  console.log(movieName);
  fetchFilmApi(movieName);
});

$('#navSearchButton').on('click', function (event) {
  event.preventDefault();
  fetchFilmApi();
});

function fetchFilmApi(movieName) {
  const functionAddress = '../../.netlify/functions/api_requests2?t=' + movieName;
  $.get(functionAddress, function(data, status){
    displayResults(JSON.parse(data));
  });
}

function displayResults(resultList) {
  if ($('#results').children.length > 0) {
    $('#results').children().remove();
  }
  if (resultList['Search'] == undefined) {
    $('#results').append('<p id="blurb">Tyhjä tulos</p>').css('color', 'white');
    return;
  }
  resultList = resultList['Search'];
  let movieTitles = "<ol>";
  for (let i = 0; i < resultList.length; i++) {
    let movieTitle = '<h2>' + resultList[i].Title + '</h2>';
    movieTitle += '<div class="moviedata"><p>' + resultList[i].Year + '</p>';
    movieTitle += '<img src="' + resultList[i].Poster + '"/></div>';
    movieTitles += '<li>' + movieTitle + '</li>';
  }
  movieTitles += '</ol>'
  $('#results').append(movieTitles).css('color', 'white');
}