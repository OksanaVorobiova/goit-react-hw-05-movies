import axios from 'axios';

const API_KEY = `0be17033588433ae451a609394607ef8`;
const ENDPOINT = `https://api.themoviedb.org/3/trending/movie/day`;

axios.defaults.baseURL = ENDPOINT;
axios.defaults.params = {
  api_key: API_KEY,
  // media_type: 'movie',
  // time_window: 'day',
};

export const getTrending = async () => {
  try {
    const res = await axios.get('');
    console.log(res.data.results);
    return res.data.results;
  } catch (error) {
    console.log(error);
  }
};
