import axios from 'axios';

axios.defaults.baseURL = 'https://api.readhub.me/';

class Api {
  static get = (url, params) => axios.get(url, { params });

  static getTopicList = params => Api.get('topic', params)
}

export default Api;
