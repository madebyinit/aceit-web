const STICKY_NOTES = 'stickyNotes';

class StickyNoteController {
  constructor(connection,$timeout,progressLinear) {
    this.connection = connection;
    this.$timeout = $timeout;
    this.progressLinear = progressLinear;
    this.name = 'stickyNote';
    this.sticky = {title:'positive.sticky_note.track',body:'positive.sticky_note.negative'};
    this.stickyList = [];
  }

  $onInit(){
    this.progressLinear.showProgress();
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    this.connection.getUserPromise().then((res)=>{
      if(_.get(res,STICKY_NOTES)){
        this.$timeout(()=>{
          this.completeStickyDefault();
          this.stickyList = _.get(res,STICKY_NOTES);
          this.progressLinear.hideProgress();
        },0);
      }
    })
  }

  $onDestroy(){
    document.getElementsByTagName('body')[0].style.overflow = '';
  }

  completeStickyDefault(bol){
    this.completeSticky = true;
    this.sticky = {
      title:'positive.sticky_note.track',
      body:'positive.sticky_note.negative_thoughts',
      inputPlaceholder:'positive.sticky_note.type_negative',
      buttonText:'positive.sticky_note.use_it'
    };
  }

  deleteStick(obj){
    _.remove(this.stickyList,{stick:obj.stick});
  }

  updateSticky(obj,newVal){
    let index = _.indexOf(this.stickyList,_.find(this.stickyList,{stick:obj.stick}));
    this.stickyList.splice(index,1,{stick:newVal,positive:true});
    this.connection.saveData(this.stickyList,STICKY_NOTES).then((res)=>{
      debugger;
    })
  }

  addNegativeThoughts(){
    this.stickyList.push({stick:this.negativeThoughts,positive:false});
    this.negativeThoughts = '';
  }
}

StickyNoteController.$inject = ['connection','$timeout','progressLinear'];
export default StickyNoteController;
