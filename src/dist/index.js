"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
var redux_thunk_1 = require("redux-thunk");
var reducers_1 = require("./reducers");
var App_1 = require("./App/App");
require("./assets/sass/main.scss");
var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux_1.compose;
var store = redux_1.createStore(reducers_1.rootReducer, composeEnhancers(redux_1.applyMiddleware(redux_thunk_1["default"])));
var root = document.querySelector("#root");
react_dom_1["default"].render(react_1["default"].createElement(react_redux_1.Provider, { store: store },
    react_1["default"].createElement(App_1["default"], null)), root);
