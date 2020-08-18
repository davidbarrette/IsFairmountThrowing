import axios from 'axios'
import config from '../config.json'
//Look at AWS API Gateway for the route of the API calls
//'RedRoom' PUT
export async function putRedRoom(params){
    try {
        await axios.put(`${config.api.invokeURL}/RedRoom`, params)
      } catch (err) {
        console.log(`Error in changeThrowingState: ${err}`)
      }
}