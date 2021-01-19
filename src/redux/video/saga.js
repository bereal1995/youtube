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
        }),
        takeLatest(Action.Types.GET_ACTIVITIES_VIDEOS, function* ({data}) {
            const result = yield call(API.activitiesVideos, data)
            yield put(Action.Creators.updateState({
                activities: result,
            }))
        }),
        takeLatest(Action.Types.GET_POPULAR_VIDEOS, function* ({data}) {
            const result = yield call(API.getVideos, data)
            console.log('@@data',data);
            yield put(Action.Creators.updateState({
                popular: result,
            }))
        }),
    ])
}

export default saga;