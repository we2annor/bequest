"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useHttpRequest = void 0;

var _react = require("react");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var initialState = {
  status: null,
  data: null,
  error: null
};

var httpReducer = function httpReducer(state, action) {
  switch (action.type) {
    case "SEND":
      return {
        status: "pending",
        data: null,
        error: null
      };

    case "SUCCESS":
      return {
        status: "complete",
        data: action.responseData,
        error: null
      };

    case "ERROR":
      return {
        status: "completed",
        data: null,
        error: action.errorMessage
      };

    default:
      return state;
  }
};

var useHttpRequest = function useHttpRequest(requestFunction) {
  var _useReducer = (0, _react.useReducer)(httpReducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      httpState = _useReducer2[0],
      dispatch = _useReducer2[1];

  var sendRequest = (0, _react.useCallback)(function _callee(requestData) {
    var response;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dispatch({
              type: "SEND"
            });
            _context.prev = 1;
            _context.next = 4;
            return regeneratorRuntime.awrap(requestFunction(requestData));

          case 4:
            response = _context.sent;
            dispatch({
              type: "SUCCESS",
              response: response
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            dispatch({
              type: "ERROR",
              errorMessage: _context.t0.message || "Something went wrong"
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 8]]);
  }, [requestFunction]);
  return _objectSpread({
    sendRequest: sendRequest
  }, httpState);
};

exports.useHttpRequest = useHttpRequest;