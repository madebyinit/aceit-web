import firebase from 'firebase';

class ConnectionService {
  constructor($rootScope,firebaseService) {
    this.$rootScope = $rootScope;
    this.firebase = firebase;
    this.firebaseService = firebaseService;
    this.database = this.firebase.database();
    this.user = this.firebaseService.getUser();
  }

  saveData(data){
    return this.database.ref(this.user.uid).set(data);
  }

  getData(){
    return firebase.database().ref(this.user.uid).once('value').then((res)=>{
      return res.val();
    });
  }
}

ConnectionService.$inject = ['$rootScope','firebaseService'];
export default ConnectionService;
