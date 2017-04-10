import QuestionnaireController from './questionnaire.controller';

describe('Questionnaire', () => {
  let $rootScope, makeController,component;

  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new QuestionnaireController();
    };
    controller = makeController();
  }));


  describe('Controller', () => {
  });

});
