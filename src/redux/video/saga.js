import {all,takeLatest,call, put, select} from "redux-saga/effects";
import {Action} from "./redux";
import {Action as AppAction} from "../app/redux";
import API from "../../api";

const saga = function* () {
    yield all([
        takeLatest(Action.Types.GET_VIDEOS, function* ({data}) {
            yield put(AppAction.Creators.updateState({loaded: false}));
            const result = yield call(API.getVideos, data)
            yield put(Action.Creators.updateState({
                list: result
            }))
            yield put(AppAction.Creators.updateState({loaded: true}));
        }),
        takeLatest(Action.Types.GET_VIDEOS_MORE, function* ({data}) {
            const {video} = yield select();
            const result = yield call(API.getVideos, {
                ...data,
                pageToken: video.list.nextPageToken,
            })
            yield put(Action.Creators.updateState({
                list: {
                    ...result,
                    items: [
                        ...video.list.items,
                        ...result.items
                    ],
                }
            }))
        }),
        takeLatest(Action.Types.GET_VIDEO_BY_ID, function* ({data}) {
            yield put(AppAction.Creators.updateState({loaded: false}));
            const result = yield call(API.getVideos, data)
            yield put(Action.Creators.updateState({
                watch: result
            }))
            yield put(Action.Creators.getActivitiesVideos(result.items[0].snippet.channelId))
            yield put(AppAction.Creators.updateState({loaded: true}));
        }),

        takeLatest(Action.Types.GET_ACTIVITIES_VIDEOS, function* ({channelId}) {
            yield put(AppAction.Creators.updateState({loaded: false}));
            const result = yield call(API.activitiesVideos, {
                channelId,
                part: 'id, snippet, contentDetails'
            })
            yield put(Action.Creators.updateState({
                activities: result,
            }))
            yield put(AppAction.Creators.updateState({loaded: true}));
        }),

        takeLatest(Action.Types.GET_VIDEO_COMMENTS, function* ({data}) {
            yield put(AppAction.Creators.updateState({loaded: false}));
            const result = yield call(API.getVideoComments, data)
            yield put(Action.Creators.updateState({
                commentList: result,
            }))
            yield put(AppAction.Creators.updateState({loaded: true}));
        }),

        takeLatest(Action.Types.GET_POPULAR_VIDEOS, function* ({data}) {
            yield put(AppAction.Creators.updateState({loaded: false}));
            const result = yield call(API.getVideos, data)
            yield put(Action.Creators.updateState({
                popular: result,
            }))
            yield put(AppAction.Creators.updateState({loaded: true}));
        }),

        takeLatest(Action.Types.POST_VIDEO_RATING, function* ({data}) {
            const result = yield call(API.videoRating, data)
            console.log('@@result rate',result);
        }),
    ])
}

export default saga;