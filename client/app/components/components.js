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
import algorithmModule from './algorithm/algorithm';
import AlghorithmHeaderFilter from '../common/filter/alghorithmHeaderFilter';


// services
import GamesService from '../services/games.service';
import MazeraceService from '../services/mazerace.service';
import MouseGameService from '../services/mouseGame.service';
import TowerService from '../services/tower.service';
import ParkingLotService from '../services/parkingLot.service';
import HelperService from '../services/helper.service';
import SkipService from '../services/skip.service';

const componentModule = angular
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
    goaceitModule,
    algorithmModule,
  ])

  .value('orderOfGames', {
    gameSequence: [],
    level: [],
    UPDI: [],
  })

  .value('estimationOfResults', {
    parkinglot: {},
    mazerace: {},
    mousetrap: {},
    tower: {},
    parkingLotLast: {},
    gameEnd: {},
    GP: {},
    Feedback: {},
    SuggestPoints: {},
    feedbackCounter: {},
  })

  .value('gameScoreValue', {
    parkinglot: {},
    mazerace: {},
    mousetrap: {},
    tower: {},
    parkinglotLast: {},
    endTime: {},
    GP: {},
    summary: {},
    muteMusic: Number,
    gamesSuccessfullyCompleted: Number,
    selfAssessment: Number,
  })

  .value('gameSummaryValue', {
    selfAssessment: String,
    gamesSuccessfullyCompleted: String,
    slowStarter: String,
    impulsivity: String,
    panic: String,
    negativeThinking: String,
    lowConfidence: String,
    perfectionism: String,
    badTimeManagement: String,
    frustration: String,
    concentration: String,
    muteMusic: String,
  })

  .filter('AlghorithmHeaderFilter', AlghorithmHeaderFilter)
  .service('helperService', HelperService)
  .service('gamesService', GamesService)
  .service('mazeraceService', MazeraceService)
  .service('mouseGameService', MouseGameService)
  .service('towerService', TowerService)
  .service('parkingLotService', ParkingLotService)
  .service('skipService', SkipService)

  .name;

export default componentModule;
