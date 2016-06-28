export class ChartMogulDatasource {
  constructor(instanceSettings, $q, backendSrv, templateSrv) {
    this.url = instanceSettings.url;
    this.q = $q;
    this.backendSrv = backendSrv;
    this.templateSrv = templateSrv;
  }

  query(options) {
    const noData = this.q.when([]);

    if (!Array.isArray(options.targets) || options.targets.length === 0) {
      return noData;
    }

    const target = options.targets[0].target;

    if (!target) {
      return noData;
    }

    const query = {
      'start-date': options.range.from.format(),
      'end-date': options.range.to.format()
    };

    const querystring = Object.keys(query)
      .map(key => key + '=' + query[key])
      .join('&');

    return this.backendSrv
      .datasourceRequest({
        url: this.url + '/metrics/' + target + '?' + querystring
      })
      .then(res => {
        return {
          data: [
            {
              target,
              datapoints: res.data.entries.map(entry => {
                return [
                  Math.round(Number(entry[target]) / 100),
                  new Date(entry.date).getTime()
                ];
              })
            }
          ]
        };
      });
  }

  testDatasource() {
    return this.backendSrv
      .datasourceRequest({
        url: this.url + '/ping'
      })
      .then(response => {
        if (response.status === 200) {
          return { status: "success", message: "Data source is working", title: "Success" };
        }

        return {
          status: "error",
          message: "Got an HTTP error. Code " + response.status
        };
      });
  }

  metricFindQuery(options) {
    return Promise.resolve([
      { text: 'mrr', value: 0 },
      { text: 'arr', value: 1 },
      { text: 'arpa', value: 2 },
      { text: 'asp', value: 3 },
      { text: 'ltv', value: 4 }
    ]);
  }
}
