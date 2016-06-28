'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryOptionsCtrl = exports.ConfigCtrl = exports.QueryCtrl = exports.Datasource = undefined;

var _datasource = require('./datasource');

var _queryCtrl = require('./queryCtrl');

var _configCtrl = require('./configCtrl');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChartMogulQueryOptionsCtrl = function ChartMogulQueryOptionsCtrl() {
  _classCallCheck(this, ChartMogulQueryOptionsCtrl);
};

ChartMogulQueryOptionsCtrl.templateUrl = 'partials/query.options.html';

exports.Datasource = _datasource.ChartMogulDatasource;
exports.QueryCtrl = _queryCtrl.ChartMogulQueryCtrl;
exports.ConfigCtrl = _configCtrl.ChartMogulConfigCtrl;
exports.QueryOptionsCtrl = ChartMogulQueryOptionsCtrl;
//# sourceMappingURL=module.js.map