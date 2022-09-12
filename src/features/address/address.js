import { createSlice } from "@reduxjs/toolkit";

const addressBook = [
  {
    houseFlatNumber: 5,
    streetName: "St petersberg",
    city: "Southwark",
    postCode: "Nw3 5gy",
    county: "Bermondsey",
  },
  {
    houseFlatNumber: 9,
    streetName: "nine elms",
    city: "Battersea",
    postCode: "Sw18 5nt",
    county: "Wansworth",
  },
  {
    houseFlatNumber: 49,
    streetName: "Dry way road",
    city: "Elephant and Castle",
    postCode: "Sw19 4au",
    county: "West minster",
  },
];
const initialState = {
  addresses: addressBook,
  loaded: true,
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {},
});

export default addressSlice.reducer;
