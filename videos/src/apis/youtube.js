import axios from 'axios'

const KEY = 'AIzaSyB02EODIV0wSd-zFXt-aS6L32ZpMKC8LHM' 

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: `${KEY}`
    }
})