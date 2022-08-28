"use strict";
exports.__esModule = true;
var react_1 = require("react");
var LookedUpAddressList = function (_a) {
    var suggestionResults = _a.suggestionResults, getAddress = _a.getAddress;
    var _b = react_1.useState(true), showSuggestions = _b[0], setShowSuggestions = _b[1];
    var onAddressSelect = function (e) {
        var textContent = e.currentTarget.textContent;
        textContent ? getAddress(textContent) : getAddress("");
        setShowSuggestions(false);
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null, showSuggestions && suggestionResults && (react_1["default"].createElement("div", { className: 'suggestions' }, suggestionResults.map(function (suggestionResult) { return (react_1["default"].createElement("div", { className: 'address-select', id: suggestionResult.id, onClick: function (e) { return onAddressSelect(e); }, key: suggestionResult.id }, suggestionResult)); })))));
};
exports["default"] = LookedUpAddressList;
