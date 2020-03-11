import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-football-v1.p.rapidapi.com',
    headers: {
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": "[seu token da api]"
    }
})
export default api;
