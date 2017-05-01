import angular from 'angular';
import lodash from 'lodash';
import angularTranslate from 'angular-translate';
import angularAnimate from 'angular-animate';
import angularAria from 'angular-aria';
import angularMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import AppController from './app.controller';
import firebase from 'firebase';
import en_EN from 'json!./common/i18n/en_EN.json';
import 'angularfire';
import 'normalize.css';
import 'angular-material/angular-material.scss';

angular.module('app', [
    uiRouter,
    Common,
    Components,
    angularAnimate,
    angularAria,
    angularMaterial,
    'pascalprecht.translate',
    'firebase'
  ])
  .run(()=>{
    let config = {
      apiKey: "AIzaSyBkZ1oJc1iLD9_BxhuMycmHQ_UbkJ7r50U",
      authDomain: "ace-it-8b4e2.firebaseapp.com",
      databaseURL: "https://ace-it-8b4e2.firebaseio.com",
      storageBucket: "ace-it-8b4e2.appspot.com",
      messagingSenderId: "907776585475"
    };
    firebase.initializeApp(config);

    window['_fs_debug'] = false;
    window['_fs_host'] = 'www.fullstory.com';
    window['_fs_org'] = '4AN1G';
    window['_fs_namespace'] = 'FS';
    (function(m,n,e,t,l,o,g,y){
      if (e in m && m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].'); return;}
      g=m[e]=function(a,b){g.q?g.q.push([a,b]):g._api(a,b);};g.q=[];
      o=n.createElement(t);o.async=1;o.src='https://'+_fs_host+'/s/fs.js';
      y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
      g.identify=function(i,v){g(l,{uid:i});if(v)g(l,v)};g.setUserVars=function(v){g(l,v)};
      g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
      g.clearUserCookie=function(c,d,i){if(!c || document.cookie.match('fs_uid=[`;`]*`[`;`]*`[`;`]*`')){
        d=n.domain;while(1){n.cookie='fs_uid=;domain='+d+
          ';path=/;expires='+new Date(0).toUTCString();i=d.indexOf('.');if(i<0)break;d=d.slice(i+1)}}};
    })(window,document,window['_fs_namespace'],'script','user');
  })
  .config(($locationProvider,$translateProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
    $translateProvider.translations('en',en_EN);
    $translateProvider.translations('no', {
      'hello': 'Hei',
      'whats_app': 'Hvordan gor det'
    });
    $translateProvider.preferredLanguage('en');
  })

  .component('app', AppComponent);
