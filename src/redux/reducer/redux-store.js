import { combineReducers, createStore } from 'redux';
import auth_reducer from './auth-reducer'


let reducers= combineReducers({
    auth:auth_reducer,

});

const store = createStore(reducers);

export default store; 