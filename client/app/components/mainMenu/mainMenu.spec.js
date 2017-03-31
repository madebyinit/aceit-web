import MainMenuController from './mainMenu.controller';

describe('MainMenu', () => {
  let $rootScope, makeController,component;

  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MainMenuController();
    };
    controller = makeController();
  }));


  describe('Controller', () => {
  });

});
