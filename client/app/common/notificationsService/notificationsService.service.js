class NotificationsService {
  constructor($mdToast) {
    this.$mdToast = $mdToast;
  }

  showToast(message){
    this.$mdToast.show(
      this.$mdToast.simple()
        .textContent(message)
        .position('right')
        .hideDelay(3000)
    );
  }
}

NotificationsService.$inject = ['$mdToast'];
export default NotificationsService;
