"use strict";
exports.__esModule = true;
var LookUpContact = function (_a) {
    var setPostCode = _a.setPostCode, error = _a.error, setHouseNumber = _a.setHouseNumber;
    return (React.createElement("form", null,
        React.createElement("div", null,
            React.createElement("label", { htmlFor: 'postCode' }, "PostCode"),
            React.createElement("input", { className: "postcodd " + error, type: 'text', id: 'postCode', name: 'postCode', "aria-label": 'postCode', "aria-required": true, placeholder: 'postCode', "aria-placeholder": 'postCode', autoComplete: 'off', onChange: function (e) { return setPostCode(e.target.value); }, "aria-describedby": 'postCode_error' })),
        React.createElement("div", null,
            React.createElement("label", { htmlFor: 'houseNumber' }, "House Number or Name"),
            React.createElement("input", { className: 'houseNumber', type: 'text', id: 'houseNumber', "aria-label": 'houseNumber', title: 'houseNumber', "aria-required": true, placeholder: 'house number', "aria-placeholder": 'house number', onChange: function (e) { return setHouseNumber(parseInt(e.target.value)); } }))));
};
exports["default"] = LookUpContact;
