exports.handler = async (event, context) => {
    const data = { hello: 'Hello World!' };
    console.log(data);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  }