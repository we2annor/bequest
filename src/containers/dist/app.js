"use strict";
exports.__esModule = true;
exports.App = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_document_title_1 = require("react-document-title");
var addressBook_1 = require("./addressBook");
var addAddress_1 = require("../components/address/addAddress");
var layout_1 = require("./layout/layout");
var history_1 = require("../components/history");
exports.App = function () {
    return (react_1["default"].createElement(react_document_title_1["default"], { title: 'Home - Bequest' },
        react_1["default"].createElement(react_router_dom_1.Router, { history: history_1["default"] },
            react_1["default"].createElement(layout_1.Layout, { "data-testid": 'app-layout' },
                react_1["default"].createElement(react_router_dom_1.Route, { path: '/', exact: true, component: addressBook_1.AddressBook }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: '/new', component: addAddress_1.AddAddress })))));
};
