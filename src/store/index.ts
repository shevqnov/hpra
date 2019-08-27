import {TodoState, TodoActionsTypes, TodoAction} from "./types";
import {createStore, applyMiddleware} from "redux";
import todoSaga from './sagas'
import createSagaMiddleware from "@redux-saga/core";

const initialState: TodoState = {
    todoList: [],
    loading: false,
    errors: []
}

const sagaMiddleware = createSagaMiddleware()

const reducer = (state = initialState, action: TodoActionsTypes): TodoState => {
    switch (action.type) {
        case TodoAction.AddTodo:
            return {...state, todoList: [...state.todoList, action.payload]}
        default:
            return state
    }
}


export default createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(todoSaga)
