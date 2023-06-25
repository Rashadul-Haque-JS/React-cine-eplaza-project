import axios from 'axios';

// Create a new Axios instance
const api = axios.create({
  baseURL: 'http://www.omdbapi.com/',
});


api.interceptors.response.use(
  (response) => {
    // Modify headers to enable CORS
    response.headers['Access-Control-Allow-Origin'] = '*';
    response.headers['Access-Control-Allow-Methods'] = 'GET,OPTIONS';
    response.headers['Access-Control-Allow-Headers'] =
      'Origin, X-Requested-With, Content-Type, Accept';

    return response;
  },
  (error) => {

    return Promise.reject(error);
  }
);

export default api;
