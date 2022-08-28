"use strict";
exports.__esModule = true;
var Address_1 = require("./Address");
var AddressList = function (_a) {
    var addresses = _a.addresses;
    return addresses.map(function (address, index) { return (React.createElement(Address_1["default"], { key: index, address: address })); });
};
exports["default"] = AddressList;
