// import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
// import thunkMidlleware from 'redux-thunk'
// import earn from '../Reducers/earnReducer.js'
// import latestNews from '../Reducers/latestNewsReducer.js'
// import createSagaMiddleware,{ END } from 'redux-saga';
// import { createLogger } from 'redux-logger';
// import rootSagas from '../Sagas/index'
// let baseReducers = {
//     earn: earn,
//     latestNews: latestNews
// }
//
//
// const middlewares = [];//中间件列表
// const sagaMiddleware = createSagaMiddleware();
// middlewares.push(thunkMidlleware);
// middlewares.push(sagaMiddleware);
//
// if (__DEV__) {
//     middlewares.push(createLogger());
// }
//
// const configStore = function (reducers = {}) {
//     const rootReducer = combineReducers({
//         ...baseReducers,
//         ...reducers
//     })
//
//     return function (_options = {}) {
//         const store = createStore(
//             rootReducer,
//             _options.initialState,
//             compose(
//                 applyMiddleware(...middlewares)
//             )
//         )
//         const options = {
//             // storage: AsyncStorage,
//             blacklist: _options.blacklist
//         }
//         store.runSaga = sagaMiddleware.run(rootSagas);
//         // persistStore(store, options)
//         return store
//     }
//
// }
//
// export default configStore
import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from '../Reducers/index.js'

import earn from '../Reducers/earnReducer.js'
import latestNews from '../Reducers/latestNewsReducer.js'
let baseReducers = {
    earn: earn,
    latestNews: latestNews
}

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
export default function configureStore(reducers = {}){
    const rootReducer = combineReducers({
        ...baseReducers,
        ...reducers
    })
    
    const store = createStore(
        rootReducer,
        {},
        applyMiddleware(sagaMiddleware)
    );
    
    store.runSaga = sagaMiddleware.run;
    return store;
}
// render the application
