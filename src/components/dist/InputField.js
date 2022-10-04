"use strict";
exports.__esModule = true;
var react_1 = require("react");
var InputField = function (_a) {
    var className = _a.className, onChange = _a.onChange, label = _a.label, id = _a.id, value = _a.value, placeholder = _a.placeholder, autoComplete = _a.autoComplete, required = _a.required, onFocus = _a.onFocus, onBlur = _a.onBlur, ref = _a.ref;
    return (react_1["default"].createElement("div", { className: "input-field " + className },
        react_1["default"].createElement("label", { htmlFor: id, "aria-label": id },
            label,
            required && react_1["default"].createElement("span", { className: 'required' }, "required field *")),
        react_1["default"].createElement("input", { type: 'text', id: id, name: id, value: value, "aria-label": label, autoComplete: autoComplete, placeholder: placeholder, onChange: onChange, "aria-required": required, required: required, onFocus: onFocus, onBlur: onBlur, ref: ref })));
};
exports["default"] = InputField;
