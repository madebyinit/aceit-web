import ErrorPageController from './errorPage.controller';

describe('ErrorPage', () => {
  let $rootScope, makeController,component;

  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ErrorPageController();
    };
    controller = makeController();
  }));


  describe('Controller', () => {
  });

});
