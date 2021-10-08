"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alertNote = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var alertNote = function alertNote() {
  _reactNative.Alert.alert("Title", "Custom Message", [{
    text: "Ok",
    onPress: function onPress() {
      return console.log("Ok pressed");
    }
  }]);
};

exports.alertNote = alertNote;

var alertError = function alertError() {};