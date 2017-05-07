import StickyNoteController from './stickyNote.controller';

describe('StickyNote', () => {
  let $rootScope, makeController,component;

  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new StickyNoteController();
    };
    controller = makeController();
  }));


  describe('Controller', () => {
  });

});
