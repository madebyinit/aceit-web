const STICKY_NOTES = 'stickyNotes';
const MAX_NOTES = 6;

class StickyNoteController {
  constructor(connection,$timeout,progressLinear,notificationsService,$translate) {
    this.connection = connection;
    this.$timeout = $timeout;
    this.progressLinear = progressLinear;
    this.notificationsService = notificationsService;
    this.$translate = $translate;
    this.name = 'stickyNote';
    this.sticky = {title:'positive.sticky_note.track',body:'positive.sticky_note.negative'};
    this.stickyList = [];
    this.isStickeyAdded = false;
  }

  $onInit(){
    this.progressLinear.showProgress();
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    this.connection.getUserPromise().then((res)=>{
      if(_.get(res,STICKY_NOTES)){
        this.$timeout(()=>{
          this._stickyComplete();
          this.stickyList = _.get(res,STICKY_NOTES);
          this.progressLinear.hideProgress();
        },0);
      }
    })
  }

  $onDestroy(){
    document.getElementsByTagName('body')[0].style.overflow = '';
  }

  _stickyComplete(){
    this.completeSticky = true;
    this.sticky = {
      title:'positive.sticky_note.track',
      body:'positive.sticky_note.negative_thoughts',
      inputPlaceholder:'positive.sticky_note.type_negative',
      buttonText:'save_close'
    };
  }

  completeStickyDefault(bol){
    this.completeSticky = true;
    this.sticky = {
      title:'positive.sticky_note.track',
      body:'positive.sticky_note.negative_thoughts',
      inputPlaceholder:'positive.sticky_note.type_negative',
      buttonText:'save_close'
    };
    this.stickyList.push({stick:this.$translate.instant('positive.sticky_note.people'),positive:true});
    this.stickyList.push({stick:this.$translate.instant('positive.sticky_note.performance'),positive:true});
    this.connection.saveData(this.stickyList,STICKY_NOTES);
  }

  deleteStick(obj){
    _.remove(this.stickyList,{stick:obj.stick});
    this.connection.saveData(this.stickyList,STICKY_NOTES);
  }

  updateSticky(obj,newVal){
    let index = _.indexOf(this.stickyList,_.find(this.stickyList,{stick:obj.stick}));
    this.stickyList.splice(index,1,{stick:newVal,positive:true});
    this.connection.saveData(this.stickyList,STICKY_NOTES).then((res)=>{
    })
  }

  addNegativeThoughts(){
    if(this.stickyList.length < MAX_NOTES){
      this.isStickeyAdded = true;
      this.stickyList.push({stick:this.negativeThoughts,positive:false});
      this.connection.saveData(this.stickyList,STICKY_NOTES);
      this.negativeThoughts = '';
    }else{
      this.errorMessage = 'Max sticky note';
      this.$timeout(()=>{
        this.errorMessage = '';
      },3000)
    }
  }
}

StickyNoteController.$inject = ['connection','$timeout','progressLinear','notificationsService','$translate'];
export default StickyNoteController;
