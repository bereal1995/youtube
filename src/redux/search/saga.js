import {all,takeLatest,call, put} from "redux-saga/effects";
import {Action} from "./redux";
import API from "../../api";

const saga = function* () {
    yield all([
        takeLatest(Action.Types.SEARCH_VIDEOS, function* ({data}) {
            const result = yield call(API.searchVideos, data)
            yield put(Action.Creators.updateState({
                list: result
            }))
        }),
    ])
}

export default saga;