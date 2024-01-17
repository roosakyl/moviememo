exports.handler = async (event, context) => {
  console.log("parameters: ", event.queryStringParameters['t']);

    const apiCall = 'http://www.omdbapi.com/?apikey=' + process.env.API_KEY + '&s=' + event.queryStringParameters['t'].split(" ").join("-");
    console.log(apiCall);

    const responseData = await fetch(apiCall);
    const data = await responseData.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  }