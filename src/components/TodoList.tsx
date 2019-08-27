import React from 'react'

import { TodoState } from "../store/types";

export interface TodoListDispatchProps {
    addTodo: (todo: string) => void,
    loadTodo: (id: number) => void
}

export interface TodoListStateProps extends TodoState {
}

export const TodoList: React.FC<TodoListStateProps & TodoListDispatchProps> = (props) => {
    React.useEffect(() => {
        // props.addTodo('some todo')
        props.loadTodo(1)
    }, [props])
    return (
        <ul>
            {props.todoList.map(todo => <li key={todo.id}>{todo.title}</li>)}
        </ul>
    )
}
