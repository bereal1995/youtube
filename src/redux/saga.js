import {all, fork} from 'redux-saga/effects'
import appSaga from './app/saga';
import authSaga from './auth/saga';
import videoSaga from './video/saga';
import searchSaga from './search/saga';

function* sagas() {
    yield all([
        fork(appSaga),
        fork(authSaga),
        fork(videoSaga),
        fork(searchSaga),
    ])
}

export default sagas;