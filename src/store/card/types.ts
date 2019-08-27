import * as actions from './actions'

export interface Todo {
    id: number;
    title: string;
    completed: boolean
}

export interface TodoState {
    todoList: Todo[];
    loading: boolean;
    errors: string[];
}

export enum TodoAction {
    AddTodo = 'ADD_TODO',
    LoadTodo = 'LOAD_TODO'
}
export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type TodoActionsTypes = ReturnType<InferValueTypes<typeof actions>>;