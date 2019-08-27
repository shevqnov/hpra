import React from 'react';
import { Provider} from 'react-redux'

import store from './store'
import TodoListContainer from "./containers/TodoListContainer";

const App: React.FC = () => (
    <Provider store={store}>
        <TodoListContainer/>
    </Provider>
)

export default App
