"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var SearchAddress_1 = require("./SearchAddress/SearchAddress");
var AddressForm_1 = require("./AddressForm");
var App = function () {
    var getSearchTerm = function (term) {
        return term;
    };
    var props = {
        selectedAddress: "",
        postcode: "",
        addContact: function (formValues) { return formValues; },
        hideAddAddressManuallyForms: function () { return "yes"; }
    };
    return (react_1["default"].createElement("div", { className: 'container' },
        react_1["default"].createElement(SearchAddress_1["default"], { getSearchTerm: getSearchTerm }),
        react_1["default"].createElement(AddressForm_1["default"], __assign({}, props))));
};
exports["default"] = App;
