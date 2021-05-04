import { API_MOCK } from "../constants/const";

export const fetchData = (url = API_MOCK, data, method = "POST") => {
  return fetch(API_MOCK).then((response) => response.json());
};
export const postData = (url = API_MOCK, data = {}, method = "POST") => {
  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  };
  return fetch(url, options).then((response) => response.json());
};
