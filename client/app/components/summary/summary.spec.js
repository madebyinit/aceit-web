import SummaryController from './summary.controller';

describe('Summary', () => {
  let $rootScope, makeController,component;

  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SummaryController();
    };
    controller = makeController();
  }));


  describe('Controller', () => {
  });

});
