import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'

import { TodoState } from "../store/types";
import { addTodo, loadTodo } from "../store/actions";
import { TodoList, TodoListDispatchProps, TodoListStateProps } from "../components/TodoList";

const mapStateToProps: MapStateToProps<TodoListStateProps, {}, TodoState> = (state) => ({
    todoList: state.todoList,
    loading: state.loading,
    errors: state.errors
})

const mapDispatchToProps: MapDispatchToProps<TodoListDispatchProps, {}> = (dispatch) => ({
    addTodo: (title: string) => dispatch(addTodo(title)),
    loadTodo: (id: number) => dispatch(loadTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
