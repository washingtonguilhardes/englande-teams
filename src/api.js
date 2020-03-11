import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-football-v1.p.rapidapi.com',
    headers: {
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": "97sgOvQkDQmshdeCliUkMHb7eUoup1AtZ9Gjsno6Q3U2pBITJ8"
    }
})
export default api;
