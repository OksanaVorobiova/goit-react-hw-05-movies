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
    const res = await axios.get(`/movie/${id}/credits`);
    return res.data.cast;
  } catch (error) {
    console.log(error);
  }
};

export const getDetails = async id => {
  try {
    const res = await axios.get(`/movie/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getFiltered = async query => {
  const config = {
    params: {
      query: query,
      page: 1,
    },
  };

  try {
    const res = await axios.get(`/search/movie`, config);
    return res.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getTrending = async () => {
  const res = await axios.get(`/trending/movie/day`);
  //console.log(res.data.results);
  return res.data.results;
};

export const getReviews = async id => {
  try {
    const res = await axios.get(`/movie/${id}/reviews`);
    console.log(res);
    return res.data.results;
  } catch (error) {
    console.log(error);
  }
};
