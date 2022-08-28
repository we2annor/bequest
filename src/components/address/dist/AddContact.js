"use strict";
exports.__esModule = true;
var AddressForm_1 = require("../AddressForm");
var AddContact = function (_a) {
    var postcode = _a.postcode, selectedAddress = _a.selectedAddress, hideAddAddressManuallyForms = _a.hideAddAddressManuallyForms;
    return (React.createElement(AddressForm_1["default"], { postcode: postcode, selectedAddress: selectedAddress, hideAddAddressManuallyForms: hideAddAddressManuallyForms }));
};
exports["default"] = AddContact;
