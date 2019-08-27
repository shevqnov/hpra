import {call, put, takeLatest} from 'redux-saga/effects'
import {fetchTodoById} from "../../api";
import {addTodo, loadTodo} from "./actions";
import {TodoAction} from "./types";

export function* fetchTodo(action: ReturnType<typeof loadTodo>) {
    try {
        const response = yield call(fetchTodoById, action.payload)
        yield put(addTodo(response.data.title))
    } catch (e) {
        console.warn(e)
    }
}

export  function* todoSaga(){
    yield takeLatest(TodoAction.LoadTodo, fetchTodo)
}