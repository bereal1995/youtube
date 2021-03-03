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
    getVideosMore: ['data'],
    getVideoById: ['data'],

    getActivitiesVideos: ['channelId'],
    getActivitiesVideosMore: ['data'],

    getVideoComments: ['data'],
    getVideoCommentsMore: ['data'],

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