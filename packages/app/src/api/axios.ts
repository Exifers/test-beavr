import axios from "axios";
import { Data } from "utils";

axios.defaults.baseURL = 'http://localhost:3000'

axios.interceptors.response.use(response => {
  Data.parseDates(response.data)
  return response
})