"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Error = function (_a) {
    var errors = _a.errors;
    var getErrorMessages = function () {
        if (typeof errors === "object") {
            var messages = Object.values(errors);
            return messages.map(function (message, index) { return react_1["default"].createElement("li", { key: index }, message); });
        }
        else {
            return react_1["default"].createElement("li", null,
                " ",
                errors);
        }
    };
    return (react_1["default"].createElement("ul", { "data-testid": 'error', className: 'error_messages' },
        react_1["default"].createElement("h3", null, "Oops! Error Occured!"),
        getErrorMessages()));
};
exports["default"] = Error;
