import Axios from "axios";

const axios = Axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 100000000,
});

export default axios;
