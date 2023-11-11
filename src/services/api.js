import * as axiosOriginal from 'axios';

// export const baseURL= process.env.REACT_APP_baseURL
// export const baseURL= 'http://localhost:8000/'
export const baseURL= 'https://e-metric-api-revamp-production.up.railway.app/'
// export const baseURL= 'https://emetric-suite-revamp.herokuapp.com/'
const axios = axiosOriginal.create({
    baseURL,

})

export default axios;