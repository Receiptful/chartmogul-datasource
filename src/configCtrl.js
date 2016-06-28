export class ChartMogulConfigCtrl {
  constructor() {
    this.current.basicAuth = true;
    this.current.url = 'https://api.chartmogul.com/v1';
  }
}
ChartMogulConfigCtrl.templateUrl = 'partials/config.html';
