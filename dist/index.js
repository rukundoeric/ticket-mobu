"use strict";

require("regenerator-runtime");

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _middleware = require("./middleware");

var _index = _interopRequireDefault(require("./sequelize/models/index"));

var _routes = _interopRequireDefault(require("./api/routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var port = process.env.PORT || 7888;
var app = (0, _express["default"])();
(0, _middleware.glabalMiddleware)(app);
var sequelize = _index["default"].sequelize;
app.get('/', _routes["default"]);
app.use(function (req, res) {
  return res.status(404).json({
    status: 404,
    error: {
      message: 'Page Not found'
    }
  });
});
sequelize.sync().then(function () {
  app.listen(port, function () {
    console.log("Database successfully connected\nPID: ".concat(process.pid, " Server is listening on port: ").concat(port, " in ").concat(process.env.NODE_ENV, " mode"));
  });
});