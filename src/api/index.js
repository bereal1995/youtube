import {FetchJson} from "../lib/Fetch";


const API = {
    getVideos: (data) => FetchJson.get('/videos', data),
    searchVideos: (data) => FetchJson.get('/search', data),
    activitiesVideos: (data) => FetchJson.get('/activities', data),
    getVideoComments: (data) => FetchJson.get('/commentThreads', data),

    videoRating: (data) => FetchJson.post('/videos/rate', data),
}

export default API;