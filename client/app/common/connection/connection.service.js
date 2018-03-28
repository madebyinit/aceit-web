import firebase from 'firebase';

class ConnectionService {
  constructor(firebaseService) {
    this.firebase = firebase;
    this.firebaseService = firebaseService;
    this.database = this.firebase.database();
    this.setUser();
    this.userPromise = {};
  }

  setUser() {
    this.user = JSON.parse(localStorage.getItem('aceitUser'));
  }

  getUserLocalData(){
    return JSON.parse(localStorage.getItem('aceitUser'));
  }

  getUserPromise(){
    if(_.isEmpty(this.userPromise)){
      this.userPromise = this.getData();
    }
    return this.userPromise;
  }

  saveData(data,path){
    return this.database.ref(`${this.user.uid}/${path}`).set(data);
  }

  getData(){
    return firebase.database().ref(this.user.uid).once('value').then((res)=>{
      return res.val();
    });
  }
}

ConnectionService.$inject = ['firebaseService'];
export default ConnectionService;
