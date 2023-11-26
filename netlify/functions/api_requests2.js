exports.handler = async (event, context) => {
    const data = { hello: 'Hello World!' };
  
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  }