import { combineReducers } from 'redux';

import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'; 

import memes from './meme.reducers';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['']
}

const rootReducer = combineReducers({ 
    memeDB: memes, 
});


export default persistReducer(persistConfig, rootReducer);