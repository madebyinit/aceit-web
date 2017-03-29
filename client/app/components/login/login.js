import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginComponent from './login.component';
import registerComponent from './register/register.component';
import loginFormComponent from './loginForm/loginForm.component';
import forgotPasswordComponent from './forgotPassword/forgotPassword.component';

let loginModule = angular.module('login', [
  uiRouter
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('loginView', {
        component: 'login'
      })
      .state('loginView.login', {
        url: '/login',
        component: 'loginForm'
      })
      .state('loginView.forgotPassword', {
        url: '/forgot-password',
        component: 'forgotPassword'
      })
      .state('loginView.register', {
        url: '/register',
        component: 'register'
      });
  })

.component('login', loginComponent)
.component('loginForm', loginFormComponent)
.component('register', registerComponent)
.component('forgotPassword', forgotPasswordComponent)

.name;

export default loginModule;
