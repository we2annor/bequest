"use strict";
exports.__esModule = true;
var react_1 = require("react");
var SearchAddress = function (_a) {
    var getSearchTerm = _a.getSearchTerm;
    var _b = react_1.useState(""), term = _b[0], setTerm = _b[1];
    var handleOnChange = function (e) {
        setTerm(e.target.value);
        getSearchTerm(term);
    };
    return (react_1["default"].createElement("div", { "data-testid": 'address-search', className: 'addresses__search-box' },
        react_1["default"].createElement("input", { className: 'input input__field', type: 'text', placeholder: 'Search contact', onChange: function (e) { return handleOnChange(e); } })));
};
exports["default"] = SearchAddress;
