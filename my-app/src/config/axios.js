import axios from "axios";

export const api = axios.create({
  baseURL: "https://grainedecitoyenmontgesnois.fr/api",
  headers: { "X-Custom-Header": "Site GDC" },
  timeout: 2000,
});
