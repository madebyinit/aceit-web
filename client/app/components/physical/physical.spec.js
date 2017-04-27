import PhysicalController from './physical.controller';

describe('Physical', () => {
  let $rootScope, makeController,component;

  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PhysicalController();
    };
    controller = makeController();
  }));


  describe('Controller', () => {
  });

});
