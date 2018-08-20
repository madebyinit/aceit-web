class GamesService {
  constructor(
    gameSummaryValue, gameScoreValue, estimationOfResults,
    connection, $window, $document,
    parkingLotService, towerService, mouseGameService, mazeraceService,
  ) { // eslint-disable-line
    this.gameScore = gameScoreValue;
    this.gameSummary = gameSummaryValue;
    this.estimationOfResults = estimationOfResults;
    this.connection = connection;
    this.window = $window;
    this.document = $document;
    this.gameStatus = {};
    this.parkingLotService = parkingLotService;
    this.towerService = towerService;
    this.mouseGameService = mouseGameService;
    this.mazeraceService = mazeraceService;
  }

  setMute(data) {
    this.gameScore.muteMusic = data;
  }

  setSelfassestment(data) {
    this.gameScore.selfAssessment = data;
  }

  setgamesSuccessfullyCompleted(data) {
    this.gameScore.gamesSuccessfullyCompleted = data;
  }

  setGameStatus(data) {
    this.gameStatus = data;
  }

  getGameResult(gameName, durationG, duration, noOfMoves, instructionsClickCount, win, firstMoveTime) {
    console.log(gameName);
    switch (gameName) {
      case 'parkinglot':
        this.parkingLotService.end(duration, noOfMoves, instructionsClickCount, win, firstMoveTime);
        break;
      case 'tower':
        this.towerService.end(duration, noOfMoves, instructionsClickCount, win, firstMoveTime);
        break;
      case 'mazerace':
        this.mazeraceService.end(duration + durationG, noOfMoves, instructionsClickCount, win, firstMoveTime);
        break;
      case 'mousetrap':
        this.mouseGameService.end(duration + durationG, noOfMoves, instructionsClickCount, win, firstMoveTime);
        break;
      case 'parkinglotLast':
        this.parkingLotService.endLastGame(duration, noOfMoves, instructionsClickCount, win, firstMoveTime);
        break;
      default:
        break;
    }

    // const { alert } = this.window;
    // alert(`duration = ${result.duration}`);
    // alert(`noOfMoves = ${result.noOfMoves}`);
    // alert(`instructionsClickCount = ${result.instructionsClickCount}`);
    // alert(`win = ${result.win}`);
    // alert(`firstMoveTime = ${result.firstMoveTime}`);
  }

  TotalTimeFOrLastGame(time) {
    console.log('TIME', time, 'TIME');

    if (this.gameScore.endTime[0] === undefined) {
      this.gameScore.endTime[0] = 0;
      this.gameScore.endTime[1] = 0;
      this.gameScore.endTime[2] = 0;
      this.gameScore.endTime[3] = 0;
      this.gameScore.endTime[4] = 0;
      this.gameScore.endTime[5] = 0;
      this.gameScore.endTime[6] = 0;
      this.gameScore.endTime[7] = 0;
      this.gameScore.endTime[8] = 0;
    }

    if (time <= 10) {
      this.TotalTimeFOrLastGameEndFunction('0-10', time);
    } else if (time > 10 && time <= 20) {
      this.TotalTimeFOrLastGameEndFunction('11-20', time);
    } else if (time > 20 && time <= 30) {
      this.TotalTimeFOrLastGameEndFunction('21-30', time);
    } else if (time > 30 && time <= 40) {
      this.TotalTimeFOrLastGameEndFunction('31-40', time);
    } else if (time > 40 && time <= 50) {
      this.TotalTimeFOrLastGameEndFunction('41-50', time);
    } else if (time > 50) {
      this.TotalTimeFOrLastGameEndFunction('51+', time);
    }
  }

  TotalTimeFOrLastGameEndFunction(key, time) {
    this.gameScore.endTime[0] += this.estimationOfResults.gameEnd.TTfLG[key].LC;
    this.gameScore.endTime[1] += this.estimationOfResults.gameEnd.TTfLG[key].BTM;
    this.gameScore.endTime[2] += this.estimationOfResults.gameEnd.TTfLG[key].P;
    this.gameScore.endTime[3] += this.estimationOfResults.gameEnd.TTfLG[key].NT;
    this.gameScore.endTime[4] += this.estimationOfResults.gameEnd.TTfLG[key].LR;
    this.gameScore.endTime[5] += this.estimationOfResults.gameEnd.TTfLG[key].I;
    this.gameScore.endTime[6] += this.estimationOfResults.gameEnd.TTfLG[key].SS;
    this.gameScore.endTime[7] += this.estimationOfResults.gameEnd.TTfLG[key].Panic;
    this.gameScore.endTime[8] += this.estimationOfResults.gameEnd.TTfLG[key].F;

    alert(`Total Time for Last Game ${time} - 
    lowConfidence = ${this.estimationOfResults.gameEnd.TTfLG[key].LC} 
    badTimeMan = ${this.estimationOfResults.gameEnd.TTfLG[key].BTM} 
    perfectionism = ${this.estimationOfResults.gameEnd.TTfLG[key].P} 
    negThink = ${this.estimationOfResults.gameEnd.TTfLG[key].NT} 
    lackRicuz = ${this.estimationOfResults.gameEnd.TTfLG[key].LR} 
    impulsivity = ${this.estimationOfResults.gameEnd.TTfLG[key].I} 
    slowStarter = ${this.estimationOfResults.gameEnd.TTfLG[key].SS} 
    panic = ${this.estimationOfResults.gameEnd.TTfLG[key].Panic} 
    frustration = ${this.estimationOfResults.gameEnd.TTfLG[key].F}`);

  console.log(this.gameScore.endTime, 'Total Time FOr Last Game');
  // alert(`Total Time for Last Game ${time} - lowConfidence = ${this.gameScore.endTime[0]} badTimeMan = ${this.gameScore.endTime[1]} perfectionism = ${this.gameScore.endTime[2]} negThink = ${this.gameScore.endTime[3]} lackRicuz = ${this.gameScore.endTime[4]} impulsivity = ${this.gameScore.endTime[5]} slowStarter = ${this.gameScore.endTime[6]} panic = ${this.gameScore.endTime[7]} frustration = ${this.gameScore.endTime[8]}`);

  }

  TotalTimeFOrFourthGame(time) {
    console.log(time, 'TotalTimeFOrFourthGame');
    // Game Duration When Time is Up
    if (time <= 30) {
      this.TotalTimeFOrFourthGameEndFunction('0-30', time);
    } else if (time > 30 && time <= 40) {
      this.TotalTimeFOrFourthGameEndFunction('31-40', time);
    } else if (time > 40 && time <= 50) {
      this.TotalTimeFOrFourthGameEndFunction('41-50', time);
    } else if (time > 50 && time <= 60) {
      this.TotalTimeFOrFourthGameEndFunction('51-60', time);
    } else if (time > 60 && time <= 70) {
      this.TotalTimeFOrFourthGameEndFunction('61-70', time);
    } else if (time > 70 && time <= 80) {
      this.TotalTimeFOrFourthGameEndFunction('71-80', time);
    } else if (time > 80 && time <= 90) {
      this.TotalTimeFOrFourthGameEndFunction('81-90', time);
    } else if (time > 90 && time <= 100) {
      this.TotalTimeFOrFourthGameEndFunction('91-100', time);
    } else if (time > 100 && time <= 115) {
      this.TotalTimeFOrFourthGameEndFunction('101-115', time);
    } else if (time > 116) {
      this.TotalTimeFOrFourthGameEndFunction('116+');
    }
  }

  TotalTimeFOrFourthGameEndFunction(key, time) {
    this.gameScore.endTime = [
      this.estimationOfResults.mazerace.CGDETiU[key].LC,
      this.estimationOfResults.mazerace.CGDETiU[key].BTM,
      this.estimationOfResults.mazerace.CGDETiU[key].P,
      this.estimationOfResults.mazerace.CGDETiU[key].NT,
      this.estimationOfResults.mazerace.CGDETiU[key].LR,
      this.estimationOfResults.mazerace.CGDETiU[key].I,
      this.estimationOfResults.mazerace.CGDETiU[key].SS,
      this.estimationOfResults.mazerace.CGDETiU[key].Panic,
      this.estimationOfResults.mazerace.CGDETiU[key].F,
    ];

    console.log(this.gameScore.endTime, '4 Game END');
    alert(`TotalTimeFOrFourthGame ${time} - lowConfidence = ${this.gameScore.endTime[0]} badTimeMan = ${this.gameScore.endTime[1]} perfectionism = ${this.gameScore.endTime[2]} negThink = ${this.gameScore.endTime[3]} lackRicuz = ${this.gameScore.endTime[4]} impulsivity = ${this.gameScore.endTime[5]} slowStarter = ${this.gameScore.endTime[6]} panic = ${this.gameScore.endTime[7]} frustration = ${this.gameScore.endTime[8]}`);
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
    alert(`EndTimeInGame ${Param} - lowConfidence = ${this.gameScore.endTime[0]} badTimeMan = ${this.gameScore.endTime[1]} perfectionism = ${this.gameScore.endTime[2]} negThink = ${this.gameScore.endTime[3]} lackRicuz = ${this.gameScore.endTime[4]} impulsivity = ${this.gameScore.endTime[5]} slowStarter = ${this.gameScore.endTime[6]} panic = ${this.gameScore.endTime[7]} frustration = ${this.gameScore.endTime[8]}`);
  }

  EndTimeInLastGame(time) {
    console.log(time, 'EndTimeInLastGame');
    if (time <= 30) {
      this.EndTimeInLastGameEndFunction('0-30', time);
    } else if (time > 30 && time <= 40) {
      this.EndTimeInLastGameEndFunction('31-40', time);
    } else if (time > 40 && time <= 50) {
      this.EndTimeInLastGameEndFunction('41-50', time);
    } else if (time > 50 && time <= 60) {
      this.EndTimeInLastGameEndFunction('51-60', time);
    } else if (time > 60 && time <= 70) {
      this.EndTimeInLastGameEndFunction('61-70', time);
    } else if (time > 70 && time <= 80) {
      this.EndTimeInLastGameEndFunction('71-80', time);
    } else if (time > 80 && time <= 90) {
      this.EndTimeInLastGameEndFunction('81-90', time);
    } else if (time > 90 && time <= 100) {
      this.EndTimeInLastGameEndFunction('91-100', time);
    } else if (time > 100 && time <= 115) {
      this.EndTimeInLastGameEndFunction('101-115', time);
    } else if (time > 116) {
      this.EndTimeInLastGameEndFunction('116+', time);
    }
  }

  EndTimeInLastGameEndFunction(key, time) {
    this.gameScore.endTime = [
      this.estimationOfResults.gameEnd.TTtFNS[key].LC,
      this.estimationOfResults.gameEnd.TTtFNS[key].BTM,
      this.estimationOfResults.gameEnd.TTtFNS[key].P,
      this.estimationOfResults.gameEnd.TTtFNS[key].NT,
      this.estimationOfResults.gameEnd.TTtFNS[key].LR,
      this.estimationOfResults.gameEnd.TTtFNS[key].I,
      this.estimationOfResults.gameEnd.TTtFNS[key].SS,
      this.estimationOfResults.gameEnd.TTtFNS[key].Panic,
      this.estimationOfResults.gameEnd.TTtFNS[key].F];

    console.log(this.gameScore.endTime, '5 Game END');
    alert(`Total Time to Finish Last Game NOT Successfully - ${time} lowConfidence = ${this.gameScore.endTime[0]} badTimeMan = ${this.gameScore.endTime[1]} perfectionism = ${this.gameScore.endTime[2]} negThink = ${this.gameScore.endTime[3]} lackRicuz = ${this.gameScore.endTime[4]} impulsivity = ${this.gameScore.endTime[5]} slowStarter = ${this.gameScore.endTime[6]} panic = ${this.gameScore.endTime[7]} frustration = ${this.gameScore.endTime[8]}`);
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

    if (this.gameScore.parkinglotLast.length !== undefined) {
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

    if (this.gameScore.mazerace.length !== undefined) {
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

    if (this.gameScore.mousetrap.length !== undefined) {
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

    if (this.gameScore.tower.length !== undefined) {
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

    if (this.gameScore.endTime.length !== undefined) {
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

    this.gameScore.summary = [
      lowConfidence,
      badTimeMan,
      perfectionism,
      negThink,
      lackRicuz,
      impulsivity,
      slowStarter,
      panic,
      frustration];

    // this.connection.saveData(this.gameScore.summary, 'userSum');
    this.gameSummary.selfAssessment = '';
    this.gameSummary.gamesSuccessfullyCompleted = '';
    this.gameSummary.lowConfidence = '';
    this.gameSummary.badTimeMan = '';
    this.gameSummary.perfectionism = '';
    this.gameSummary.negativeThinking = '';
    this.gameSummary.impulsivity = '';
    this.gameSummary.slowStarter = '';
    this.gameSummary.panic = '';
    this.gameSummary.frustration = '';
    this.gameSummary.concentration = '';
    this.gameSummary.muteMusic = '';

    if (this.estimationOfResults.GP.UPDI.SA) {
      if (this.gameScore.selfAssessment === this.gameScore.gamesSuccessfullyCompleted && this.gameScore.selfAssessment !== 0) {
        this.gameSummary.selfAssessment = this.estimationOfResults.Feedback.SA['0'];
      } else if ((this.gameScore.selfAssessment + 2) <= this.gameScore.gamesSuccessfullyCompleted) {
        this.gameSummary.selfAssessment = this.estimationOfResults.Feedback.SA['2-4'];
      }
    }
    //----------------------------------------------------------------------------------------
    if (this.estimationOfResults.GP.UPDI.GSC) {
      if (this.gameScore.gamesSuccessfullyCompleted >= this.estimationOfResults.feedbackCounter.GSC['3'][0] && this.gameScore.gamesSuccessfullyCompleted <= this.estimationOfResults.feedbackCounter.GSC['3'][1]) {
        this.gameSummary.gamesSuccessfullyCompleted = this.estimationOfResults.Feedback.GSC['3'];
      } else if (this.gameScore.gamesSuccessfullyCompleted >= this.estimationOfResults.feedbackCounter.GSC['4-5'][0] && this.gameScore.gamesSuccessfullyCompleted <= this.estimationOfResults.feedbackCounter.GSC['4-5'][1]) {
        this.gameSummary.gamesSuccessfullyCompleted = this.estimationOfResults.Feedback.GSC['4-5'];
      }
    }

    if (this.estimationOfResults.GP.UBA['Low Confidence']) {
      if (lowConfidence >= this.estimationOfResults.feedbackCounter.LC['5-10'][0] && lowConfidence <= this.estimationOfResults.feedbackCounter.LC['5-10'][1]) {
        this.gameSummary.lowConfidence = this.estimationOfResults.Feedback.LC['5-10'];
      } else if (lowConfidence >= this.estimationOfResults.feedbackCounter.LC['11-19'][0] && lowConfidence <= this.estimationOfResults.feedbackCounter.LC['11-19'][1]) {
        this.gameSummary.lowConfidence = this.estimationOfResults.Feedback.LC['11-19'];
      } else if (lowConfidence >= this.estimationOfResults.feedbackCounter.LC['20+'][0] && lowConfidence <= this.estimationOfResults.feedbackCounter.LC['20+'][1]) { this.gameSummary.lowConfidence = this.estimationOfResults.Feedback.LC['20+']; }// ' You may start questioning yourself and losing confidence if you don’t succeed. It’s important for you to stop, do your routine and then start the next question anew. Refocusing your attention is crucial in order to stay positive. Spend some extra time on the Positive Thinking tool in the app.'; }
    }

    if (this.estimationOfResults.GP.UBA['Bad Time Management']) {
      if (badTimeMan >= this.estimationOfResults.feedbackCounter.BTM['5-10'][0] && badTimeMan <= this.estimationOfResults.feedbackCounter.BTM['5-10'][1]) {
        this.gameSummary.badTimeManagement = this.estimationOfResults.Feedback.BTM['11, 19'];
      } else if (badTimeMan >= this.estimationOfResults.feedbackCounter.BTM['11-19'][0] && badTimeMan <= this.estimationOfResults.feedbackCounter.BTM['11-19'][1]) {
        this.gameSummary.badTimeManagement = this.estimationOfResults.Feedback.BTM['11-19'];
      } else if (badTimeMan >= this.estimationOfResults.feedbackCounter.BTM['20+'][0] && badTimeMan <= this.estimationOfResults.feedbackCounter.BTM['20+'][1]) { this.gameSummary.badTimeManagement = this.estimationOfResults.Feedback.BTM['20+']; }
    }

    if (this.estimationOfResults.GP.UBA.Perfectionism) {
      if (perfectionism >= this.estimationOfResults.feedbackCounter.P['11-19'][0] && perfectionism <= this.estimationOfResults.feedbackCounter.P['11-19'][1]) {
        this.gameSummary.perfectionism = this.estimationOfResults.Feedback.P['11-19'];
      } else if (perfectionism >= this.estimationOfResults.feedbackCounter.P['20+'][0] && perfectionism <= this.estimationOfResults.feedbackCounter.P['20+'][1]) { this.gameSummary.perfectionism = this.estimationOfResults.Feedback.P['20+']; }
    }

    if (this.estimationOfResults.GP.UBA['Negative Thinking']) {
      if (negThink >= this.estimationOfResults.feedbackCounter.NT['9-19'][0] && negThink <= this.estimationOfResults.feedbackCounter.NT['9-19'][1]) {
        this.gameSummary.negativeThinking = this.estimationOfResults.Feedback.NT['9-19'];
      } else if (negThink >= this.estimationOfResults.feedbackCounter.NT['20+'][0] && negThink <= this.estimationOfResults.feedbackCounter.NT['20+'][0]) { this.gameSummary.negativeThinking = this.estimationOfResults.Feedback.NT['20+']; }
    }

    if (this.estimationOfResults.GP.UBA.Impulsivity) {
      if (impulsivity >= this.estimationOfResults.feedbackCounter.I['10-19'][0] && impulsivity <= this.estimationOfResults.feedbackCounter.I['10-19'][1]) {
        this.gameSummary.impulsivity = this.estimationOfResults.Feedback.I['10-19'];
      } else if (impulsivity >= this.estimationOfResults.feedbackCounter.I['20+'][0] && impulsivity <= this.estimationOfResults.feedbackCounter.I['20+'][1]) { this.gameSummary.impulsivity = this.estimationOfResults.Feedback.I['20+']; }
    }

    if (this.estimationOfResults.GP.UBA['Slow starter']) {
      if (slowStarter >= this.estimationOfResults.feedbackCounter.SS['10-19'][0] && slowStarter <= this.estimationOfResults.feedbackCounter.SS['10-19'][1]) {
        this.gameSummary.slowStarter = this.estimationOfResults.Feedback.SS['10-19'];
      } else if (slowStarter >= this.estimationOfResults.feedbackCounter.SS['20+'][0] && slowStarter <= this.estimationOfResults.feedbackCounter.SS['20+'][1]) { this.gameSummary.slowStarter = this.estimationOfResults.Feedback.SS['20+']; }
    }

    if (this.estimationOfResults.GP.UBA.Panic) {
      if (panic >= this.estimationOfResults.feedbackCounter.Panic['5-10'][0] && panic <= this.estimationOfResults.feedbackCounter.Panic['5-10'][1]) {
        this.gameSummary.panic = this.estimationOfResults.Feedback.Panic['5-10'];
      } else if (panic >= this.estimationOfResults.feedbackCounter.Panic['11+'][0] && panic <= this.estimationOfResults.feedbackCounter.Panic['11+'][1]) { this.gameSummary.panic = this.estimationOfResults.Feedback.Panic['11+']; }
    }

    if (this.estimationOfResults.GP.UBA.Frustration) {
      if (frustration >= this.estimationOfResults.feedbackCounter.F['5-9'][0] && frustration <= this.estimationOfResults.feedbackCounter.F['5-9'][1]) {
        this.gameSummary.frustration = this.estimationOfResults.Feedback.F['5-9'];
      } else if (frustration > this.estimationOfResults.feedbackCounter.F['10+'][0] && frustration <= this.estimationOfResults.feedbackCounter.F['10+'][1]) { this.gameSummary.frustration = this.estimationOfResults.Feedback.F['10+']; }
    }

    if (this.estimationOfResults.GP.UBA['Lack of Concentration']) {
      if (lackRicuz >= this.estimationOfResults.feedbackCounter.C['5-10'][0] && lackRicuz <= this.estimationOfResults.feedbackCounter.C['5-10'][1]) {
        this.gameSummary.concentration = this.estimationOfResults.Feedback.C['5-10'];
      } else if (lackRicuz >= this.estimationOfResults.feedbackCounter.C['10-19'][0] && lackRicuz <= this.estimationOfResults.feedbackCounter.C['10-19'][1]) {
        this.gameSummary.concentration = this.estimationOfResults.Feedback.C['10-19'];
      } else if (lackRicuz >= this.estimationOfResults.feedbackCounter.C['20+'][0] && lackRicuz <= this.estimationOfResults.feedbackCounter.C['20+'][1]) { this.gameSummary.concentration = this.estimationOfResults.Feedback.C['20+']; }
    }
    if (this.estimationOfResults.GP.UPDI.MM) {
      if (this.gameScore.muteMusic === this.estimationOfResults.feedbackCounter.MM.true[0] && this.gameScore.muteMusic === this.estimationOfResults.feedbackCounter.MM.true[1]) {
        this.gameSummary.muteMusic = this.estimationOfResults.Feedback.MM.true;
      } else { this.gameSummary.muteMusic = ''; this.gameScore.muteMusic = 0; }
    }

    const space = '                                          ';

    alert(`parkinglot -  lowConfidence ${this.gameScore.parkinglot[0]} badTimeMan ${this.gameScore.parkinglot[1]} perfectionism ${this.gameScore.parkinglot[2]} negThink ${this.gameScore.parkinglot[3]} lackRicuz ${this.gameScore.parkinglot[4]} impulsivity ${this.gameScore.parkinglot[5]} slowStarter ${this.gameScore.parkinglot[6]} panic ${this.gameScore.parkinglot[7]} frustration ${this.gameScore.parkinglot[8]} ${space}
  tower - lowConfidence ${this.gameScore.tower[0]} badTimeMan ${this.gameScore.tower[1]} perfectionism ${this.gameScore.tower[2]} negThink ${this.gameScore.tower[3]} lackRicuz ${this.gameScore.tower[4]} impulsivity ${this.gameScore.tower[5]} slowStarter ${this.gameScore.tower[6]} panic ${this.gameScore.tower[7]} frustration ${this.gameScore.tower[8]} ${space}
  mousetrap - lowConfidence ${this.gameScore.mousetrap[0]} badTimeMan ${this.gameScore.mousetrap[1]} perfectionism ${this.gameScore.mousetrap[2]} negThink ${this.gameScore.mousetrap[3]} lackRicuz ${this.gameScore.mousetrap[4]} impulsivity ${this.gameScore.mousetrap[5]} slowStarter ${this.gameScore.mousetrap[6]} panic ${this.gameScore.mousetrap[7]} frustration ${this.gameScore.mousetrap[8]} ${space}
  mazerace - lowConfidence ${this.gameScore.mazerace[0]} badTimeMan ${this.gameScore.mazerace[1]} perfectionism ${this.gameScore.mazerace[2]} negThink ${this.gameScore.mazerace[3]} lackRicuz ${this.gameScore.mazerace[4]} impulsivity ${this.gameScore.mazerace[5]} slowStarter ${this.gameScore.mazerace[6]} panic ${this.gameScore.mazerace[7]} frustration ${this.gameScore.mazerace[8]} ${space}
  parkinglotLast - lowConfidence ${this.gameScore.parkinglotLast[0]} badTimeMan ${this.gameScore.parkinglotLast[1]} perfectionism ${this.gameScore.parkinglotLast[2]} negThink ${this.gameScore.parkinglotLast[3]} lackRicuz ${this.gameScore.parkinglotLast[4]} impulsivity ${this.gameScore.parkinglotLast[5]} slowStarter ${this.gameScore.parkinglotLast[6]} panic ${this.gameScore.parkinglotLast[7]} frustration ${this.gameScore.parkinglotLast[8]} ${space}
  endTime - lowConfidence ${this.gameScore.endTime[0]} badTimeMan ${this.gameScore.endTime[1]} perfectionism ${this.gameScore.endTime[2]} negThink ${this.gameScore.endTime[3]} lackRicuz ${this.gameScore.endTime[4]} impulsivity ${this.gameScore.endTime[5]} slowStarter ${this.gameScore.endTime[6]} panic ${this.gameScore.endTime[7]} frustration ${this.gameScore.endTime[8]} ${space}
  Sum of points - lowConfidence ${lowConfidence} badTimeMan ${badTimeMan} perfectionism ${perfectionism} negThink ${negThink} lackRicuz ${lackRicuz} impulsivity ${impulsivity} slowStarter ${slowStarter} panic ${panic} frustration ${frustration} ${space}
  selfAssessment- ${this.gameScore.selfAssessment} gamesSuccessfullyCompleted ${this.gameScore.gamesSuccessfullyCompleted} muteMusic ${this.gameScore.muteMusic}`);
  }
}

GamesService.$inject = ['gameSummaryValue', 'gameScoreValue', 'estimationOfResults', 'connection', '$window', '$document', 'parkingLotService', 'towerService', 'mouseGameService', 'mazeraceService'];
module.exports = GamesService;
