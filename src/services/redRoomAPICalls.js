import axios from 'axios'
import config from '../config.json'
//Look at AWS API Gateway for the route of the API calls
//'RedRoom' PUT
export async function putRedRoom(params){
    try {
<<<<<<< HEAD
        await axios.put(`${config.api.invokeURL}/RedRoom`, params)
      } catch (err) {
        console.log(`Error in changeThrowingState: ${err}`)
=======
        await axios.put(`${config.api.productionURL}/RedRoom`, params)
      } catch (err) {
        console.log(`Error in putRedRoom: ${err}`)
>>>>>>> IntegrateTests
      }
}