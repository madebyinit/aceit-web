import <%= upCaseName %>Controller from './<%= name %>.controller';

describe('<%= upCaseName %>', () => {
  let $rootScope, makeController,component;

  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new <%= upCaseName %>Controller();
    };
    controller = makeController();
  }));


  describe('Controller', () => {
  });

});
