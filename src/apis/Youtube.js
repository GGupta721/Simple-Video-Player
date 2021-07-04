import axios from 'axios';

const KEY= 'AIzaSyBUhrMAp5AtWxJEYX-LZOXoIvpw4k0HhUs';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});