import axios from 'axios';

const API_KEY = '0e6be9450c36f0b625bf319ea0ca8dcd';
const API_URL = 'http://api.weatherstack.com/current';

export const getWeather = (location) => {
  return axios.get(`${API_URL}?access_key=${API_KEY}&query=${location}`);
};
