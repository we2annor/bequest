"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@testing-library/react");
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
var redux_thunk_1 = require("redux-thunk");
var react_test_renderer_1 = require("react-test-renderer");
var reducers_1 = require("../../../reducers");
var address_component_1 = require("../address-component");
afterEach(react_2.cleanup);
describe("When AddContact Component Mounts", function () {
    test("should Mount successfully", function () {
        var store = redux_1.createStore(reducers_1.rootReducer, redux_1.applyMiddleware(redux_thunk_1["default"]));
        react_2.render(react_1["default"].createElement(react_redux_1.Provider, { store: store },
            react_1["default"].createElement(address_component_1["default"], null)));
    });
    test("Maches snapshop", function () {
        var store = redux_1.createStore(reducers_1.rootReducer, redux_1.applyMiddleware(redux_thunk_1["default"]));
        var tree = react_test_renderer_1["default"].create(react_1["default"].createElement(react_redux_1.Provider, { store: store },
            react_1["default"].createElement(address_component_1["default"], null)));
        expect(tree).toMatchSnapshot();
    });
});
