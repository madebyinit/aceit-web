import PositiveThinkingController from './positiveThinking.controller';

describe('PositiveThinking', () => {
  let $rootScope, makeController,component;

  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PositiveThinkingController();
    };
    controller = makeController();
  }));


  describe('Controller', () => {
  });

});
