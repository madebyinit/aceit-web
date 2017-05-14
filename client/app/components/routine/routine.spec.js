import RoutineController from './routine.controller';

describe('Routine', () => {
  let $rootScope, makeController,component;

  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new RoutineController();
    };
    controller = makeController();
  }));


  describe('Controller', () => {
  });

});
