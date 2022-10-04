"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.AddAddress = void 0;
var InputField_1 = require("../InputField");
exports.AddAddress = function () {
    var fieldProps = {
        className: "this",
        label: "post Code",
        id: "1",
        value: "test",
        placeholder: "Post code",
        onChange: console.log("on post code change"),
        onFocus: console.log("on focus"),
        onBlur: console.log("on blur"),
        required: false,
        ref: "testing",
        autoComplete: "test"
    };
    return (React.createElement("div", null,
        React.createElement("h3", null, "Add new"),
        React.createElement("h4", null, "by post code"),
        React.createElement(InputField_1["default"], __assign({}, fieldProps)),
        React.createElement("button", null, "add Manually")));
};
