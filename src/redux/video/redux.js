import {createActions, createReducer} from "reduxsauce";

const initialState = {
    list: {
        items: [],
    },
    watch: {
        items: [],
    },
    activities: {
        items: [],
    },
    popular: {
        items: [],
    },
    commentList: {
        items: [
            {
                snippet: {
                    topLevelComment: {
                        snippet: {},
                    },
                },
                replies: {
                    comments: {},
                },
            },
        ],
    }
}

export const Action = createActions({
    updateState: ['props'],
    getVideos: ['data'],
    getVideoById: ['data'],
    getActivitiesVideos: ['channelId'],
    getVideoComments: ['data'],
    getPopularVideos: ['data'],
    postVideoRating: ['data'],
}, {
    prefix: 'VIDEO/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE] : (state, {props}) => ({
        ...state,
        ...props
    })
});