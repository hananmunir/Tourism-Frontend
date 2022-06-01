import axios from "axios";

// create an axios instance
const API = axios.create({
  baseURL: "http://localhost:8800/api/",
});

// request interceptor
const token = localStorage.getItem("TourismSecurityToken");
const config = {
  headers: {
    Authorization: `${token}`,
  },
};

// API routes
export const payment = (data) => API.post("/payment", data, config);
export const signUp = (user) => API.post("/users/signup", { ...user });
export const fetchPackages = (pages = 1) => API.get("/packages?pages=" + pages);
export const fetchPackage = (id) => API.get("/packages/" + id);
export const signIn = (email, password) =>
  API.post("/users/signin", { email, password });
