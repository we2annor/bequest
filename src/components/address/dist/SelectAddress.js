"use strict";
exports.__esModule = true;
var SelectAddress = function (_a) {
    var postCode = _a.postCode;
    var setPostCode = function (e) {
        console.log(postCode);
    };
    return (React.createElement("form", null,
        React.createElement("div", null,
            React.createElement("label", { htmlFor: 'postCode' }, "PostCode"),
            React.createElement("input", { className: "postcodd " + error, type: 'text', id: 'postCode', name: 'postCode', "aria-label": 'postCode', "aria-required": true, placeholder: 'postCode', "aria-placeholder": 'postCode', autoComplete: 'off', onChange: function (e) { return setPostCode(e.target.value); }, "aria-describedby": 'postCode_error' }))));
};
exports["default"] = SelectAddress;
