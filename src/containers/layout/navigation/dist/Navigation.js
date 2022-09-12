"use strict";
exports.__esModule = true;
exports.Navigation = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
exports.Navigation = function () {
    return (react_1["default"].createElement("header", { "data-testid": 'navigation', className: 'header' },
        react_1["default"].createElement("div", { className: 'header-logo' },
            react_1["default"].createElement(react_router_dom_1.Link, { to: '/' }, "Address Search")),
        react_1["default"].createElement("div", { className: 'container' },
            react_1["default"].createElement("nav", { className: 'header-nav-bar' },
                react_1["default"].createElement("ul", null,
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement(react_router_dom_1.NavLink, { to: '/' }, "Address book")),
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement(react_router_dom_1.NavLink, { to: '/contacts/new' }, "Add Address")))))));
};
