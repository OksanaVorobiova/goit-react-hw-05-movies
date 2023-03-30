import axios from 'axios';

const API_KEY = `0be17033588433ae451a609394607ef8`;
const ENDPOINT = `https://api.themoviedb.org/3`;

axios.defaults.baseURL = ENDPOINT;
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};

export const getCast = async id => {
  try {
    const res = await axios.get(`${ENDPOINT}/movie/${id}/credits`);
    return res.data.cast;
  } catch (error) {
    console.log(error);
  }
};
