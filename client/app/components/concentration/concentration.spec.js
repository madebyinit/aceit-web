import ConcentrationController from './concentration.controller';

describe('Concentration', () => {
  let $rootScope, makeController,component;

  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ConcentrationController();
    };
    controller = makeController();
  }));


  describe('Controller', () => {
  });

});
