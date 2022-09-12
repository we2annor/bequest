"use strict";
exports.__esModule = true;
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var address_1 = require("../features/address/address");
exports.store = toolkit_1.configureStore({
    reducer: { address: address_1["default"] }
});
