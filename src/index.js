import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore/*, applyMiddleware*/ } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
//import { createLogger } from 'redux-logger'
import { PersistGate } from 'redux-persist/es/integration/react'
import basicReducer from './reducers/basicReducer'


//This is to let the app's State persist throw a refresh
//https://www.youtube.com/watch?v=J3aJNTqeXMw
const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}
const persistedReducer = persistReducer(persistConfig, basicReducer)

const store = createStore(
    persistedReducer, /*applyMiddleware(createLogger())*/
)

const persistedStore = persistStore(store)

function render() {
    ReactDOM.render(
        <Provider store = { store } >
            <PersistGate persistor = {persistedStore} loading={null}>
                <App />
            </PersistGate>
        </Provider>, 
        document.getElementById('root'));

        //Old render without <provider/> (a redux tool so that all components can use store)
    // ReactDOM.render(<App store = { store } />, document.getElementById('root'))
}

store.subscribe(render)
render()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
