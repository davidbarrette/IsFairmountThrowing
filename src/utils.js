
import { updateAppStateFull } from './actions/actions.js';

import axios from 'axios'
import config from './config.json'


export async function getFullUpdatedAppState( store ){  
  const response = await axios.get(`${config.api.productionURL}`);
  store.dispatch(updateAppStateFull(response.data.body))
  }