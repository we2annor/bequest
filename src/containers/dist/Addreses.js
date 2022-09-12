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
var react_document_title_1 = require("react-document-title");
var react_router_dom_1 = require("react-router-dom");
var AddressSearchField_1 = require("../components/addressSearchField/AddressSearchField");
var index_1 = require("../actions/index");
var Addresses = function (_a) {
    var _b = _a.addressBook, addressBook = _b === void 0 ? [] : _b;
    var _c = react_1.useState(""), searchedTerm = _c[0], setSearchedTerm = _c[1];
    react_1.useEffect(function () {
        index_1.fetchContacts();
    }, []);
    var addressExist = function (address) {
        if (!address) {
            return address;
        }
    };
    var filteredAddressBook = addressBook.reduce(function (addressList, address) {
        var addressContent = __assign({}, address);
        console.log("address content", addressContent);
        var newAddress = address.line1.toLowerCase() + address.postCode.toLowerCase();
        if (newAddress.indexOf(searchedTerm) !== -1) {
            addressList.push(address);
        }
        return addressList;
    }, []);
    var addressContent;
    if (addressBook && addressBook.length > 0) {
        addressContent = filteredAddressBook.map(function (address) { return (react_1["default"].createElement("section", null,
            react_1["default"].createElement("h3", { className: 'item item__heading' }, "Addresses"),
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/contact/" + address.id, key: address.id },
                react_1["default"].createElement("div", { className: 'addresses__list' },
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("span", null, "Address :"),
                        address.line1,
                        address.line2,
                        " ",
                        address.line3),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("span", null, "Locality:"),
                        address.locality),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("span", null, "Town/City :"),
                        address.townCity),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("span", null, "County :"),
                        address.county),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("span", null, "Post code :"),
                        address.postCode),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("span", null, "Country :"),
                        address.country))))); });
    }
    else {
        addressContent = (react_1["default"].createElement("section", { className: 'centered' },
            react_1["default"].createElement("h3", null, "No addresses yet!"),
            react_1["default"].createElement("button", null, "Add an address")));
    }
    var getSearchTerm = function (term) {
        setSearchedTerm(term);
    };
    return (react_1["default"].createElement(react_document_title_1["default"], { title: "Address Book" },
        react_1["default"].createElement("main", { className: 'addresses' },
            addressBook.length > 0 && (react_1["default"].createElement(AddressSearchField_1["default"], { getSearchTerm: getSearchTerm })),
            addressContent)));
};
exports["default"] = Addresses;
