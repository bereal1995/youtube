import {all,takeLatest,call, put} from "redux-saga/effects";
import {Action} from "./redux";
import API from "../../api";

const saga = function* () {
    yield all([
        takeLatest(Action.Types.GET_VIDEOS, function* ({data}) {
            const result = yield call(API.getVideos, data)
            yield put(Action.Creators.updateState({
                list: result
            }))
        }),
        takeLatest(Action.Types.GET_VIDEO_BY_ID, function* ({data}) {
            const result = yield call(API.getVideos, data)
            yield put(Action.Creators.updateState({
                watch: result
            }))
            yield put(Action.Creators.getActivitiesVideos(result.items[0].snippet.channelId))
        }),
        takeLatest(Action.Types.GET_ACTIVITIES_VIDEOS, function* ({channelId}) {
            const result = yield call(API.activitiesVideos, {
                channelId,
                part: 'id, snippet, contentDetails'
            })
            yield put(Action.Creators.updateState({
                activities: result,
            }))
        }),
        takeLatest(Action.Types.GET_VIDEO_COMMENTS, function* ({data}) {
            const result = yield call(API.getVideoComments, data)
            console.log('@@resultComment',result);
            yield put(Action.Creators.updateState({
                comments: result,
            }))
        }),
        takeLatest(Action.Types.GET_POPULAR_VIDEOS, function* ({data}) {
            const result = yield call(API.getVideos, data)
            yield put(Action.Creators.updateState({
                popular: result,
            }))
        }),
        takeLatest(Action.Types.POST_VIDEO_RATING, function* ({data}) {
            console.log('@@data',data);
            const result = yield call(API.videoRating, data)
        }),
    ])
}

export default saga;