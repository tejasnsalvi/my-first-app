import {combineReducers} from 'redux';
import counterReducer from './counter';
import logReducer from './isLogged';

const allReducers = combineReducers({
    counter : counterReducer,
    isLogged : logReducer
})

export default allReducers