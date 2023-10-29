import axios from "axios";
import { BASE_URL, API_KEY } from "../consts/api/api";

export const makeRequest = ({
  url = BASE_URL,
  method = "get",
  data = {},
  headers = {
    "Content-Type": "application/json;charset=utf-8",
    Authorization: `Bearer ${API_KEY}`,
  },
}) => {
  return axios({
    url,
    method,
    data,
    headers,
  });
};
