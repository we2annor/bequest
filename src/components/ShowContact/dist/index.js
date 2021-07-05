"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var actions_1 = require("../../actions");
var ShowContact = function (_a) {
    var contact = _a.contact, fetchContact = _a.fetchContact, match = _a.match;
    react_1.useEffect(function () {
        var fetchSelectedAddress = function () {
            var id = match.params.id;
            fetchContact(id);
        };
        fetchSelectedAddress();
    }, [fetchContact, match.params]);
    if (!contact) {
        return react_1["default"].createElement("div", null, "No addresses");
    }
    return (react_1["default"].createElement("main", { "data-testid": 'contact', className: 'contact' },
        react_1["default"].createElement("h2", null,
            "Address Id: ",
            contact.id),
        react_1["default"].createElement("div", { className: 'contact__list' },
            react_1["default"].createElement("div", { className: 'list-item' },
                react_1["default"].createElement("span", null, "Address :"),
                contact.line1,
                ",",
                contact.line2,
                ",",
                contact.line3),
            react_1["default"].createElement("div", { className: 'list-item' },
                react_1["default"].createElement("span", null, "Locality :"),
                contact.locality),
            react_1["default"].createElement("div", { className: 'list-item' },
                react_1["default"].createElement("span", null, "City :"),
                contact.townCity),
            react_1["default"].createElement("div", { className: 'list-item' },
                react_1["default"].createElement("span", null, "Country:"),
                contact.country),
            react_1["default"].createElement("div", { className: 'list-item' },
                react_1["default"].createElement("span", null, "Post code:"),
                contact.postCode))));
};
var mapPropsToState = function (state, ownProps) {
    return { contact: state.addressBook[ownProps.match.params.id] };
};
exports["default"] = react_redux_1.connect(mapPropsToState, { fetchContact: actions_1.fetchContact })(ShowContact);
