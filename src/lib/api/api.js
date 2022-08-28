import axios from "axios";

const API_KEY = "5zJVhiQvf0WlXAkFrluDqA35086";
const serverUrl = "http://localhost:3001";

export const requestAddress = async (postCode, houseNumber) => {
  const response = await axios(
    `https://api.getAddress.io/find/${postCode}/${houseNumber}?api-key=${API_KEY}`
  );
  const data = await response.data;

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch address");
  }
  return data.addresses;
};

export const addContact = async (contact) => {
  const response = await axios.post(`${serverUrl}/addressBook`, contact);
  if (!response.ok) {
    throw new Error(
      response.message || "Couldn't add contact to the address book"
    );
  }
  return null;
};

export const findAddress = axios.create({
  baseURL: "https://api.getAddress.io/",
});

export const addressBook = axios.create({
  baseURL: "http://localhost:3001",
});

export const countryNames = axios.create({
  baseURL: "https://restcountries.eu/rest/v2/",
});
