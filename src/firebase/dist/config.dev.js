"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storage = exports.firestore = exports.auth = void 0;

var _firebase = _interopRequireDefault(require("firebase"));

require("firebase/auth");

require("firebase/firestore");

require("firebase/storage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = _firebase["default"].initializeApp({
  apiKey: "AIzaSyDO12EmJ-c1VihjgzDK2b9NAF5y4-8bdhY",
  authDomain: "x-urgency.firebaseapp.com",
  projectId: "x-urgency",
  storageBucket: "x-urgency.appspot.com",
  messagingSenderId: "605437690069",
  appId: "1:605437690069:web:1340e6ab040e5c637c625c",
  measurementId: "G-K6LBM2CR1G"
});

var auth = app.auth();
exports.auth = auth;
var firestore = app.firestore();
exports.firestore = firestore;
var storage = app.storage();
exports.storage = storage;