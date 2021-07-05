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
var react_autosuggest_1 = require("react-autosuggest");
var react_redux_1 = require("react-redux");
var actions_1 = require("../../actions");
var addressBook_1 = require("../../api/addressBook");
var InputField_1 = require("../InputField");
var Error_1 = require("../Error");
var AddressForm = function (_a) {
    var selectedAddress = _a.selectedAddress, postcode = _a.postcode, addContact = _a.addContact, hideAddAddressManuallyForms = _a.hideAddAddressManuallyForms;
    var _b = react_1.useState(""), line1 = _b[0], setLine1 = _b[1];
    var _c = react_1.useState(""), line2 = _c[0], setLine2 = _c[1];
    var _d = react_1.useState(""), line3 = _d[0], setLine3 = _d[1];
    var _e = react_1.useState(""), country = _e[0], setCountry = _e[1];
    var _f = react_1.useState(""), locality = _f[0], setLocality = _f[1];
    var _g = react_1.useState(""), townCity = _g[0], setTownCity = _g[1];
    var _h = react_1.useState(""), county = _h[0], setCounty = _h[1];
    var _j = react_1.useState([]), countrySuggestions = _j[0], setCountrySuggestions = _j[1];
    var _k = react_1.useState([]), suggestions = _k[0], setSuggestions = _k[1];
    var _l = react_1.useState(""), postCode = _l[0], setPostCode = _l[1];
    var _m = react_1.useState({}), validationErrors = _m[0], setvalidationErrors = _m[1];
    var _o = react_1.useState(false), line1Error = _o[0], setLine1Error = _o[1];
    var _p = react_1.useState(false), townCityError = _p[0], setTownCityError = _p[1];
    var _q = react_1.useState(false), countryError = _q[0], setCountryError = _q[1];
    var _r = react_1.useState(false), postCodeError = _r[0], setPostCodeError = _r[1];
    var line1Ref = react_1.useRef();
    react_1.useEffect(function () {
        var getSelectedAddress = function () {
            setPostCode(postcode);
        };
        getSelectedAddress();
    }, [selectedAddress, postcode]);
    react_1.useEffect(function () {
        var fetchcountrySuggestions = function () { return __awaiter(void 0, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!country) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, addressBook_1.countryNames.get("/name/" + country)];
                    case 2:
                        response = _a.sent();
                        setCountrySuggestions(response.data);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log("country suggestion Error", error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        fetchcountrySuggestions();
    }, [country]);
    var handleOnChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        switch (name) {
            case "line1":
                setLine1(value);
                return;
            case "line2":
                setLine2(value);
                return;
            case "line3":
                setLine3(value);
                return;
            case "country":
                setCountry(value);
                return;
            case "locality":
                setLocality(value);
                return;
            case "townCity":
                setTownCity(value);
                return;
            case "county":
                setCounty(value);
                return;
            case "postCode":
                setPostCode(value);
                return;
        }
    };
    var handleSubmit = function (e) {
        e.preventDefault();
        if (isAddressValidated()) {
            var formValues = {
                line1: line1,
                line2: line2,
                line3: line3,
                country: country,
                locality: locality,
                townCity: townCity,
                county: county,
                postCode: postCode,
                id: 0
            };
            addContact(formValues);
            clearForm();
            hideAddAddressManuallyForms();
        }
    };
    var handleOnBlure = function (e) {
        var id = e.target.id;
        if (id === "line1") {
            if (!line1 || line1.length < 3)
                setLine1Error(true);
            //line1Ref.current.focus();
        }
        if (id === "townCity") {
            if (!townCity || townCity.length < 3)
                setTownCityError(true);
        }
        if (id === "postCode") {
            if (!postCode || postCode.length < 3)
                setPostCodeError(true);
        }
        if (id === "country") {
            if (!country || country.length < 3)
                setCountryError(true);
        }
    };
    var clearForm = function () {
        setLine1("");
        setLine2("");
        setLine3("");
        setCountry("");
        setLocality("");
        setTownCity("");
        setCounty("");
        setPostCode("");
        setvalidationErrors({});
        setLine1Error(false);
        setCountryError(false);
        setTownCityError(false);
        setPostCodeError(false);
    };
    var isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    console.log("errors", validationErrors === null);
    var isAddressValidated = function () {
        var errors = Object();
        if (!line1) {
            errors.line1 = "line1 is a required field, it should not be empty!";
            setLine1Error(true);
        }
        if (!townCity) {
            errors.townCity =
                "Town / City is a required field, it should not be empty!";
            setTownCityError(true);
        }
        if (!country) {
            errors.country = "Country is a required field, it should not be empty!";
            setCountryError(true);
        }
        if (!postCode) {
            errors.postCode = "Post code is a required field it should not be empty!";
            setPostCodeError(true);
        }
        setvalidationErrors(errors);
        return isEmpty(errors);
    };
    var getSuggestions = function (value) {
        var inputValue = value.trim().toLowerCase();
        var inputLength = inputValue.length;
        return inputLength === 0
            ? []
            : countrySuggestions.filter(function (suggestion) {
                return suggestion.name.toLowerCase().slice(0, inputLength) === inputValue;
            });
    };
    var onSuggestionsFetchRequested = function (_a) {
        var value = _a.value;
        setSuggestions(getSuggestions(value));
    };
    var onSuggestionsClearedRequested = function () {
        setSuggestions([]);
    };
    var getSuggestionValue = function (suggestion) { return suggestion.name; };
    var renderSuggestion = function (suggestion) { return (react_1["default"].createElement("div", { className: 'countyAutoSuggestion' }, suggestion.name)); };
    var onChange = function (_event, _a) {
        var newValue = _a.newValue;
        setCountry(newValue);
    };
    var inputProps = {
        placeholder: "country",
        autoComplete: "abcd",
        name: "country",
        id: "country",
        value: country,
        onChange: onChange,
        require: "" + countryError,
        onFocus: function () { return (countryError ? setCountryError(false) : ""); },
        onBlur: function (e) { return handleOnBlure(e); }
    };
    return (react_1["default"].createElement("section", { "data-testid": 'contact-form', className: 'contact-form' },
        react_1["default"].createElement("div", { className: 'contact-form__form-container' },
            react_1["default"].createElement("h3", { title: 'add-address', "aria-label": 'add-address' }, "Add address manually:"),
            !isEmpty(validationErrors) && react_1["default"].createElement(Error_1["default"], { errors: validationErrors }),
            react_1["default"].createElement("form", { className: 'contact', onSubmit: function (e) { return handleSubmit(e); } },
                react_1["default"].createElement(InputField_1["default"], { className: " " + (line1Error ? "line1Error" : "") + " contact__full-name--first-name", label: 'Line 1', id: 'line1', value: line1, autoComplete: "off", placeholder: 'address line 1', onChange: function (e) { return handleOnChange(e); }, required: line1Error, onFocus: function () { return (line1Error ? setLine1Error(false) : ""); }, onBlur: function (e) { return handleOnBlure(e); }, ref: line1Ref }),
                react_1["default"].createElement(InputField_1["default"], { className: 'contact__full-name--line2', label: 'Line 2', id: 'line2', value: line2, autoComplete: 'abc', placeholder: 'line 2', onChange: function (e) { return handleOnChange(e); }, required: false, onFocus: function () { }, onBlur: function () { } }),
                react_1["default"].createElement(InputField_1["default"], { className: 'contact__address-line3', label: 'Line 3', id: 'line3', value: line3, autoComplete: 'abcd', placeholder: 'line 3', onChange: function (e) { return handleOnChange(e); }, required: false, onFocus: function () { }, onBlur: function () { } }),
                react_1["default"].createElement(InputField_1["default"], { className: 'contact__area--locality', label: 'Locality', id: 'locality', value: locality, autoComplete: 'off', placeholder: 'Locality', onChange: function (e) { return handleOnChange(e); }, required: false, onFocus: function () { }, onBlur: function () { } }),
                react_1["default"].createElement(InputField_1["default"], { className: (townCityError ? "townCityError" : "") + " contact__area--post-town", label: 'Town / City', id: 'townCity', value: townCity, autoComplete: 'off', placeholder: 'Town', onChange: function (e) { return handleOnChange(e); }, required: townCityError, onFocus: function () { return (townCityError ? setTownCityError(false) : ""); }, onBlur: function (e) { return handleOnBlure(e); } }),
                react_1["default"].createElement(InputField_1["default"], { className: 'contact__address-county', label: 'County', id: 'county', value: county, autoComplete: 'abcd', placeholder: 'County', onChange: function (e) { return handleOnChange(e); }, required: false, onFocus: function () { }, onBlur: function () { } }),
                react_1["default"].createElement("div", { className: (countryError ? "countryError" : "") + " input-field contact__country--autoSuggest-container" },
                    react_1["default"].createElement("label", { htmlFor: 'country', "aria-label": 'country' }, "country"),
                    react_1["default"].createElement(react_autosuggest_1["default"], { suggestions: suggestions, onSuggestionsFetchRequested: onSuggestionsFetchRequested, onSuggestionsClearRequested: onSuggestionsClearedRequested, getSuggestionValue: getSuggestionValue, renderSuggestion: renderSuggestion, inputProps: inputProps })),
                react_1["default"].createElement(InputField_1["default"], { className: (postCodeError ? "postCodeError" : "") + " contact__county--post-code", label: 'Post code', id: 'postCode', value: postCode, autoComplete: 'off', placeholder: 'post code eg: Ha4 5gh', onChange: function (e) { return handleOnChange(e); }, required: postCodeError, onFocus: function () { return (postCodeError ? setPostCodeError(false) : ""); }, onBlur: function (e) { return handleOnBlure(e); } }),
                react_1["default"].createElement("div", { className: 'contact__controls' },
                    react_1["default"].createElement("button", { className: 'contact__controls--submit-btn btn', type: 'submit' }, "Submit"),
                    react_1["default"].createElement("button", { className: 'contact__controls--clear-btn btn', type: 'reset', onClick: clearForm }, "Clear"))))));
};
exports["default"] = react_redux_1.connect(null, { addContact: actions_1.addContact })(AddressForm);
