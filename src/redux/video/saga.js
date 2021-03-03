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
            const result = yield call(API.activitiesVideos, {
                channelId,
                part: 'id, snippet, contentDetails',
                maxResults: 30,
            })
            yield put(Action.Creators.updateState({
                activities: result,
            }))
        }),
        takeLatest(Action.Types.GET_WATCH_MORE, function* () {
            const {video} = yield select();
            const [activitiesResult, commentsResult] = yield all([
                call(API.activitiesVideos, {
                    part: 'id, snippet, contentDetails',
                    maxResults: 20,
                    channelId: video.watch.items[0].snippet.channelId,
                    pageToken: video.activities.nextPageToken,
                }),
                call(API.getVideoComments, {
                    videoId: video.watch.items[0].id,
                    part: 'id, replies, snippet',
                    maxResults: 20,
                    order: 'relevance',
                    textFormat: 'html',
                    moderationStatus: 'published',
                    pageToken: video.commentList.nextPageToken,
                })
            ])
            yield put(Action.Creators.updateState({
                activities: {
                    ...activitiesResult,
                    items: [
                        ...video.activities.items,
                        ...activitiesResult.items,
                    ]
                },
                commentList: {
                    ...commentsResult,
                    items: [
                        ...video.commentList.items,
                        ...commentsResult.items
                    ],
                }
            }))
        }),

        takeLatest(Action.Types.GET_VIDEO_COMMENTS, function* ({data}) {
            const result = yield call(API.getVideoComments, data)
            yield put(Action.Creators.updateState({
                commentList: result,
            }))
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