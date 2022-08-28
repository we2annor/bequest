"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var addressBook = [{
  houseFlatNumber: 5,
  streetName: "St petersberg",
  city: "Southwark",
  postCode: "Nw3 5gy",
  county: "Bermondsey"
}, {
  houseFlatNumber: 9,
  streetName: "nine elms",
  city: "Battersea",
  postCode: "Sw18 5nt",
  county: "Wansworth"
}, {
  houseFlatNumber: 49,
  streetName: "Dry way road",
  city: "Elephant and Castle",
  postCode: "Sw19 4au",
  county: "West minster"
}];
var initialState = {
  addresses: addressBook
};
var addressSlice = (0, _toolkit.createSlice)({
  name: "address",
  initialState: initialState,
  reducers: {}
});
console.log(addressSlice);
var _default = addressSlice.reducer;
exports["default"] = _default;