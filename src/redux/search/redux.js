import {createActions, createReducer} from "reduxsauce";

const initialState = {
    list: {
        items: [],
    },
}

export const Action = createActions({
    updateState: ['props'],
    searchVideos: ['data'],
}, {
    prefix: 'SEARCH/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE] : (state, {props}) => ({
        ...state,
        ...props
    })
});