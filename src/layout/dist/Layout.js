"use strict";
exports.__esModule = true;
exports.Layout = void 0;
var navigationComponent_1 = require("./navigation/navigationComponent");
exports.Layout = function (_a) {
    var children = _a.children;
    return (React.createElement(React.Fragment, null,
        React.createElement(navigationComponent_1.Navigation, null),
        React.createElement("main", { className: 'layout-main' }, children)));
};
