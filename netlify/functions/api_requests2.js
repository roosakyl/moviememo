exports.handler = async (event, context) => {

    const apiCall = 'http://www.omdbapi.com/?apikey=' + process.env.API_KEY + '&' + event.queryStringParameters['searchType'] + '=' + event.queryStringParameters['t'].split(" ").join("-");
    console.log(apiCall);

    const responseData = await fetch(apiCall);
    const data = await responseData.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  }