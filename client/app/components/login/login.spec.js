import LoginController from './login.controller';

describe('Login', () => {
  let $rootScope, makeController,component;

  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new LoginController();
    };
    controller = makeController();
  }));


  describe('Controller', () => {
  });

});
