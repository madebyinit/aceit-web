import progressBarController from './progressBar.controller';

describe('ProgressBar', () => {
  let $rootScope, makeController, component;

  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new progressBarController();
    };
    controller = makeController();
  }));

  describe('Controller', () => {
  });

});
