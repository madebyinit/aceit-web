import angular from "angular";
import lodash from "lodash";
import angularTranslate from "angular-translate";
import angularAnimate from "angular-animate";
import angularAria from "angular-aria";
import angularMaterial from "angular-material";
import uiRouter from "angular-ui-router";
import Common from "./common/common";
import Components from "./components/components";
import AppComponent from "./app.component";
import runController from "./run.controller";
import en_EN from "./common/i18n/en_EN.json";
import "angularfire";
import "normalize.css";
import "angular-material/angular-material.scss";

angular
  .module("app", [
    uiRouter,
    Common,
    Components,
    angularAnimate,
    angularAria,
    angularMaterial,
    "pascalprecht.translate",
    "firebase"
  ])
  .run(runController)
  .config(
    (
      $locationProvider,
      $translateProvider,
      $stateProvider,
      $urlRouterProvider
    ) => {
      "ngInject";
      // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
      // #how-to-configure-your-server-to-work-with-html5mode
      $locationProvider.html5Mode(true).hashPrefix("!");
      $translateProvider.translations("en", en_EN);
      $translateProvider.translations("no", {
        hello: "Hei",
        whats_app: "Hvordan gor det"
      });
      $translateProvider.preferredLanguage("en");
      $urlRouterProvider.otherwise("/404");
    }
  )
  .component("app", AppComponent);
