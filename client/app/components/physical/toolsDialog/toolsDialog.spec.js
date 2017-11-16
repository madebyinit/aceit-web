import ToolsDialogController from './toolsDialog.controller';

describe('ToolsDialog', () => {
  let $rootScope, makeController,component;

  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ToolsDialogController();
    };
    controller = makeController();
  }));


  describe('Controller', () => {
  });

});
