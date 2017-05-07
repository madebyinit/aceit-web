import template from './stickyNote.html';
import controller from './stickyNote.controller';
import './stickyNote.scss';

let stickyNoteComponent = {
  restrict: 'E',
  bindings: {
    closeDialog:'&?'
  },
  template,
  controller
};

export default stickyNoteComponent;
