"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var userRouter = (0, _express.Router)();
userRouter.get('/', function (req, res) {
  res.status(200).json({
    status: 200,
    data: {
      users: "Users"
    }
  });
});
var _default = userRouter;
exports["default"] = _default;