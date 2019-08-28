import React from 'react';
import { Provider } from 'react-redux'
import { Router, Route } from "react-router-dom";

import store from './store'
import Cards from "./containers/CardListContainer";
import Login from './containers/LoginContainer';
import history from './history';

const App: React.FC = () => (
    <Provider store={store}>
        <Router history={history}>
            <Route exact path='/cards' component={Cards} />
            <Route exact path='/login' component={Login} />
        </Router>
    </Provider>
)

export default App
