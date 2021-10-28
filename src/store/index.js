import {
    createStore,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist';
import { createLogger } from 'redux-logger'
import createSensitiveStorage from 'redux-persist-sensitive-storage'
//import storage from 'redux-persist/lib/storage' 

import appReducer from '../reducer'

const storage=createSensitiveStorage({
    keychainService: "myKeychainDiabet",
    sharedPreferencesName: "mySharedPrefsDiabet"
})

const persistConfig={
    timeout:null,
    key:'root',
    storage:storage,
    whitelist:['authReducer']
}

const persistedReducer=persistReducer(persistConfig,appReducer)

const loggerMiddleware=createLogger({
   collapsed:false,
   level:'debug'
})

const middleware=[thunk]

if(__DEV__){
     middleware.push(loggerMiddleware)
}

function configureStore(){
    const enhancer=applyMiddleware(...middleware)
    const store=createStore(persistedReducer,enhancer)
    const persistor=persistStore(store)
    return {store,persistor}
}

const store=configureStore();

export default store