"use strict";
exports.__esModule = true;
exports.countryNames = exports.addressBook = exports.findAddress = exports.API_KEY = void 0;
var axios_1 = require("axios");
exports.API_KEY = "cCzwYuxt30OW7mkyB6DZeQ29886";
exports.findAddress = axios_1["default"].create({
    baseURL: "https://api.getAddress.io/"
});
exports.addressBook = axios_1["default"].create({
    baseURL: "http://localhost:3001"
});
exports.countryNames = axios_1["default"].create({
    baseURL: "https://restcountries.eu/rest/v2/"
});
