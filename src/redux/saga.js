import {all, call} from 'redux-saga/effects'
import appSaga from './app/saga';
import authSaga from './auth/saga';
import videoSaga from './video/saga';
import searchSaga from './search/saga';

function* sagas() {
    yield all([
        call(appSaga),
        call(authSaga),
        call(videoSaga),
        call(searchSaga),
    ])
}

export default sagas;