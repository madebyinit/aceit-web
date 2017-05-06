import PositiveController from './positive.controller';

describe('Positive', () => {
  let $rootScope, makeController,component;

  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PositiveController();
    };
    controller = makeController();
  }));


  describe('Controller', () => {
  });

});
