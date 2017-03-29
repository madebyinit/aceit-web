import ForgotPasswordController from './forgotPassword.controller';

describe('ForgotPassword', () => {
  let $rootScope, makeController,component;

  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ForgotPasswordController();
    };
    controller = makeController();
  }));


  describe('Controller', () => {
  });

});
