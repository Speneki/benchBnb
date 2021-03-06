import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import React from 'react'
import { login, signUp, logoutUser } from './actions/session_actions'

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();

    // testing
    window.login = login
    window.signup = signUp
    window.logoutUser = logoutUser
    
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    // testing

    ReactDOM.render(< Root store={store} />, document.getElementById('root'));
});