import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8800/api/",
});
axios.defaults.headers.common["x-auth-token"] =
  localStorage.getItem("webtoken");
const token = localStorage.getItem("webtoken");
// {
//     headers: {
//       Authorization: `${token}`,
//     },
//   }

export const signUp = (user) => API.post("/users/signup", { ...user });
export const fetchPackages = () => API.get("/packages");
export const signIn = (email, password) =>
  API.post("/users/signin", email, password);
