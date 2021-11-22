/*Snippet to apply extension’s options gotten from https://www.npmjs.com/package/redux-devtools-extension*/
import { createStore, applyMiddleware,combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'  //line added after snippet

//carReducer
import { carsReducer } from './reducers/carsReducer.jsx';
import { alertsReducer } from './reducers/alertsReducer.jsx';
import {bookingsReducer} from './reducers/bookingsReducer.jsx';
const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

const rootReducer = combineReducers({
    carsReducer,                            //car collection
    alertsReducer,                          //alerts Collection
    bookingsReducer                         //booked cars by User Collection
})
const store = createStore(
  rootReducer,                      //use reducers
  composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);

export default store;