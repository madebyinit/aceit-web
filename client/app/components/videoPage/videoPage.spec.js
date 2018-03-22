import VideoPageModule from './videoPage'

describe('VideoPage', () => {
  let $rootScope, $state, $location, $componentController, $compile;

  beforeEach(window.module(VideoPageModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('default component should be videoPage', () => {
      $location.url('/');
      $rootScope.$digest();
      expect($state.current.component).to.eq('videoPage');
    });
  });

  describe('Controller', () => {
    // controller specs
    let controller;
    beforeEach(() => {
      controller = $componentController('videoPage', {
        $scope: $rootScope.$new()
      });
    });
  });

  describe('View', () => {
    // view layer specs.
    let scope, template;

    beforeEach(() => {
      scope = $rootScope.$new();
      template = $compile('<videoPage></videoPage>')(scope);
      scope.$apply();
    });

    it('has name in template', () => {
      expect(template.find('h1').html()).to.eq('Found in videoPage.html');
    });

  });
});
