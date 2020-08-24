
import { updateAppStateFull } from './actions/actions.js';

import axios from 'axios'
import config from './config.json'


export async function getFullUpdatedAppState(){  
  const response =  await axios.get(`${config.api.productionURL}`);
  return response.data.body
  }