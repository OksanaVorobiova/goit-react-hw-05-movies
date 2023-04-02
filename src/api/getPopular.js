import axios from 'axios';

const API_KEY = `0be17033588433ae451a609394607ef8`;
const ENDPOINT = `https://api.themoviedb.org/3`;

axios.defaults.baseURL = ENDPOINT;
axios.defaults.params = {
  api_key: API_KEY,
  // media_type: 'movie',
  // time_window: 'day',
};

export const getTrending = async () => {
  const res = await axios.get(`/trending/movie/day`);
  //console.log(res.data.results);
  return res.data.results;
};