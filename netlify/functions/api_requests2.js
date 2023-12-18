exports.handler = async (event, context) => {
  console.log("parameters: ", event.queryStringParameters['t']);
    const apiCall = 'http://www.omdbapi.com/?apikey=' + process.env.API_KEY + '&t=' + event.queryStringParameters['t'];
    console.log(apiCall);

    const responseData = await fetch(apiCall);
    const data = await responseData.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
    
    /*const xhr = new XMLHttpRequest();
    xhr.open("GET", apiCall);
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.response);
        data = JSON.stringify(xhr.response);
      } else {
        console.log(`Error: ${xhr.status}`);
      }
    };*/

    return "Hey";
    /*
    fetch('http://www.omdbapi.com/?apikey=' + process.env.API_KEY + '?t=' + event.queryStringParameters['t'], {
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error("Error:", error));
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }*/
  }