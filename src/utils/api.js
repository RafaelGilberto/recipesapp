import axios from "axios";
/*
const apiURLs = {
  development: "http://localhost:1337/api",
  production: "https://recipesappapi.onrender.com/api",
};

const api = axios.create({
  baseURL: apiURLs[process.env.NODE_ENV],
});
*/
const api = axios.create({
  baseURL: "https://recipesappapi.onrender.com/api",
});

api.interceptors.request.use((config) => {
  config.headers = {
    Authorization: `Bearer 7a3068eb234264ae2984af00f0d5a634d33639e502a199d0e57886679d902e1466c6200fc273466e0590d5e2aaea405b42960d78e6b551a9d2bf8d1e47bac369556012a4b1fd2fde749055ed6fe77c28c937b0d94fc967308ea494985182037f755c49e22f77538293ddbefaf407ce72b4cbae25884ce161d9f19e5deeb51f59`,
  };
  return config;
});

export { api };
