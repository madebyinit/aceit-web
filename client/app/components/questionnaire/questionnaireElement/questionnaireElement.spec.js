import QuestionnaireElementController from './questionnaireElement.controller';

describe('QuestionnaireElement', () => {
  let $rootScope, makeController,component;

  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new QuestionnaireElementController();
    };
    controller = makeController();
  }));


  describe('Controller', () => {
  });

});
