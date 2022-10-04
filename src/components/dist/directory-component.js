"use strict";
exports.__esModule = true;
var address_component_1 = require("./address/address-component");
var constants_1 = require("../constants/constants");
var DirectoryComponent = function (_a) {
    var addresses = _a.addresses;
    var currentAddresses = addresses ? (addresses.map(function (address, index) { return React.createElement(address_component_1["default"], { key: index, address: address }); })) : (React.createElement("div", null, constants_1.emptyAddressList));
    return (React.createElement("div", { className: 'address-list', "data-test-id": 'addrress-list' },
        React.createElement("h3", null, "Directory"),
        currentAddresses));
};
exports["default"] = DirectoryComponent;
