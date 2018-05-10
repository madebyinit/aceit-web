class GamesService {
  constructor(
    gameSummaryValue, gameScoreValue, estimationOfResults,
    connection, $window, $document,
  ) { // eslint-disable-line
    this.gameScore = gameScoreValue;
    this.gameSummary = gameSummaryValue;
    this.estimationOfResults = estimationOfResults;
    this.connection = connection;
    this.window = $window;
    this.document = $document;
    this.gameStatus = {};
  }

  setGameStatus(data) {
    this.gameStatus = data;
  }

  getGameResultparkinglot() {
    let result = this.gameStatus.sendMessage('getGameResult');
    result = JSON.parse(result);
    const { alert } = this.window;

    alert(`duration = ${result.duration}`);
    alert(`noOfMoves = ${result.noOfMoves}`);
    alert(`instructionsClickCount = ${result.instructionsClickCount}`);
    alert(`win = ${result.win}`);
    alert(`firstMoveTime = ${result.firstMoveTime}`);
  }

  TotalTimeFOrLastGame(time) {
    if (time <= 10) {
      this.gameScore.endTime = [
        this.estimationOfResults.gameEnd.TTfLG['0-10'].LC,
        this.estimationOfResults.gameEnd.TTfLG['0-10'].BTM,
        this.estimationOfResults.gameEnd.TTfLG['0-10'].P,
        this.estimationOfResults.gameEnd.TTfLG['0-10'].NT,
        this.estimationOfResults.gameEnd.TTfLG['0-10'].LR,
        this.estimationOfResults.gameEnd.TTfLG['0-10'].I,
        this.estimationOfResults.gameEnd.TTfLG['0-10'].SS,
        this.estimationOfResults.gameEnd.TTfLG['0-10'].Panic,
        this.estimationOfResults.gameEnd.TTfLG['0-10'].F];
    } else if (time < 10 && time <= 20) {
      this.gameScore.endTime = [
        this.estimationOfResults.gameEnd.TTfLG['11-20'].LC,
        this.estimationOfResults.gameEnd.TTfLG['11-20'].BTM,
        this.estimationOfResults.gameEnd.TTfLG['11-20'].P,
        this.estimationOfResults.gameEnd.TTfLG['11-20'].NT,
        this.estimationOfResults.gameEnd.TTfLG['11-20'].LR,
        this.estimationOfResults.gameEnd.TTfLG['11-20'].I,
        this.estimationOfResults.gameEnd.TTfLG['11-20'].SS,
        this.estimationOfResults.gameEnd.TTfLG['11-20'].Panic,
        this.estimationOfResults.gameEnd.TTfLG['11-20'].F];
    } else if (time < 20 && time <= 30) {
      this.gameScore.endTime = [
        this.estimationOfResults.gameEnd.TTfLG['21-30'].LC,
        this.estimationOfResults.gameEnd.TTfLG['21-30'].BTM,
        this.estimationOfResults.gameEnd.TTfLG['21-30'].P,
        this.estimationOfResults.gameEnd.TTfLG['21-30'].NT,
        this.estimationOfResults.gameEnd.TTfLG['21-30'].LR,
        this.estimationOfResults.gameEnd.TTfLG['21-30'].I,
        this.estimationOfResults.gameEnd.TTfLG['21-30'].SS,
        this.estimationOfResults.gameEnd.TTfLG['21-30'].Panic,
        this.estimationOfResults.gameEnd.TTfLG['21-30'].F];
    } else if (time < 30 && time <= 40) {
      this.gameScore.endTime = [
        this.estimationOfResults.gameEnd.TTfLG['31-40'].LC,
        this.estimationOfResults.gameEnd.TTfLG['31-40'].BTM,
        this.estimationOfResults.gameEnd.TTfLG['31-40'].P,
        this.estimationOfResults.gameEnd.TTfLG['31-40'].NT,
        this.estimationOfResults.gameEnd.TTfLG['31-40'].LR,
        this.estimationOfResults.gameEnd.TTfLG['31-40'].I,
        this.estimationOfResults.gameEnd.TTfLG['31-40'].SS,
        this.estimationOfResults.gameEnd.TTfLG['31-40'].Panic,
        this.estimationOfResults.gameEnd.TTfLG['31-40'].F];
    } else if (time < 40 && time <= 50) {
      this.gameScore.endTime = [
        this.estimationOfResults.gameEnd.TTfLG['41-50'].LC,
        this.estimationOfResults.gameEnd.TTfLG['41-50'].BTM,
        this.estimationOfResults.gameEnd.TTfLG['41-50'].P,
        this.estimationOfResults.gameEnd.TTfLG['41-50'].NT,
        this.estimationOfResults.gameEnd.TTfLG['41-50'].LR,
        this.estimationOfResults.gameEnd.TTfLG['41-50'].I,
        this.estimationOfResults.gameEnd.TTfLG['41-50'].SS,
        this.estimationOfResults.gameEnd.TTfLG['41-50'].Panic,
        this.estimationOfResults.gameEnd.TTfLG['41-50'].F];
    } else if (time > 50) {
      this.gameScore.endTime = [
        this.estimationOfResults.gameEnd.TTfLG['51+'].LC,
        this.estimationOfResults.gameEnd.TTfLG['51+'].BTM,
        this.estimationOfResults.gameEnd.TTfLG['51+'].P,
        this.estimationOfResults.gameEnd.TTfLG['51+'].NT,
        this.estimationOfResults.gameEnd.TTfLG['51+'].LR,
        this.estimationOfResults.gameEnd.TTfLG['51+'].I,
        this.estimationOfResults.gameEnd.TTfLG['51+'].SS,
        this.estimationOfResults.gameEnd.TTfLG['51+'].Panic,
        this.estimationOfResults.gameEnd.TTfLG['51+'].F];
    }
    console.log(this.gameScore.endTime, 'Total Time FOr Last Game');
    alert(this.gameScore.endTime, 'Total Time FOr Last Game');
  }
  TotalTimeFOrFourthGame(time) {
    console.log(time, 'TotalTimeFOrFourthGame');
    // Game Duration When Time is Up
    if (time <= 30) {
      this.gameScore.endTime = [
        this.estimationOfResults.mazerace.CGDETiU['0-30'].LC,
        this.estimationOfResults.mazerace.CGDETiU['0-30'].BTM,
        this.estimationOfResults.mazerace.CGDETiU['0-30'].P,
        this.estimationOfResults.mazerace.CGDETiU['0-30'].NT,
        this.estimationOfResults.mazerace.CGDETiU['0-30'].LR,
        this.estimationOfResults.mazerace.CGDETiU['0-30'].I,
        this.estimationOfResults.mazerace.CGDETiU['0-30'].SS,
        this.estimationOfResults.mazerace.CGDETiU['0-30'].Panic,
        this.estimationOfResults.mazerace.CGDETiU['0-30'].F,
      ];
      alert(this.gameScore.endTime, '4 Game END');
    } else if (time > 30 && time <= 40) {
      // result.badTimeMan+=9;
      this.gameScore.endTime = [
        this.estimationOfResults.mazerace.CGDETiU['31-40'].LC,
        this.estimationOfResults.mazerace.CGDETiU['31-40'].BTM,
        this.estimationOfResults.mazerace.CGDETiU['31-40'].P,
        this.estimationOfResults.mazerace.CGDETiU['31-40'].NT,
        this.estimationOfResults.mazerace.CGDETiU['31-40'].LR,
        this.estimationOfResults.mazerace.CGDETiU['31-40'].I,
        this.estimationOfResults.mazerace.CGDETiU['31-40'].SS,
        this.estimationOfResults.mazerace.CGDETiU['31-40'].Panic,
        this.estimationOfResults.mazerace.CGDETiU['31-40'].F,
      ];
      alert(this.gameScore.endTime, '4 Game END');
    } else if (time > 40 && time <= 50) {
      // result.badTimeMan+=8;
      this.gameScore.endTime = [
        this.estimationOfResults.mazerace.CGDETiU['41-50'].LC,
        this.estimationOfResults.mazerace.CGDETiU['41-50'].BTM,
        this.estimationOfResults.mazerace.CGDETiU['41-50'].P,
        this.estimationOfResults.mazerace.CGDETiU['41-50'].NT,
        this.estimationOfResults.mazerace.CGDETiU['41-50'].LR,
        this.estimationOfResults.mazerace.CGDETiU['41-50'].I,
        this.estimationOfResults.mazerace.CGDETiU['41-50'].SS,
        this.estimationOfResults.mazerace.CGDETiU['41-50'].Panic,
        this.estimationOfResults.mazerace.CGDETiU['41-50'].F,
      ];
      alert(this.gameScore.endTime, '4 Game END');
    } else if (time > 50 && time <= 60) {
      // result.badTimeMan+=7;
      this.gameScore.endTime = [
        this.estimationOfResults.mazerace.CGDETiU['51-60'].LC,
        this.estimationOfResults.mazerace.CGDETiU['51-60'].BTM,
        this.estimationOfResults.mazerace.CGDETiU['51-60'].P,
        this.estimationOfResults.mazerace.CGDETiU['51-60'].NT,
        this.estimationOfResults.mazerace.CGDETiU['51-60'].LR,
        this.estimationOfResults.mazerace.CGDETiU['51-60'].I,
        this.estimationOfResults.mazerace.CGDETiU['51-60'].SS,
        this.estimationOfResults.mazerace.CGDETiU['51-60'].Panic,
        this.estimationOfResults.mazerace.CGDETiU['51-60'].F,
      ];
      alert(this.gameScore.endTime, '4 Game END');
    } else if (time > 60 && time <= 70) {
      this.gameScore.endTime = [
        this.estimationOfResults.mazerace.CGDETiU['61-70'].LC,
        this.estimationOfResults.mazerace.CGDETiU['61-70'].BTM,
        this.estimationOfResults.mazerace.CGDETiU['61-70'].P,
        this.estimationOfResults.mazerace.CGDETiU['61-70'].NT,
        this.estimationOfResults.mazerace.CGDETiU['61-70'].LR,
        this.estimationOfResults.mazerace.CGDETiU['61-70'].I,
        this.estimationOfResults.mazerace.CGDETiU['61-70'].SS,
        this.estimationOfResults.mazerace.CGDETiU['61-70'].Panic,
        this.estimationOfResults.mazerace.CGDETiU['61-70'].F,
      ];
      alert(this.gameScore.endTime, '4 Game END');
    } else if (time > 70 && time <= 80) {
      this.gameScore.endTime = [
        this.estimationOfResults.mazerace.CGDETiU['71-80'].LC,
        this.estimationOfResults.mazerace.CGDETiU['71-80'].BTM,
        this.estimationOfResults.mazerace.CGDETiU['71-80'].P,
        this.estimationOfResults.mazerace.CGDETiU['71-80'].NT,
        this.estimationOfResults.mazerace.CGDETiU['71-80'].LR,
        this.estimationOfResults.mazerace.CGDETiU['71-80'].I,
        this.estimationOfResults.mazerace.CGDETiU['71-80'].SS,
        this.estimationOfResults.mazerace.CGDETiU['71-80'].Panic,
        this.estimationOfResults.mazerace.CGDETiU['71-80'].F,
      ];
      alert(this.gameScore.endTime, '4 Game END');
    } else if (time > 80 && time <= 90) {
      this.gameScore.endTime = [
        this.estimationOfResults.mazerace.CGDETiU['81-90'].LC,
        this.estimationOfResults.mazerace.CGDETiU['81-90'].BTM,
        this.estimationOfResults.mazerace.CGDETiU['81-90'].P,
        this.estimationOfResults.mazerace.CGDETiU['81-90'].NT,
        this.estimationOfResults.mazerace.CGDETiU['81-90'].LR,
        this.estimationOfResults.mazerace.CGDETiU['81-90'].I,
        this.estimationOfResults.mazerace.CGDETiU['81-90'].SS,
        this.estimationOfResults.mazerace.CGDETiU['81-90'].Panic,
        this.estimationOfResults.mazerace.CGDETiU['81-90'].F,
      ];
      alert(this.gameScore.endTime, '4 Game END');
    } else if (time > 90 && time <= 100) {
      this.gameScore.endTime = [
        this.estimationOfResults.mazerace.CGDETiU['91-100'].LC,
        this.estimationOfResults.mazerace.CGDETiU['91-100'].BTM,
        this.estimationOfResults.mazerace.CGDETiU['91-100'].P,
        this.estimationOfResults.mazerace.CGDETiU['91-100'].NT,
        this.estimationOfResults.mazerace.CGDETiU['91-100'].LR,
        this.estimationOfResults.mazerace.CGDETiU['91-100'].I,
        this.estimationOfResults.mazerace.CGDETiU['91-100'].SS,
        this.estimationOfResults.mazerace.CGDETiU['91-100'].Panic,
        this.estimationOfResults.mazerace.CGDETiU['91-100'].F,
      ];
      alert(this.gameScore.endTime, '4 Game END');
    } else if (time > 100 && time <= 115) {
      this.gameScore.endTime = [
        this.estimationOfResults.mazerace.CGDETiU['101-115'].LC,
        this.estimationOfResults.mazerace.CGDETiU['101-115'].BTM,
        this.estimationOfResults.mazerace.CGDETiU['101-115'].P,
        this.estimationOfResults.mazerace.CGDETiU['101-115'].NT,
        this.estimationOfResults.mazerace.CGDETiU['101-115'].LR,
        this.estimationOfResults.mazerace.CGDETiU['101-115'].I,
        this.estimationOfResults.mazerace.CGDETiU['101-115'].SS,
        this.estimationOfResults.mazerace.CGDETiU['101-115'].Panic,
        this.estimationOfResults.mazerace.CGDETiU['101-115'].F,
      ];
      alert(this.gameScore.endTime, '4 Game END');
    } else if (time > 116) {
      this.gameScore.endTime = [
        this.estimationOfResults.mazerace.CGDETiU['116+'].LC,
        this.estimationOfResults.mazerace.CGDETiU['116+'].BTM,
        this.estimationOfResults.mazerace.CGDETiU['116+'].P,
        this.estimationOfResults.mazerace.CGDETiU['116+'].NT,
        this.estimationOfResults.mazerace.CGDETiU['116+'].LR,
        this.estimationOfResults.mazerace.CGDETiU['116+'].I,
        this.estimationOfResults.mazerace.CGDETiU['116+'].SS,
        this.estimationOfResults.mazerace.CGDETiU['116+'].Panic,
        this.estimationOfResults.mazerace.CGDETiU['116+'].F,
      ];
      alert(this.gameScore.endTime, '4 Game END');
    }
    console.log(this.gameScore.endTime, '4 Game END');
  }
  EndTimeInGame(Param) {
    this.gameScore.endTime = [
      this.estimationOfResults.gameEnd.GSIWTiU[Param].LC,
      this.estimationOfResults.gameEnd.GSIWTiU[Param].BTM,
      this.estimationOfResults.gameEnd.GSIWTiU[Param].P,
      this.estimationOfResults.gameEnd.GSIWTiU[Param].NT,
      this.estimationOfResults.gameEnd.GSIWTiU[Param].LR,
      this.estimationOfResults.gameEnd.GSIWTiU[Param].I,
      this.estimationOfResults.gameEnd.GSIWTiU[Param].SS,
      this.estimationOfResults.gameEnd.GSIWTiU[Param].Panic,
      this.estimationOfResults.gameEnd.GSIWTiU[Param].F];
    console.log(this.gameScore.endTime, '1-3 Game END');
    alert(this.gameScore.endTime, '1-3 Game END');
  }

  EndTimeInLastGame(time) {
    console.log(time, 'EndTimeInLastGame');
    if (time <= 30) {
      this.gameScore.endTime = [
        this.estimationOfResults.gameEnd.TTtFNS['0-30'].LC,
        this.estimationOfResults.gameEnd.TTtFNS['0-30'].BTM,
        this.estimationOfResults.gameEnd.TTtFNS['0-30'].P,
        this.estimationOfResults.gameEnd.TTtFNS['0-30'].NT,
        this.estimationOfResults.gameEnd.TTtFNS['0-30'].LR,
        this.estimationOfResults.gameEnd.TTtFNS['0-30'].I,
        this.estimationOfResults.gameEnd.TTtFNS['0-30'].SS,
        this.estimationOfResults.gameEnd.TTtFNS['0-30'].Panic,
        this.estimationOfResults.gameEnd.TTtFNS['0-30'].F];
    } else if (time < 30 && time <= 40) {
      this.gameScore.endTime = [
        this.estimationOfResults.gameEnd.TTtFNS['31-40'].LC,
        this.estimationOfResults.gameEnd.TTtFNS['31-40'].BTM,
        this.estimationOfResults.gameEnd.TTtFNS['31-40'].P,
        this.estimationOfResults.gameEnd.TTtFNS['31-40'].NT,
        this.estimationOfResults.gameEnd.TTtFNS['31-40'].LR,
        this.estimationOfResults.gameEnd.TTtFNS['31-40'].I,
        this.estimationOfResults.gameEnd.TTtFNS['31-40'].SS,
        this.estimationOfResults.gameEnd.TTtFNS['31-40'].Panic,
        this.estimationOfResults.gameEnd.TTtFNS['31-40'].F];
    } else if (time < 40 && time <= 50) {
      this.gameScore.endTime = [
        this.estimationOfResults.gameEnd.TTtFNS['41-50'].LC,
        this.estimationOfResults.gameEnd.TTtFNS['41-50'].BTM,
        this.estimationOfResults.gameEnd.TTtFNS['41-50'].P,
        this.estimationOfResults.gameEnd.TTtFNS['41-50'].NT,
        this.estimationOfResults.gameEnd.TTtFNS['41-50'].LR,
        this.estimationOfResults.gameEnd.TTtFNS['41-50'].I,
        this.estimationOfResults.gameEnd.TTtFNS['41-50'].SS,
        this.estimationOfResults.gameEnd.TTtFNS['41-50'].Panic,
        this.estimationOfResults.gameEnd.TTtFNS['41-50'].F];
    } else if (time < 50 && time <= 60) {
      this.gameScore.endTime = [
        this.estimationOfResults.gameEnd.TTtFNS['51-60'].LC,
        this.estimationOfResults.gameEnd.TTtFNS['51-60'].BTM,
        this.estimationOfResults.gameEnd.TTtFNS['51-60'].P,
        this.estimationOfResults.gameEnd.TTtFNS['51-60'].NT,
        this.estimationOfResults.gameEnd.TTtFNS['51-60'].LR,
        this.estimationOfResults.gameEnd.TTtFNS['51-60'].I,
        this.estimationOfResults.gameEnd.TTtFNS['51-60'].SS,
        this.estimationOfResults.gameEnd.TTtFNS['51-60'].Panic,
        this.estimationOfResults.gameEnd.TTtFNS['51-60'].F];
    } else if (time < 60 && time <= 70) {
      this.gameScore.endTime = [
        this.estimationOfResults.gameEnd.TTtFNS['61-70'].LC,
        this.estimationOfResults.gameEnd.TTtFNS['61-70'].BTM,
        this.estimationOfResults.gameEnd.TTtFNS['61-70'].P,
        this.estimationOfResults.gameEnd.TTtFNS['61-70'].NT,
        this.estimationOfResults.gameEnd.TTtFNS['61-70'].LR,
        this.estimationOfResults.gameEnd.TTtFNS['61-70'].I,
        this.estimationOfResults.gameEnd.TTtFNS['61-70'].SS,
        this.estimationOfResults.gameEnd.TTtFNS['61-70'].Panic,
        this.estimationOfResults.gameEnd.TTtFNS['61-70'].F];
    } else if (time < 70 && time <= 80) {
      this.gameScore.endTime = [
        this.estimationOfResults.gameEnd.TTtFNS['71-80'].LC,
        this.estimationOfResults.gameEnd.TTtFNS['71-80'].BTM,
        this.estimationOfResults.gameEnd.TTtFNS['71-80'].P,
        this.estimationOfResults.gameEnd.TTtFNS['71-80'].NT,
        this.estimationOfResults.gameEnd.TTtFNS['71-80'].LR,
        this.estimationOfResults.gameEnd.TTtFNS['71-80'].I,
        this.estimationOfResults.gameEnd.TTtFNS['71-80'].SS,
        this.estimationOfResults.gameEnd.TTtFNS['71-80'].Panic,
        this.estimationOfResults.gameEnd.TTtFNS['71-80'].F];
    } else if (time < 80 && time <= 90) {
      this.gameScore.endTime = [
        this.estimationOfResults.gameEnd.TTtFNS['81-90'].LC,
        this.estimationOfResults.gameEnd.TTtFNS['81-90'].BTM,
        this.estimationOfResults.gameEnd.TTtFNS['81-90'].P,
        this.estimationOfResults.gameEnd.TTtFNS['81-90'].NT,
        this.estimationOfResults.gameEnd.TTtFNS['81-90'].LR,
        this.estimationOfResults.gameEnd.TTtFNS['81-90'].I,
        this.estimationOfResults.gameEnd.TTtFNS['81-90'].SS,
        this.estimationOfResults.gameEnd.TTtFNS['81-90'].Panic,
        this.estimationOfResults.gameEnd.TTtFNS['81-90'].F];
    } else if (time < 90 && time <= 100) {
      this.gameScore.endTime = [
        this.estimationOfResults.gameEnd.TTtFNS['91-100'].LC,
        this.estimationOfResults.gameEnd.TTtFNS['91-100'].BTM,
        this.estimationOfResults.gameEnd.TTtFNS['91-100'].P,
        this.estimationOfResults.gameEnd.TTtFNS['91-100'].NT,
        this.estimationOfResults.gameEnd.TTtFNS['91-100'].LR,
        this.estimationOfResults.gameEnd.TTtFNS['91-100'].I,
        this.estimationOfResults.gameEnd.TTtFNS['91-100'].SS,
        this.estimationOfResults.gameEnd.TTtFNS['91-100'].Panic,
        this.estimationOfResults.gameEnd.TTtFNS['91-100'].F];
    } else if (time < 100 && time <= 115) {
      this.gameScore.endTime = [
        this.estimationOfResults.gameEnd.TTtFNS['101-115'].LC,
        this.estimationOfResults.gameEnd.TTtFNS['101-115'].BTM,
        this.estimationOfResults.gameEnd.TTtFNS['101-115'].P,
        this.estimationOfResults.gameEnd.TTtFNS['101-115'].NT,
        this.estimationOfResults.gameEnd.TTtFNS['101-115'].LR,
        this.estimationOfResults.gameEnd.TTtFNS['101-115'].I,
        this.estimationOfResults.gameEnd.TTtFNS['101-115'].SS,
        this.estimationOfResults.gameEnd.TTtFNS['101-115'].Panic,
        this.estimationOfResults.gameEnd.TTtFNS['101-115'].F];
    } else if (time > 116) {
      this.gameScore.endTime = [
        this.estimationOfResults.gameEnd.TTtFNS['116+'].LC,
        this.estimationOfResults.gameEnd.TTtFNS['116+'].BTM,
        this.estimationOfResults.gameEnd.TTtFNS['116+'].P,
        this.estimationOfResults.gameEnd.TTtFNS['116+'].NT,
        this.estimationOfResults.gameEnd.TTtFNS['116+'].LR,
        this.estimationOfResults.gameEnd.TTtFNS['116+'].I,
        this.estimationOfResults.gameEnd.TTtFNS['116+'].SS,
        this.estimationOfResults.gameEnd.TTtFNS['116+'].Panic,
        this.estimationOfResults.gameEnd.TTtFNS['116+'].F];
    }
    console.log(this.gameScore.endTime, '5 Game END');
    alert(this.gameScore.endTime, '5 Game END');
  }


  gameStatistic() {
    let lowConfidence = 0;
    let badTimeMan = 0;
    let perfectionism = 0;
    let negThink = 0;
    let lackRicuz = 0;
    let impulsivity = 0;
    let slowStarter = 0;
    let panic = 0;
    let frustration = 0;

    if (this.gameScore.parkinglot !== {}) {
      lowConfidence += this.gameScore.parkinglot[0];
      badTimeMan += this.gameScore.parkinglot[1];
      perfectionism += this.gameScore.parkinglot[2];
      negThink += this.gameScore.parkinglot[3];
      lackRicuz += this.gameScore.parkinglot[4];
      impulsivity += this.gameScore.parkinglot[5];
      slowStarter += this.gameScore.parkinglot[6];
      panic += this.gameScore.parkinglot[7];
      frustration += this.gameScore.parkinglot[8];
    }

    if (this.gameScore.parkinglotLast !== {}) {
      lowConfidence += this.gameScore.parkinglotLast[0];
      badTimeMan += this.gameScore.parkinglotLast[1];
      perfectionism += this.gameScore.parkinglotLast[2];
      negThink += this.gameScore.parkinglotLast[3];
      lackRicuz += this.gameScore.parkinglotLast[4];
      impulsivity += this.gameScore.parkinglotLast[5];
      slowStarter += this.gameScore.parkinglotLast[6];
      panic += this.gameScore.parkinglotLast[7];
      frustration += this.gameScore.parkinglotLast[8];
    }

    if (this.gameScore.mazerace !== {}) {
      lowConfidence += this.gameScore.mazerace[0];
      badTimeMan += this.gameScore.mazerace[1];
      perfectionism += this.gameScore.mazerace[2];
      negThink += this.gameScore.mazerace[3];
      lackRicuz += this.gameScore.mazerace[4];
      impulsivity += this.gameScore.mazerace[5];
      slowStarter += this.gameScore.mazerace[6];
      panic += this.gameScore.mazerace[7];
      frustration += this.gameScore.mazerace[8];
    }

    if (this.gameScore.mousetrap !== {}) {
      lowConfidence += this.gameScore.mousetrap[0];
      badTimeMan += this.gameScore.mousetrap[1];
      perfectionism += this.gameScore.mousetrap[2];
      negThink += this.gameScore.mousetrap[3];
      lackRicuz += this.gameScore.mousetrap[4];
      impulsivity += this.gameScore.mousetrap[5];
      slowStarter += this.gameScore.mousetrap[6];
      panic += this.gameScore.mousetrap[7];
      frustration += this.gameScore.mousetrap[8];
    }

    if (this.gameScore.tower !== {}) {
      lowConfidence += this.gameScore.tower[0];
      badTimeMan += this.gameScore.tower[1];
      perfectionism += this.gameScore.tower[2];
      negThink += this.gameScore.tower[3];
      lackRicuz += this.gameScore.tower[4];
      impulsivity += this.gameScore.tower[5];
      slowStarter += this.gameScore.tower[6];
      panic += this.gameScore.tower[7];
      frustration += this.gameScore.tower[8];
    }

    if (this.gameScore.endTime !== {}) {
      lowConfidence += this.gameScore.endTime[0];
      badTimeMan += this.gameScore.endTime[1];
      perfectionism += this.gameScore.endTime[2];
      negThink += this.gameScore.endTime[3];
      lackRicuz += this.gameScore.endTime[4];
      impulsivity += this.gameScore.endTime[5];
      slowStarter += this.gameScore.endTime[6];
      panic += this.gameScore.endTime[7];
      frustration += this.gameScore.endTime[8];
    }

    this.userSum = {
      lowConfidence,
      badTimeMan,
      perfectionism,
      negThink,
      lackRicuz,
      impulsivity,
      slowStarter,
      panic,
      frustration,
    };

    this.connection.saveData(this.userSum, 'userSum');

    if (this.estimationOfResults.GP.UPDI.SA) {
      if (this.gameScore.selfAssessment === this.gameScore.gamesSuccessfullyCompleted && this.gameScore.selfAssessment !== 0) {
        this.gameSummary.selfAssessment = this.estimationOfResults.Feedback.SA['0']; alert('User succeeded the same number of games  predicted'); // 'You have a good sense of who you are and of your abilities to perform.';
      } else if (this.gameScore.selfAssessment < this.gameScore.gamesSuccessfullyCompleted) {
        alert('User succeeded 2  games or more than predicted'); this.gameSummary.selfAssessment = this.estimationOfResults.Feedback.SA['2-4'];
      } else if (this.gameScore.gamesSuccessfullyCompleted >= 2) { alert('User succeeded 2  games or more than predicted'); this.gameSummary.selfAssessment = this.estimationOfResults.Feedback.SA['2-4']; } // 'You may have some self-limiting beliefs causing you to doubt your abilities. It is important t for you to study hard, be prepared and then believe and trust yourself. Focus on your goals and become aware of the “little voice” in your head that may be overly negative.'; }
    }
    if (this.estimationOfResults.GP.UPDI.GSC) {
      if (this.gameScore.gamesSuccessfullyCompleted === 3) {
        this.gameSummary.gamesSuccessfullyCompleted = this.estimationOfResults.Feedback.GSC['3']; alert('User succeeded completed 3 games');// 'You manage stress well.  In order to reach your peak performance, practice your routine in order to stay focused and positive.';
      } else if (this.gameScore.gamesSuccessfullyCompleted >= 4) { alert('User succeeded completed 4 or more games'); this.gameSummary.gamesSuccessfullyCompleted = this.estimationOfResults.Feedback.GSC['4-5']; } // 'Your ability to manage stress is commendable. You are confident, focused and work well within a time frame. You stay positive, are quick to see possibilities and solve problems accurately. Practice your routine in order to stay focused and positive.'; }
    }

    if (this.estimationOfResults.GP.UBA['Low Confidence']) {
      if (lowConfidence > 5 && lowConfidence <= 10) {
        this.gameSummary.lowConfidence = this.estimationOfResults.Feedback.LC['5-10'];// ' If you see that you are getting overwhelmed and negative thoughts are appearing as the test gets closer, use the Positive Thinking tool in the app.';
      } else if (lowConfidence > 11 && lowConfidence <= 19) {
        this.gameSummary.lowConfidence = this.estimationOfResults.Feedback.LC['11-19']; // ' Be patient and trust that you have the ability. Spend time on the positive thinking tool in the app.';
      } else if (lowConfidence && lowConfidence >= 20) { this.gameSummary.lowConfidence = this.estimationOfResults.Feedback.LC['20+']; }// ' You may start questioning yourself and losing confidence if you don’t succeed. It’s important for you to stop, do your routine and then start the next question anew. Refocusing your attention is crucial in order to stay positive. Spend some extra time on the Positive Thinking tool in the app.'; }
    }

    if (this.estimationOfResults.GP.UBA['Bad Time Management']) {
      if (badTimeMan > 4 && badTimeMan <= 10) {
        this.gameSummary.badTimeManagement = this.estimationOfResults.Feedback.BTM['5-10'];// 'You manage the time well. The more practice tests you take, keeping your eye on the clock, the more you will improve your performance.';
      } else if (badTimeMan > 11 && badTimeMan <= 19) {
        this.gameSummary.badTimeManagement = this.estimationOfResults.Feedback.BTM['11-19']; // 'You must focus on the big picture and always be aware of the time. Spending too much time on a hard question or skipping it too quickly is not effective. During the practice tests keep in mind the time factor.';
      } else if (badTimeMan >= 20) { this.gameSummary.badTimeManagement = this.estimationOfResults.Feedback.BTM['20+']; } // 'You need to make a plan ahead of time on how long you can spend on each question (or section) and then adjust according to how you’re doing. You always need to be aware of the time and to pace yourself. '; }
    }

    if (this.estimationOfResults.GP.UBA.Perfectionism) {
      if (perfectionism > 10 && perfectionism <= 19) {
        this.gameSummary.perfectionism = this.estimationOfResults.Feedback.P['11-19']; // 'It’s important for you to be careful and accurate and it is difficult for you to let go of a question you feel you can solve';
      } else if (perfectionism >= 20) { this.gameSummary.perfectionism = this.estimationOfResults.Feedback.P['20+']; } // 'You are committed to carefully and accurately find solutions to difficult questions however, you may be spending too much time on a specific question.'; }
    }

    if (this.estimationOfResults.GP.UBA['Negative Thinking']) {
      if (negThink > 8 && negThink <= 19) {
        this.gameSummary.negativeThinking = this.estimationOfResults.Feedback.NT['9-19']; // 'When you are stressed, your negative inner voice may tell you that you “can’t” whereas you probably “can.” ';
      } else if (negThink >= 20) { this.gameSummary.negativeThinking = this.estimationOfResults.Feedback.NT['20+']; } // 'Your inner voice may be too self-critical and pessimistic which will prevent you from trusting your ability to perform. You may skip questions even though you know the answers. '; }
    }

    if (this.estimationOfResults.GP.UBA.Impulsivity) {
      if (impulsivity > 9 && impulsivity <= 19) {
        this.gameSummary.impulsivity = this.estimationOfResults.Feedback.I['10-19']; // 'Sometimes you begin a task, get confused and then read the instructions. Be sure to read and understand the instructions first.';
      } else if (impulsivity >= 20) { this.gameSummary.impulsivity = this.estimationOfResults.Feedback.I['20+']; } // 'You have a tendency to jump right in and tackle the task at hand. It is crucial for you to take the time and READ THE INSTRUCTIONS  before you start to answer any question'; }
    }

    if (this.estimationOfResults.GP.UBA['Slow starter']) {
      if (slowStarter > 9 && slowStarter <= 19) {
        this.gameSummary.slowStarter = this.estimationOfResults.Feedback.SS['10-19']; // 'You have a tendency to start slowly. Before you begin the test, use your routine to get focused and into your zone so you start with confidence.';
      } else if (slowStarter >= 20) { this.gameSummary.slowStarter = this.estimationOfResults.Feedback.SS['20+']; } // 'You may get overwhelmed when beginning the test.  Try to get focused and into your zone before the test starts by using your routine.'; }
    }

    if (this.estimationOfResults.GP.UBA.Panic) {
      if (panic > 4 && panic <= 10) {
        this.gameSummary.panic = this.estimationOfResults.Feedback.Panic['5-10']; // 'If you see that you are getting overwhelmed and negative thoughts are appearing as the test gets closer, use the Positive Thinking tool in the app.';
      } else if (panic > 10) { this.gameSummary.panic = this.estimationOfResults.Feedback.Panic['11+']; } // 'You have a tendency to stress out when faced with a question that  is unfamiliar to you. '; }
    }

    if (this.estimationOfResults.GP.UBA.Frustration) {
      if (frustration > 4 && frustration <= 10) {
        this.gameSummary.frustration = this.estimationOfResults.Feedback.F['5-10']; // 'You may get frustrated and lose your cool when you find a question difficult. Stop, take a deep breath and do your routine. Focus on the physical tools in the app.';
      } else if (frustration > 10) { this.gameSummary.frustration = this.estimationOfResults.Feedback.F['10+']; } // 'You have a tendency to get frustrated and angry and when you find a question difficult. You must stop, do your routine and gain your composure. Focus on the physical tools in the app.'; }
    }

    if (this.estimationOfResults.GP.UBA['Lack of Concentration']) {
      if (lackRicuz > 5 && lackRicuz <= 10) {
        this.gameSummary.concentration = this.estimationOfResults.Feedback.C['5-10']; // 'Your focus is good. During the test, use your power word if you lose concentration and need to refocus. Check out the stress and recovery section.';
      } else if (lackRicuz > 10 && lackRicuz <= 19) {
        this.gameSummary.concentration = this.estimationOfResults.Feedback.C['10-19']; // 'Concentration during the test may be difficult for you when you’re feeling the pressure. It’s important to use your power word to get re-focused and to practice your routine. Check out the stress and recovery section.';
      } else if (lackRicuz >= 20) { this.gameSummary.concentration = this.estimationOfResults.Feedback.C['20+']; }// 'It may be hard for you to be totally focused during the test. Use the concentration tools to bring your mind back. Check out the stress and recovery section.'; }
    }
    if (this.estimationOfResults.GP.UPDI.MM) {
      if (this.gameScore.muteMusic === 1) {
        this.gameSummary.muteMusic = this.estimationOfResults.Feedback.MM.true; // 'Your brain processes information better in a quiet environment. Find a quiet place to study with as little background noise as possible.';
      } else { this.gameSummary.muteMusic = ''; }
    }
  }
}

GamesService.$inject = ['gameSummaryValue', 'gameScoreValue', 'estimationOfResults', 'connection', '$window', '$document'];
module.exports = GamesService;
