"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = require("../config");

var Exit = function Exit() {
  firebase.auth().signOut().then(function () {// Sign-out successful.
  })["catch"](function (error) {// An error happened.
  });
};

var _default = Exit;
exports["default"] = _default;