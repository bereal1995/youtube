import {FetchJson} from "../lib/Fetch";


const API = {
    getVideos: (data) => FetchJson.get('/videos', data),
    searchVideos: (data) => FetchJson.get('/search', data),
}

export default API;