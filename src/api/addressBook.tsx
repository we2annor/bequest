import axios from "axios";

export const API_KEY = "cCzwYuxt30OW7mkyB6DZeQ29886";
export const findAddress = axios.create({
  baseURL: "https://api.getAddress.io/",
});

export const addressBook = axios.create({
  baseURL: "http://localhost:3001",
});

export const countryNames = axios.create({
  baseURL: "https://restcountries.eu/rest/v2/",
});
