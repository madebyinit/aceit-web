class StickyNoteController {
  constructor() {
    this.name = 'stickyNote';
    this.sticky = {title:'positive.sticky_note.track',body:'positive.sticky_note.negative'};
  }

  $onInit(){
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  }

  $onDestroy(){
    document.getElementsByTagName('body')[0].style.overflow = '';
  }
}

StickyNoteController.$inject = [];
export default StickyNoteController;
