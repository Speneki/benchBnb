import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from "../actions/session_actions"

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ERRORS:
            debugger
            return action.errors;
        case RECEIVE_CURRENT_USER: 
            debugger
            return [];
        default:
            debugger
            return state
    }
};