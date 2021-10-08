"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleResetPassword = void 0;

var _config = require("../config");

var handleResetPassword = function handleResetPassword(email) {
  _config.auth.sendPasswordResetEmail(email).then(function () {
    return alert("check your email");
  })["catch"](function (err) {
    console.log(err);
  });
};

exports.handleResetPassword = handleResetPassword;