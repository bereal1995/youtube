import {createActions, createReducer} from "reduxsauce";

const initialState = {
    user: null,
    isLoggedIn: false,
}

export const Action = createActions({
    updateState: ['props'],
}, {
    prefix: 'AUTH/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE] : (state, {props}) => ({
        ...state,
        ...props
    })
});