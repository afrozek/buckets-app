import axios from 'axios';
import * as log from 'loglevel';

const axiosInstance =   axios.create({
    baseURL: "http://localhost:3200/api"
})

axiosInstance.interceptors.response.use( response => {

    log.debug("axios interceptor: response:", response);

    // send raw data object, 
    // instead of just axios response
    return response.data;
  }, function (error) {
    log.debug("axios interceptor: error.response:", error.response);

    // send raw error object, 
    // instead of just axios response
    return Promise.reject(error.response);
  });

export default axiosInstance;