$('#mainSearchButton').on("click", function (event) {
  event.preventDefault();
  let movieName = $('#movieName').val();
  console.log(movieName);
  fetchFilmApi(movieName);
});

$('#navSearchButton').on("click", function (event) {
  event.preventDefault();
  fetchFilmApi();
});

function fetchFilmApi(movieName) {
  console.log("hehe");
  const functionAddress = '../../.netlify/functions/api_requests2?t=' + movieName;
  $.get(functionAddress, function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
  });
}