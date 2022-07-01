import axios from "axios";

export const api = axios.create({
  baseURL: "https://grainedecitoyenmontgesnois.fr/api" /*"https://localhost:3030/api",*/,
  headers: { "X-Custom-Header": "Site GDC" },
  timeout: 2000,
});
