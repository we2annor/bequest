"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@testing-library/react");
var react_router_dom_1 = require("react-router-dom");
var history_1 = require("../../../components/history");
var Navigation_1 = require("../Navigation");
afterEach(react_2.cleanup);
describe("When Navigation Mounts", function () {
    test("Should render successfully", function () {
        var getByTestId = react_2.render(react_1["default"].createElement(react_router_dom_1.Router, { history: history_1["default"] },
            react_1["default"].createElement(Navigation_1.Navigation, null))).getByTestId;
        expect(getByTestId("navigation")).toBeTruthy();
    });
});
