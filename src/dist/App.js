"use strict";
exports.__esModule = true;
exports.App = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_document_title_1 = require("react-document-title");
var AddressBook_1 = require("./pages/AddressBook");
var Layout_1 = require("./components/layout/Layout");
var history_1 = require("./components/history");
exports.App = function () {
    return (react_1["default"].createElement(react_document_title_1["default"], { title: 'Home - Bequest' },
        react_1["default"].createElement(react_router_dom_1.Router, { history: history_1["default"] },
            react_1["default"].createElement(Layout_1["default"], { "data-testid": 'app' },
                react_1["default"].createElement(react_router_dom_1.Route, { path: '/', exact: true, component: AddressBook_1["default"] })))));
};
