"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleSignIn = void 0;

var _config = require("../config");

var _Components = require("../../Components");

var handleSignIn = function handleSignIn(email, password) {
  _config.auth.signInWithEmailAndPassword(email, password).then(function () {
    (0, _Components.alertNote)();
    alert("Login Successful");
  })["catch"](function (err) {
    console.log(err);
  });
};

exports.handleSignIn = handleSignIn;