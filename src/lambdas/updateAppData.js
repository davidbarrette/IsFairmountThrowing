'use strict';
const AWS = require('aws-sdk');
const documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
  let responseBody = "";
  let statusCode = 0;
  console.log(`Event Body: ${event.body}`)
  
  const { dataName, updatedInfo } = JSON.parse(event.body);
  
   var params = {
    TableName: "isThrowingTable",
    Item: {
      id: dataName,
      info: updatedInfo
    }
  };
  console.log(JSON.stringify(params))

  try {
    const data = await documentClient.put(params).promise();
    responseBody = JSON.stringify(data);
    statusCode = 201;
  } catch(err) {
    responseBody = `ERROR: ${err}----- Event.body ${event.body}----- Params ${JSON.stringify(params)}----- dataName: ${dataName} updatedInfo ${updatedInfo}`;
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