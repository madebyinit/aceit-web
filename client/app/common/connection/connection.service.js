import firebase from 'firebase';

class ConnectionService {
  constructor($rootScope) {
    this.$rootScope = $rootScope;
    this.firebase = firebase;
    this.database = this.firebase.database();
  }

  saveData(data){
    return this.database.ref(this.$rootScope.user.uid).set(data);
  }

  getData(){
    return firebase.database().ref(this.$rootScope.user.uid).once('value').then((res)=>{
      return res.val();
    });
  }
}

ConnectionService.$inject = ['$rootScope'];
export default ConnectionService;
