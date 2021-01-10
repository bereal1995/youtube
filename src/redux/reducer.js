import {combineReducers} from 'redux';

import appReducer from './app/redux';
import authReducer from './auth/redux';
import videoReducer from './video/redux';
import searchReducer from './search/redux';

const reducers = combineReducers({
    app: appReducer,
    auth: authReducer,
    video: videoReducer,
    search: searchReducer,
});

export default reducers;