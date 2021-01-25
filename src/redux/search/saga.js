import {all,takeLatest,call, put} from "redux-saga/effects";
import {Action} from "./redux";
import {Action as AppAction} from "../app/redux";
import API from "../../api";

const saga = function* () {
    yield all([
        takeLatest(Action.Types.SEARCH_VIDEOS, function* ({data}) {
            yield put(AppAction.Creators.updateState({loaded: false}));
            const result = yield call(API.searchVideos, data)
            yield put(Action.Creators.updateState({
                list: result
            }))
            yield put(AppAction.Creators.updateState({loaded: true}));
        }),
    ])
}

export default saga;