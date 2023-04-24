import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://localhost:3000/',
});


export default {
    get(url, param = {}, headers = {}) {
        return Api.get(url, {
            params: param,
            headers,
        })
    },
}
