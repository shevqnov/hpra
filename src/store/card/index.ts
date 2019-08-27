import {TodoState, TodoActionsTypes, TodoAction} from "./types";
export {todoSaga} from './sagas'

const initialState: TodoState = {
    todoList: [],
    loading: false,
    errors: []
}


export const todoReducer = (state = initialState, action: TodoActionsTypes): TodoState => {
    switch (action.type) {
        case TodoAction.AddTodo:
            return {...state, todoList: [...state.todoList, action.payload]}
        default:
            return state
    }
}

