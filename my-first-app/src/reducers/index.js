import {combineReducers} from 'redux';
import counterReducer from './counter';
import logReducer from './isLogged';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Defaults to localStorage for web and AsyncStorage for React Native

const persistConfig = {
    key: 'root',
    storage,
  };

const allReducers = combineReducers({
    counter : counterReducer,
    isLogged : logReducer
})

export default persistReducer(persistConfig,allReducers)