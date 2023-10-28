import axios from "axios";

export const BASE_URL = "https://api.openai.com/v1/chat/completions";
export const API_KEY = "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";

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
