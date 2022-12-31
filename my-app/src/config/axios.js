import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: { "X-Custom-Header": "Site GDC" },
  timeout: 2000,
});
