import firebase from 'firebase';

class ConnectionService {
  constructor() {
    this.firebase = firebase;
    this.database = this.firebase.database();
    this.userId = this.firebase.auth().currentUser.uid;
  }

  saveData(data){
    return this.database.ref(this.userId).set(data);
  }

  getData(obj){
    return firebase.database().ref(this.userId).once('value').then((res)=>{
      return res.val()[obj];
    });
  }
}

ConnectionService.$inject = [];
export default ConnectionService;
