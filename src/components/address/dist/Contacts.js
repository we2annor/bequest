"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var AddressForm_1 = require("../AddressForm");
var Error_1 = require("../Error");
var LookedUpAddressList_1 = require("../lookedUpAddressList/LookedUpAddressList");
var AddContact = function (_a) {
    var addContact = _a.addContact;
    var _b = react_1.useState(""), postCode = _b[0], setPostCode = _b[1];
    var _c = react_1.useState(), houseNumber = _c[0], setHouseNumber = _c[1];
    var _d = react_1.useState(""), selectedAddress = _d[0], setSelectedAddress = _d[1];
    var _e = react_1.useState([]), addressSuggestions = _e[0], setAddressSuggestions = _e[1];
    var _f = react_1.useState(""), findError = _f[0], setFindError = _f[1];
    var _g = react_1.useState(""), fetchError = _g[0], setFetchError = _g[1];
    var _h = react_1.useState(false), showForms = _h[0], setShowForms = _h[1];
    var KeyedCharacters = 6;
    var getAddress = function (address) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            //const response = await findAddress.get(`get/${id}?api-key=${API_KEY}`);
            setSelectedAddress(address);
            return [2 /*return*/];
        });
    }); };
    react_1.useEffect(function () {
        var fetchAddressByPostCode = function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        }); };
        if (postCode) {
            fetchAddressByPostCode();
            setFindError("");
        }
    }, [postCode]);
    var onFindButtonClicked = function (e) {
        e.preventDefault();
        postCode && houseNumber ? findByPostCodeAndHouseNumber() : findByPostCode();
    };
    var findByPostCode = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, findAddress.get("find/" + postCode + "?api-key=" + API_KEY)];
                case 1:
                    response = _a.sent();
                    console.log(response.data.addresses);
                    console.log(formatAddress(response.data.addresses));
                    setAddressSuggestions(response.data.addresses);
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.log("you entered wrong post code", err_1);
                    setFetchError(err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var findByPostCodeAndHouseNumber = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, address, formValues, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, findAddress.get("find/" + postCode + "/" + houseNumber + "?api-key=" + API_KEY)];
                case 1:
                    response = _a.sent();
                    address = formatAddress(response.data.addresses)[0];
                    console.log("formated address", address);
                    formValues = {
                        line1: address[0].toString(),
                        line2: address[1].toString(),
                        line3: address[2].toString(),
                        locality: address[3].toString(),
                        townCity: address[4].toString(),
                        county: address[5].toString(),
                        country: address[6].toString(),
                        postCode: postCode,
                        id: 0
                    };
                    addContact(formValues);
                    return [3 /*break*/, 3];
                case 2:
                    err_2 = _a.sent();
                    console.log("house number error", err_2);
                    react_1["default"].createElement(Error_1["default"], { errors: err_2 });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    if (findError || fetchError) {
        return react_1["default"].createElement(Error_1["default"], { errors: "wrong post code" });
    }
    var formatAddress = function (newAddress) {
        var formatAdd = newAddress.map(function (address) {
            return address.split(",");
        });
        return formatAdd;
    };
    var hideAddAddressManuallyForms = function () {
        showForms ? setShowForms(false) : setShowForms(true);
    };
    var onAddManuallyButtonClicked = function (e) {
        e.preventDefault();
        showForms ? setShowForms(false) : setShowForms(true);
    };
    var error = false;
    return (react_1["default"].createElement("div", { className: 'find-address' },
        react_1["default"].createElement("div", { className: 'find-address__form-bg' },
            react_1["default"].createElement("div", { className: 'find-address__form-container' },
                react_1["default"].createElement("form", { className: 'find-address__form', "aria-label": 'find-address-form', title: 'find-address-form' },
                    react_1["default"].createElement("div", { className: 'find-address__form--input-field' },
                        react_1["default"].createElement("div", null, "Address look up"),
                        react_1["default"].createElement("button", { onClick: function (e) { return onAddManuallyButtonClicked(e); }, "aria-label": 'add-address-manually', title: 'add-address-manually' }, "add address"),
                        react_1["default"].createElement("button", { className: 'find-address__find-btn btn', type: 'submit', onClick: function (e) { return onFindButtonClicked(e); }, "aria-label": 'find-address-button', title: 'find-address-button' }, "Search")),
                    postCode.length > KeyedCharacters && (react_1["default"].createElement(LookedUpAddressList_1["default"], { suggestionResults: addressSuggestions, getAddress: getAddress }))))),
        showForms && (react_1["default"].createElement(AddressForm_1["default"], { postcode: postCode, selectedAddress: selectedAddress, hideAddAddressManuallyForms: hideAddAddressManuallyForms }))));
};
exports["default"] = AddContact;
