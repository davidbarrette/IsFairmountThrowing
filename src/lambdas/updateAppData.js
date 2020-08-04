'use strict';
const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
  const documentClient = new AWS.DynamoDB.DocumentClient();

  let responseBody = "";
  let statusCode = 0;
  
  // const { dataName, payload } = JSON.parse(event.body); //IDK why it doesn't work ("Unexpected token o in JSON at position 1"")
  // const dataName = event.body.dataName
  // const payload = event.body.payload

  const params = {
    TableName: "isThrowingTable",
    Key: {
      id: "throwingStatus",
    },
    UpdateExpression: "set info = :n",
    ExpressionAttributeValues: {
        ":n": "true"
    },
    ReturnValues: "UPDATED_NEW"
  };

  try {
    const data = await documentClient.update(params).promise();
    responseBody = JSON.stringify(data);
    statusCode = 201;
  } catch(err) {
    responseBody = `Unable to put product: ${err}`;
    statusCode = 403;
  }

  return {
    statusCode: statusCode,
    headers: {
      "Content-Type": "application/json",
      "access-control-allow-origin": "*"
    },
    body: responseBody
  };
};