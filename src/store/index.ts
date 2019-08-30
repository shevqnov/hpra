import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { cardSagas, cardReducer as card } from "./card";
import { userSagas, userReducer as user } from "./user";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  card,
  user
});

function* rootSaga() {
  yield all([...cardSagas, ...userSagas]);
}

export type AppState = ReturnType<typeof rootReducer>;

const composeEnch = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, composeEnch(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);
