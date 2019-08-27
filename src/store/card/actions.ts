import {TodoAction} from "./types";

export const addTodo = (title: string) => ({
    type: TodoAction.AddTodo,
    payload: {title, completed: false, id: new Date().getTime()}
} as const)

export const loadTodo = (id: number) => ({
    type: TodoAction.LoadTodo,
    payload: id
} as const)