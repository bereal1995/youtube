import {FetchJson} from "../lib/Fetch";


const API = {
    getVideos: (data) => FetchJson.get('/videos', data),
    searchVideos: (data) => FetchJson.get('/search', data),
    activitiesVideos: (data) => FetchJson.get('/activities', data),
    videoRating: (data) => FetchJson.post('/videos/rate', data),
}

export default API;