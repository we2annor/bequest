"use strict";
exports.__esModule = true;
exports.AddressBook = void 0;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var addressList_component_1 = require("../components/addressList-component");
exports.AddressBook = function () {
    var _a = react_redux_1.useSelector(function (store) { return store.address; }), addresses = _a.addresses, loaded = _a.loaded;
    console.log("loaded", loaded);
    return react_1["default"].createElement(addressList_component_1["default"], { addresses: addresses });
};
