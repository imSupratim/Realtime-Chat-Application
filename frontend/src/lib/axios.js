import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api-chat-app-n5rw.onrender.com/api",
  withCredentials: true,
});
