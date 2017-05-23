import angular from 'angular';
import uiRouter from 'angular-ui-router';
import questionnaireComponent from './questionnaire.component';
import questionnaireElementComponent from './questionnaireElement/questionnaireElement.component';
import stepsElementComponent from './stepsElement/stepsElement';
import questionnaireServiceModule from './questionnaireSerivce/questionnaireService';
import selectElementComponent from './selectElement/selectElement';

let questionnaireModule = angular.module('questionnaire', [
  uiRouter,
  questionnaireServiceModule.name
])
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('questionnaire', {
        component: 'questionnaire',
        url:'/questionnaire'
      });
  })

.component('questionnaire', questionnaireComponent)
.component('stepsElement', stepsElementComponent)
.component('questionnaireElement', questionnaireElementComponent)
.component('selectElement', selectElementComponent)

.name;

export default questionnaireModule;