import axios from 'axios'
import { baseURL } from './config'

const requester = async (method, endpoint) => {
  const config = {
    method,
    baseURL,
    url: endpoint,
  }

  return axios.request(config)
    .then(response => [null, response])
    .catch(error => [error])
}

export default requester
