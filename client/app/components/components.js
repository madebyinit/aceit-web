import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import loginModule from './login/login';
import mainMenuModule from './mainMenu/mainMenu';
import questionnaireModule from './questionnaire/questionnaire';
import concentrationModule from './concentration/concentration';
import physicalModule from './physical/physical';
import summaryModule from './summary/summary';
import positiveModule from './positive/positive';
import routineModule from './routine/routine';
import mobileModule from './mobile/mobile';
import errorPageModule from './errorPage/errorPage';
import staticPageModule from './staticPage/staticPage';
import videoPageModule from './videoPage/videoPage';
import gamesModule from './games/games';
import goaceitModule from './goaceit/goaceit';

// services
import GamesService from '../services/games.service';
import MazeraceService from '../services/mazerace.service';
import MouseGameService from '../services/mouseGame.service';
import TowerService from '../services/tower.service';
import ParkingLotService from '../services/parkingLot.service';
import HelperService from '../services/helper.service';
import SkipService from '../services/skip.service';

let componentModule = angular
.module('app.components', [
  Home,
  About,
  loginModule,
  mainMenuModule,
  questionnaireModule,
  physicalModule,
  concentrationModule,
  summaryModule,
  positiveModule,
  routineModule,
  mobileModule,
  errorPageModule,
  staticPageModule,
  videoPageModule,
  gamesModule,
  goaceitModule
])
.value('gameScoreValue', {
  'parkingLot': {},
  'mazerace': {},
  'mouseGame': {},
  'tower': {}
})
.service('helperService', HelperService)
.service('gamesService', GamesService)
.service('mazeraceService', MazeraceService)
.service('mouseGameService', MouseGameService)
.service('towerService', TowerService)
.service('parkingLotService', ParkingLotService)
.service('skipService', SkipService)

.name;

export default componentModule;
