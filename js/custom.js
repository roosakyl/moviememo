const apikey = config.API_KEY;

const element = document.getElementById("searchFilm");
element.addEventListener("click", myFunction);

function myFunction(event) {
    event.preventDefault();
  document.getElementById("demo").innerHTML = "Hello World";
}