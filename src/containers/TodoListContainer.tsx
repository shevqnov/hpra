import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import { addTodo, loadTodo } from "../store/card/actions";
import { TodoList, TodoListDispatchProps, TodoListStateProps } from "../components/TodoList";
import { AppState } from '../store';

const mapStateToProps: MapStateToProps<TodoListStateProps, {}, AppState> = (state) => ({
    todoList: state.todo.todoList,
    loading: state.todo.loading,
    errors: state.todo.errors
})

const mapDispatchToProps: MapDispatchToProps<TodoListDispatchProps, {}> = (dispatch) => ({
    addTodo: (title: string) => dispatch(addTodo(title)),
    loadTodo: (id: number) => dispatch(loadTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
