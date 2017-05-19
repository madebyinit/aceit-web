import MobileController from './mobile.controller';

describe('Mobile', () => {
  let $rootScope, makeController,component;

  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MobileController();
    };
    controller = makeController();
  }));


  describe('Controller', () => {
  });

});
