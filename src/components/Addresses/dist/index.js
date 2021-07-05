"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_document_title_1 = require("react-document-title");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var SearchAddress_1 = require("../SearchAddress");
var actions_1 = require("../../actions");
var Addresses = function (_a) {
    var fetchContacts = _a.fetchContacts, addressBook = _a.addressBook;
    var _b = react_1.useState(""), searchedTerm = _b[0], setSearchedTerm = _b[1];
    react_1.useEffect(function () {
        fetchContacts();
    }, [fetchContacts]);
    // const filteredAddressBook = addressBook.map((address) => {
    //   return Object.values(address).filter(
    //     (addrs) => .toLowerCase().indexOf(searchedTerm) !== -1
    //   );
    // });
    var filteredAddressBook = addressBook.reduce(function (total, address) {
        var addressContent = address.line1 +
            address.line2 +
            address.line3 +
            address.locality +
            address.county +
            address.country +
            address.postCode;
        console.log(addressContent);
        if ((address.line1.toLowerCase() + address.postCode.toLowerCase()).indexOf(searchedTerm) !== -1) {
            total.push(address);
        }
        return total;
    }, []);
    console.log("filtered addressbook", filteredAddressBook, "filtered term", searchedTerm);
    console.log("add", addressBook);
    var renderAddresses = function () {
        if (addressBook.length) {
            return filteredAddressBook.map(function (address) { return (react_1["default"].createElement(react_router_dom_1.Link, { to: "/contact/" + address.id, key: address.id },
                react_1["default"].createElement("div", { className: 'addresses__list' },
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("span", null, "Address :"),
                        address.line1,
                        address.line2,
                        " ",
                        address.line3),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("span", null, "Locality:"),
                        address.locality),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("span", null, "Town/City :"),
                        address.townCity),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("span", null, "County :"),
                        address.county),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("span", null, "Post code :"),
                        address.postCode),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("span", null, "Country :"),
                        address.country)))); });
        }
        return react_1["default"].createElement("div", null, "No address in the address book. Add an address");
    };
    var getSearchTerm = function (term) {
        setSearchedTerm(term);
    };
    return (react_1["default"].createElement(react_document_title_1["default"], { title: "Address Book" },
        react_1["default"].createElement("main", { className: 'addresses' },
            react_1["default"].createElement(SearchAddress_1["default"], { getSearchTerm: getSearchTerm }),
            react_1["default"].createElement("section", null,
                react_1["default"].createElement("h2", { className: 'item item__heading' }, "Addresses"),
                renderAddresses()))));
};
var mapPropsToState = function (state) {
    return { addressBook: Object.values(state.addressBook) };
};
exports["default"] = react_redux_1.connect(mapPropsToState, { fetchContacts: actions_1.fetchContacts })(Addresses);
// const newHigherOrderComponent =(WrappedComponent:React.Component, selectedData:any)=>{
//   return class extends React.Component{
//     constructor(props:any){
//       super(props);
//       this.state = {
//       }
//     }
//     componentDidMount=()=>{
//     }
//     componentWillUnmount=()=>{
//     }
//     render(){
//       return(
//         <WrappedComponent data={selectedData} {...this.props}/>
//       )
//     }
//   }
// }
// const formatCurrency =(currencySymbol, decimalSeperator)=>{
//   return function (value){
//     const wholePart = Math.trunc(value /100);
//     let fractionPart = value % 100;
//     if(fractionPart > 10){
//       fractionPart = '0' + fractionPart;
//     }
//     return `${currencySymbol}${wholePart}${decimalSeperator}${fractionPart}`
//   }
// }
// const getLabel = formatCurrency('$','.')
// console.log(getLabel(50));
