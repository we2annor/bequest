"use strict";
exports.__esModule = true;
var Address = function (_a) {
    var address = _a.address;
    var houseFlatNumber = address.houseFlatNumber, streetName = address.streetName, city = address.city, postCode = address.postCode, county = address.county;
    return (React.createElement("div", { className: 'address' },
        houseFlatNumber ? React.createElement("p", null,
            "Flat Number : ",
            houseFlatNumber) : null,
        streetName ? React.createElement("p", null,
            "Address line 1: ",
            streetName,
            " ") : null,
        city ? React.createElement("p", null,
            "City :",
            city) : null,
        postCode ? React.createElement("p", null,
            "Post code : ",
            postCode,
            " ") : null,
        county ? React.createElement("p", null,
            "County : ",
            county) : null));
};
exports["default"] = Address;
