"use strict";
exports.__esModule = true;
var address_component_1 = require("./address-component");
var AddressList = function (_a) {
    var addresses = _a.addresses;
    var addressList = addresses.map(function (address, index) { return (React.createElement(address_component_1["default"], { key: index, address: address })); });
    return (React.createElement("div", null,
        React.createElement("h3", null, "Address Book"),
        addressList));
};
exports["default"] = AddressList;
