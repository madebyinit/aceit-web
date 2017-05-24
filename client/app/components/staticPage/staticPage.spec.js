import StaticPageController from './staticPage.controller';

describe('StaticPage', () => {
  let $rootScope, makeController,component;

  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new StaticPageController();
    };
    controller = makeController();
  }));


  describe('Controller', () => {
  });

});
