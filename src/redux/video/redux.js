import {createActions, createReducer} from "reduxsauce";

const initialState = {
    list: {
        items: [],
    },
    watch: {
        items: [],
    },
}

export const Action = createActions({
    updateState: ['props'],
    getVideos: ['data'],
    getVideoById: ['data'],
}, {
    prefix: 'VIDEO/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE] : (state, {props}) => ({
        ...state,
        ...props
    })
});