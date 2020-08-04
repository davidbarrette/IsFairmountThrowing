
const AWS = require('aws-sdk')

AWS.config.update({region: "us-east-2"})

exports.handler = async (event, context) => {
    const documentClient = new AWS.DynamoDB.DocumentClient({ region: 'us-east-2' })

    let responseBody = ""
    let statusCode = 0
    
    const { dataName } = event.pathParameters

    const params = {
        TableName: "isThrowingTable",
        Key: {
            id: dataName
        }
    }

    try{
        const data = await documentClient.get(params).promise()
        responseBody = JSON.stringify(data.Item)
        statusCode = 200
    } catch(err) {
        responseBody = (`Unable to get App Data: ${err}`),
        statusCode = 403
    }
    
    let response = {
        statusCode: statusCode,
        headers: {
            "Content-Type": "application/json",
            "access-control-allow-origin": "*"
        },
        body: responseBody
    }
    
    return response
};
