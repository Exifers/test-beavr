import axios from "axios";
import { Data } from "utils";
import { Config } from "../utils/Config.ts";

axios.defaults.baseURL = Config.getApiBaseUrl();

axios.interceptors.response.use(response => {
  Data.parseDates(response.data)
  return response
})