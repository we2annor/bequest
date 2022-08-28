"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@testing-library/react");
var LookedUpAddressList_1 = require("../LookedUpAddressList");
afterEach(react_2.cleanup);
describe("When AddressSuggestion Mounts", function () {
    test("Should Render successfully with default props", function () {
        react_2.render(react_1["default"].createElement(LookedUpAddressList_1["default"], { suggestionResults: [], getAddressId: function () { } }));
    });
});
