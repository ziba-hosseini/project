import { createStore,applyMiddleware,combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {reducerTableData,ModalReducer,SearchReducer,reducerAccess} from '../reducer/index';
import{watchFetchData}from '../saga/index';
export const rootReducer = combineReducers({
     reducerTableData,
     ModalReducer,
     SearchReducer,
     reducerAccess
  });

const sagaMiddleware = createSagaMiddleware();

export type AppState=ReturnType<typeof rootReducer>
export const store=createStore(rootReducer,applyMiddleware(sagaMiddleware));


sagaMiddleware.run(watchFetchData);