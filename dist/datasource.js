'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChartMogulDatasource = exports.ChartMogulDatasource = function () {
  function ChartMogulDatasource(instanceSettings, $q, backendSrv, templateSrv) {
    _classCallCheck(this, ChartMogulDatasource);

    this.url = instanceSettings.url;
    this.q = $q;
    this.backendSrv = backendSrv;
    this.templateSrv = templateSrv;
  }

  _createClass(ChartMogulDatasource, [{
    key: 'query',
    value: function query(options) {
      var noData = this.q.when([]);

      if (!Array.isArray(options.targets) || options.targets.length === 0) {
        return noData;
      }

      var target = options.targets[0].target;

      if (!target) {
        return noData;
      }

      var query = {
        'start-date': options.range.from.format(),
        'end-date': options.range.to.format()
      };

      var querystring = Object.keys(query).map(function (key) {
        return key + '=' + query[key];
      }).join('&');

      return this.backendSrv.datasourceRequest({
        url: this.url + '/metrics/' + target + '?' + querystring
      }).then(function (res) {
        return {
          data: [{
            target: target,
            datapoints: res.data.entries.map(function (entry) {
              return [Math.round(Number(entry[target]) / 100), new Date(entry.date).getTime()];
            })
          }]
        };
      });
    }
  }, {
    key: 'testDatasource',
    value: function testDatasource() {
      return this.backendSrv.datasourceRequest({
        url: this.url + '/ping'
      }).then(function (response) {
        if (response.status === 200) {
          return { status: "success", message: "Data source is working", title: "Success" };
        }

        return {
          status: "error",
          message: "Got an HTTP error. Code " + response.status
        };
      });
    }
  }, {
    key: 'metricFindQuery',
    value: function metricFindQuery(options) {
      return Promise.resolve([{ text: 'mrr', value: 0 }, { text: 'arr', value: 1 }, { text: 'arpa', value: 2 }, { text: 'asp', value: 3 }, { text: 'ltv', value: 4 }]);
    }
  }]);

  return ChartMogulDatasource;
}();
//# sourceMappingURL=datasource.js.map