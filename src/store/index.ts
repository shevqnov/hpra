
import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import {todoSaga, todoReducer} from './card'
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    todo: todoReducer
})

export type AppState = ReturnType<typeof rootReducer>

const composeEnch = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(rootReducer, composeEnch(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(todoSaga)
