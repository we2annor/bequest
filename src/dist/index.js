"use strict";
exports.__esModule = true;
var react_dom_1 = require("react-dom");
var react_redux_1 = require("react-redux");
var app_component_1 = require("./app-component");
var store_1 = require("./store");
require("./assets/css/styles.css");
var root = document.querySelector("#root");
react_dom_1["default"].render(React.createElement(react_redux_1.Provider, { store: store_1.store },
    React.createElement(app_component_1.App, null)), root);
