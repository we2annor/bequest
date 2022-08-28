"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.countryNames = exports.addressBook = exports.findAddress = exports.addContact = exports.requestAddress = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var API_KEY = "5zJVhiQvf0WlXAkFrluDqA35086";
var serverUrl = "http://localhost:3001";

var requestAddress = function requestAddress(postCode, houseNumber) {
  var response, data;
  return regeneratorRuntime.async(function requestAddress$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _axios["default"])("https://api.getAddress.io/find/".concat(postCode, "/").concat(houseNumber, "?api-key=").concat(API_KEY)));

        case 2:
          response = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(response.data);

        case 5:
          data = _context.sent;

          if (response.ok) {
            _context.next = 8;
            break;
          }

          throw new Error(data.message || "Could not fetch address");

        case 8:
          return _context.abrupt("return", data.addresses);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.requestAddress = requestAddress;

var addContact = function addContact(contact) {
  var response;
  return regeneratorRuntime.async(function addContact$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].post("".concat(serverUrl, "/addressBook"), contact));

        case 2:
          response = _context2.sent;

          if (response.ok) {
            _context2.next = 5;
            break;
          }

          throw new Error(response.message || "Couldn't add contact to the address book");

        case 5:
          return _context2.abrupt("return", null);

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.addContact = addContact;

var findAddress = _axios["default"].create({
  baseURL: "https://api.getAddress.io/"
});

exports.findAddress = findAddress;

var addressBook = _axios["default"].create({
  baseURL: "http://localhost:3001"
});

exports.addressBook = addressBook;

var countryNames = _axios["default"].create({
  baseURL: "https://restcountries.eu/rest/v2/"
});

exports.countryNames = countryNames;