class ConnectServices {
  constructor(connection) {
    this.connection = connection;
    this._init();
  }

  _init(){
    this.user = this.connection.getUserLocalData();
    this.connection.getUserPromise().then((res)=>{
      this.userData = res;
      this._intercomBoot();
    })
  }

  _intercomBoot(){
    let time = + new Date();
    window.Intercom("boot", {
      app_id: "dy8do0p0",
      name: _.get(this.userData,'name'),
      email: _.get(this.user,'email'),
      created_at: time
    });
  }
}

ConnectServices.$inject = ['connection'];
export default ConnectServices;
