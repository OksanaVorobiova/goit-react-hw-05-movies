import axios from 'axios';

const API_KEY = `0be17033588433ae451a609394607ef8`;
const ENDPOINT = `https://api.themoviedb.org/3/movie`;

axios.defaults.baseURL = ENDPOINT;
axios.defaults.params = {
  api_key: API_KEY,
};

export const getDetails = async id => {
  try {
    const res = await axios.get(`${ENDPOINT}/${id}?`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
