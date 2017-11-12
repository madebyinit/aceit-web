import GoaceitController from './goaceit.controller';

describe('Goaceit', () => {
  let $rootScope, makeController,component;

  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new GoaceitController();
    };
    controller = makeController();
  }));


  describe('Controller', () => {
  });

});
