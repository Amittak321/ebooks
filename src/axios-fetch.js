import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://ebooks-77d91.firebaseio.com/'
});

export default instance;