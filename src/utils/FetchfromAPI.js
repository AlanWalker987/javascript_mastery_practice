import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
    url: BASE_URL,
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': '982e3bdcbfmshba8bd467a31d5bbp17c11ajsn532a727403d4',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchfromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
}