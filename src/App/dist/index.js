"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_document_title_1 = require("react-document-title");
var Navigation_1 = require("../Navigation");
var Addresses_1 = require("../Addresses");
var AddContact_1 = require("../AddContact");
var ShowContact_1 = require("../ShowContact");
var history_1 = require("../history");
var App = function () {
    return (react_1["default"].createElement(react_document_title_1["default"], { title: 'Home - Bequest' },
        react_1["default"].createElement("div", { "data-testid": 'app', className: 'container' },
            react_1["default"].createElement(react_router_dom_1.Router, { history: history_1["default"] },
                react_1["default"].createElement(Navigation_1["default"], null),
                react_1["default"].createElement(react_router_dom_1.Route, { path: '/', exact: true, component: Addresses_1["default"] }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: '/contacts/new', component: AddContact_1["default"] }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: '/contact/:id', component: ShowContact_1["default"] })))));
};
exports["default"] = App;
