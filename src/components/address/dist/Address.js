"use strict";
exports.__esModule = true;
var Address = function (_a) {
    var address = _a.address;
    var houseFlatNumber = address.houseFlatNumber, streetName = address.streetName, city = address.city, postCode = address.postCode, county = address.county;
    return (React.createElement("div", { className: 'address' },
        React.createElement("p", null, houseFlatNumber),
        React.createElement("p", null,
            streetName,
            " "),
        React.createElement("p", null, city),
        React.createElement("p", null,
            postCode,
            " "),
        React.createElement("h3", null, county)));
};
exports["default"] = Address;
