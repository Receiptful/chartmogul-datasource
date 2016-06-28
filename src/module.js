import {ChartMogulDatasource} from './datasource';
import {ChartMogulQueryCtrl} from './queryCtrl';
import {ChartMogulConfigCtrl} from './configCtrl';

class ChartMogulQueryOptionsCtrl {}
ChartMogulQueryOptionsCtrl.templateUrl = 'partials/query.options.html';

export {
  ChartMogulDatasource as Datasource,
  ChartMogulQueryCtrl as QueryCtrl,
  ChartMogulConfigCtrl as ConfigCtrl,
  ChartMogulQueryOptionsCtrl as QueryOptionsCtrl
};
