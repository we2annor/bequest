import axios from "axios";

export const findAddress = axios.create({
  baseURL: "https://api.getAddress.io/",
});

export const addressBook = axios.create({
  baseURL: "http://localhost:3001",
});
