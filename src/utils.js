
import { changePartyDate, changeThrowingStatus, changeNotThrowingText } from './actions/actions.js';

import axios from 'axios'
import config from './config.json'


export function getUpdatedAppState( store ){  
  const response = await axios.get(`${config.api.testURL}`);
  console.log()
    // config.databaseNamesArray.map(async (dataName) => {
    //     try {
    //       const response = await axios.get(`${config.api.testURL}/${dataName}`);
    //       //THIS SWITCH SHOULD BE TURNED INTO ONE FUNCTION BY CHANGING ACTIONS 
    //       //b/c in the response we have an 'id' that is the same as the database name 
    //       switch (dataName){
    //         case config.databaseNames.THROWING_STATUS:
    //           store.dispatch(changeThrowingStatus(response.data.info)) 
    //           break;
    
    //         case config.databaseNames.PARTY_DATE:
    //           store.dispatch(changePartyDate(response.data.info));
    //           break;
    
    //         case config.databaseNames.NOT_THROWING_TEXT:
    //           store.dispatch(changeNotThrowingText(response.data.info));
    //           break;
    
    //         default:
    //           console.log(`Unable to set state of app with response data: ${response.data}`);
    //       }
    
    //     }catch(err){
    //       console.log(`ERROR: ${JSON.stringify(err)}`)
    //     }
    // });
  }