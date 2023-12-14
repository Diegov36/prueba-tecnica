import axios from 'axios';
/**
 * GET and POST functions to comunicate with the JSON-server
 */

const URL = 'http://localhost:3000/actions';

const getAll = () => {
  const req = axios.get(URL);
  return req.then(response => response.data);
};

const addAction = (action) =>{
  axios.post(URL, action).then(response => {
    console.log(response);
  });
};

export default {getAll, addAction};
    