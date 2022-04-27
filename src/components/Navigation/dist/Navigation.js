"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Navigation = function () {
    return (react_1["default"].createElement("div", { "data-testid": 'navigation', className: 'header' },
        react_1["default"].createElement("div", { className: 'container' },
            react_1["default"].createElement(react_router_dom_1.Link, { to: '/' }, "Addresses"),
            react_1["default"].createElement(react_router_dom_1.Link, { to: '/contacts/new' }, "Add Address"))));
};
exports["default"] = Navigation;
