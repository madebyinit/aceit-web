class MouseGameService {
  constructor(gameScoreValue, orderOfGames, estimationOfResults) {
    this.gameScore = gameScoreValue;
    this.orderOfGames = orderOfGames;
    this.estimationOfResults = estimationOfResults;
  }

  end(duration, noOfMoves, instructionsClickCount, win, firstMoveTime) {
    console.log(duration, "MOUSE DURATION");
    const result = {
      lowConfidence: 0,
      badTimeMan: 0,
      perfectionism: 0,
      negThink: 0,
      lackRicuz: 0,
      impulsivity: 0,
      slowStarter: 0,
      panic: 0,
      frustration: 0,
    };
    const fromGame = (`duration = ${duration} firstMoveTime = ${firstMoveTime} noOfMoves = ${noOfMoves} instructionsClickCount = ${instructionsClickCount} win = ${win} `);
    let instruct = '';
    let durationgame = '';
    const space = '                                                                                                     ';
    if (win) {
      this.gameScore.gamesSuccessfullyCompleted += 1;
    }

    // Successful Game Duration
    if (this.orderOfGames.UPDI.mousetrap.SGD) {
      if (duration > 0 && duration <= 40000) {
        result.lowConfidence += this.estimationOfResults.mousetrap.SGD['0-40'].LC;
        result.badTimeMan += this.estimationOfResults.mousetrap.SGD['0-40'].BTM;
        result.perfectionism += this.estimationOfResults.mousetrap.SGD['0-40'].P;
        result.negThink += this.estimationOfResults.mousetrap.SGD['0-40'].NT;
        result.lackRicuz += this.estimationOfResults.mousetrap.SGD['0-40'].LR;
        result.impulsivity += this.estimationOfResults.mousetrap.SGD['0-40'].I;
        result.slowStarter += this.estimationOfResults.mousetrap.SGD['0-40'].SS;
        result.panic += this.estimationOfResults.mousetrap.SGD['0-40'].Panic;
        result.frustration += this.estimationOfResults.mousetrap.SGD['0-40'].F;
        durationgame = (`${' Game Duration lowConfidence ='}${this.estimationOfResults.mousetrap.SGD['0-40'].LC} badTimeMan = ${this.estimationOfResults.mousetrap.SGD['0-40'].BTM} perfectionism = ${this.estimationOfResults.mousetrap.SGD['0-40'].P} negThink = ${this.estimationOfResults.mousetrap.SGD['0-40'].NT} lackRicuz = ${this.estimationOfResults.mousetrap.SGD['0-40'].LR} impulsivity = ${this.estimationOfResults.mousetrap.SGD['0-40'].I} slowStarter = ${this.estimationOfResults.mousetrap.SGD['0-40'].SS} panic = ${this.estimationOfResults.mousetrap.SGD['0-40'].Panic} frustration = ${this.estimationOfResults.mousetrap.SGD['0-40'].F} |`);
      } else if (duration > 40000 && duration <= 50000) {
        result.lowConfidence += this.estimationOfResults.mousetrap.SGD['41-50'].LC;
        result.badTimeMan += this.estimationOfResults.mousetrap.SGD['41-50'].BTM;
        result.perfectionism += this.estimationOfResults.mousetrap.SGD['41-50'].P;
        result.negThink += this.estimationOfResults.mousetrap.SGD['41-50'].NT;
        result.lackRicuz += this.estimationOfResults.mousetrap.SGD['41-50'].LR;
        result.impulsivity += this.estimationOfResults.mousetrap.SGD['41-50'].I;
        result.slowStarter += this.estimationOfResults.mousetrap.SGD['41-50'].SS;
        result.panic += this.estimationOfResults.mousetrap.SGD['41-50'].Panic;
        result.frustration += this.estimationOfResults.mousetrap.SGD['41-50'].F;
        durationgame = (`${' Game Duration lowConfidence ='}${this.estimationOfResults.mousetrap.SGD['41-50'].LC} badTimeMan = ${this.estimationOfResults.mousetrap.SGD['41-50'].BTM} perfectionism = ${this.estimationOfResults.mousetrap.SGD['41-50'].P} negThink = ${this.estimationOfResults.mousetrap.SGD['41-50'].NT} lackRicuz = ${this.estimationOfResults.mousetrap.SGD['41-50'].LR} impulsivity = ${this.estimationOfResults.mousetrap.SGD['41-50'].I} slowStarter = ${this.estimationOfResults.mousetrap.SGD['41-50'].SS} panic = ${this.estimationOfResults.mousetrap.SGD['41-50'].Panic} frustration = ${this.estimationOfResults.mousetrap.SGD['41-50'].F} |`);
      } else if (duration > 50000 && duration <= 60000) {
        result.lowConfidence += this.estimationOfResults.mousetrap.SGD['51-60'].LC;
        result.badTimeMan += this.estimationOfResults.mousetrap.SGD['51-60'].BTM;
        result.perfectionism += this.estimationOfResults.mousetrap.SGD['51-60'].P;
        result.negThink += this.estimationOfResults.mousetrap.SGD['51-60'].NT;
        result.lackRicuz += this.estimationOfResults.mousetrap.SGD['51-60'].LR;
        result.impulsivity += this.estimationOfResults.mousetrap.SGD['51-60'].I;
        result.slowStarter += this.estimationOfResults.mousetrap.SGD['51-60'].SS;
        result.panic += this.estimationOfResults.mousetrap.SGD['51-60'].Panic;
        result.frustration += this.estimationOfResults.mousetrap.SGD['51-60'].F;
        durationgame = (`${' Game Duration lowConfidence ='}${this.estimationOfResults.mousetrap.SGD['51-60'].LC} badTimeMan = ${this.estimationOfResults.mousetrap.SGD['51-60'].BTM} perfectionism = ${this.estimationOfResults.mousetrap.SGD['51-60'].P} negThink = ${this.estimationOfResults.mousetrap.SGD['51-60'].NT} lackRicuz = ${this.estimationOfResults.mousetrap.SGD['51-60'].LR} impulsivity = ${this.estimationOfResults.mousetrap.SGD['51-60'].I} slowStarter = ${this.estimationOfResults.mousetrap.SGD['51-60'].SS} panic = ${this.estimationOfResults.mousetrap.SGD['51-60'].Panic} frustration = ${this.estimationOfResults.mousetrap.SGD['51-60'].F} |`);
      } else if (duration > 60000 && duration <= 70000) {
        result.lowConfidence += this.estimationOfResults.mousetrap.SGD['61-70'].LC;
        result.badTimeMan += this.estimationOfResults.mousetrap.SGD['61-70'].BTM;
        result.perfectionism += this.estimationOfResults.mousetrap.SGD['61-70'].P;
        result.negThink += this.estimationOfResults.mousetrap.SGD['61-70'].NT;
        result.lackRicuz += this.estimationOfResults.mousetrap.SGD['61-70'].LR;
        result.impulsivity += this.estimationOfResults.mousetrap.SGD['61-70'].I;
        result.slowStarter += this.estimationOfResults.mousetrap.SGD['61-70'].SS;
        result.panic += this.estimationOfResults.mousetrap.SGD['61-70'].Panic;
        result.frustration += this.estimationOfResults.mousetrap.SGD['61-70'].F;
        durationgame = (`${' Game Duration lowConfidence ='}${this.estimationOfResults.mousetrap.SGD['61-70'].LC} badTimeMan = ${this.estimationOfResults.mousetrap.SGD['61-70'].BTM} perfectionism = ${this.estimationOfResults.mousetrap.SGD['61-70'].P} negThink = ${this.estimationOfResults.mousetrap.SGD['61-70'].NT} lackRicuz = ${this.estimationOfResults.mousetrap.SGD['61-70'].LR} impulsivity = ${this.estimationOfResults.mousetrap.SGD['61-70'].I} slowStarter = ${this.estimationOfResults.mousetrap.SGD['61-70'].SS} panic = ${this.estimationOfResults.mousetrap.SGD['61-70'].Panic} frustration = ${this.estimationOfResults.mousetrap.SGD['61-70'].F} |`);
      } else if (duration > 70000 && duration <= 80000) {
        result.lowConfidence += this.estimationOfResults.mousetrap.SGD['71-80'].LC;
        result.badTimeMan += this.estimationOfResults.mousetrap.SGD['71-80'].BTM;
        result.perfectionism += this.estimationOfResults.mousetrap.SGD['71-80'].P;
        result.negThink += this.estimationOfResults.mousetrap.SGD['71-80'].NT;
        result.lackRicuz += this.estimationOfResults.mousetrap.SGD['71-80'].LR;
        result.impulsivity += this.estimationOfResults.mousetrap.SGD['71-80'].I;
        result.slowStarter += this.estimationOfResults.mousetrap.SGD['71-80'].SS;
        result.panic += this.estimationOfResults.mousetrap.SGD['71-80'].Panic;
        result.frustration += this.estimationOfResults.mousetrap.SGD['71-80'].F;
        durationgame = (`${' Game Duration lowConfidence ='}${this.estimationOfResults.mousetrap.SGD['71-80'].LC} badTimeMan = ${this.estimationOfResults.mousetrap.SGD['71-80'].BTM} perfectionism = ${this.estimationOfResults.mousetrap.SGD['71-80'].P} negThink = ${this.estimationOfResults.mousetrap.SGD['71-80'].NT} lackRicuz = ${this.estimationOfResults.mousetrap.SGD['71-80'].LR} impulsivity = ${this.estimationOfResults.mousetrap.SGD['71-80'].I} slowStarter = ${this.estimationOfResults.mousetrap.SGD['71-80'].SS} panic = ${this.estimationOfResults.mousetrap.SGD['71-80'].Panic} frustration = ${this.estimationOfResults.mousetrap.SGD['71-80'].F} |`);
      } else if (duration > 80000 && duration <= 90000) {
        result.lowConfidence += this.estimationOfResults.mousetrap.SGD['81-90'].LC;
        result.badTimeMan += this.estimationOfResults.mousetrap.SGD['81-90'].BTM;
        result.perfectionism += this.estimationOfResults.mousetrap.SGD['81-90'].P;
        result.negThink += this.estimationOfResults.mousetrap.SGD['81-90'].NT;
        result.lackRicuz += this.estimationOfResults.mousetrap.SGD['81-90'].LR;
        result.impulsivity += this.estimationOfResults.mousetrap.SGD['81-90'].I;
        result.slowStarter += this.estimationOfResults.mousetrap.SGD['81-90'].SS;
        result.panic += this.estimationOfResults.mousetrap.SGD['81-90'].Panic;
        result.frustration += this.estimationOfResults.mousetrap.SGD['81-90'].F;
        durationgame = (`${' Game Duration lowConfidence ='}${this.estimationOfResults.mousetrap.SGD['81-90'].LC} badTimeMan = ${this.estimationOfResults.mousetrap.SGD['81-90'].BTM} perfectionism = ${this.estimationOfResults.mousetrap.SGD['81-90'].P} negThink = ${this.estimationOfResults.mousetrap.SGD['81-90'].NT} lackRicuz = ${this.estimationOfResults.mousetrap.SGD['81-90'].LR} impulsivity = ${this.estimationOfResults.mousetrap.SGD['81-90'].I} slowStarter = ${this.estimationOfResults.mousetrap.SGD['81-90'].SS} panic = ${this.estimationOfResults.mousetrap.SGD['81-90'].Panic} frustration = ${this.estimationOfResults.mousetrap.SGD['81-90'].F} |`);
      } else if (duration > 90000 && duration <= 100000) {
        result.lowConfidence += this.estimationOfResults.mousetrap.SGD['91-100'].LC;
        result.badTimeMan += this.estimationOfResults.mousetrap.SGD['91-100'].BTM;
        result.perfectionism += this.estimationOfResults.mousetrap.SGD['91-100'].P;
        result.negThink += this.estimationOfResults.mousetrap.SGD['91-100'].NT;
        result.lackRicuz += this.estimationOfResults.mousetrap.SGD['91-100'].LR;
        result.impulsivity += this.estimationOfResults.mousetrap.SGD['91-100'].I;
        result.slowStarter += this.estimationOfResults.mousetrap.SGD['91-100'].SS;
        result.panic += this.estimationOfResults.mousetrap.SGD['91-100'].Panic;
        result.frustration += this.estimationOfResults.mousetrap.SGD['91-100'].F;
        durationgame = (`${' Game Duration lowConfidence ='}${this.estimationOfResults.mousetrap.SGD['91-100'].LC} badTimeMan = ${this.estimationOfResults.mousetrap.SGD['91-100'].BTM} perfectionism = ${this.estimationOfResults.mousetrap.SGD['91-100'].P} negThink = ${this.estimationOfResults.mousetrap.SGD['91-100'].NT} lackRicuz = ${this.estimationOfResults.mousetrap.SGD['91-100'].LR} impulsivity = ${this.estimationOfResults.mousetrap.SGD['91-100'].I} slowStarter = ${this.estimationOfResults.mousetrap.SGD['91-100'].SS} panic = ${this.estimationOfResults.mousetrap.SGD['91-100'].Panic} frustration = ${this.estimationOfResults.mousetrap.SGD['91-100'].F} |`);
      } else if (duration > 100000 && duration <= 115000) {
        result.lowConfidence += this.estimationOfResults.mousetrap.SGD['101-115'].LC;
        result.badTimeMan += this.estimationOfResults.mousetrap.SGD['101-115'].BTM;
        result.perfectionism += this.estimationOfResults.mousetrap.SGD['101-115'].P;
        result.negThink += this.estimationOfResults.mousetrap.SGD['101-115'].NT;
        result.lackRicuz += this.estimationOfResults.mousetrap.SGD['101-115'].LR;
        result.impulsivity += this.estimationOfResults.mousetrap.SGD['101-115'].I;
        result.slowStarter += this.estimationOfResults.mousetrap.SGD['101-115'].SS;
        result.panic += this.estimationOfResults.mousetrap.SGD['101-115'].Panic;
        result.frustration += this.estimationOfResults.mousetrap.SGD['101-115'].F;
        durationgame = (`${' Game Duration lowConfidence ='}${this.estimationOfResults.mousetrap.SGD['101-115'].LC} badTimeMan = ${this.estimationOfResults.mousetrap.SGD['101-115'].BTM} perfectionism = ${this.estimationOfResults.mousetrap.SGD['101-115'].P} negThink = ${this.estimationOfResults.mousetrap.SGD['101-115'].NT} lackRicuz = ${this.estimationOfResults.mousetrap.SGD['101-115'].LR} impulsivity = ${this.estimationOfResults.mousetrap.SGD['101-115'].I} slowStarter = ${this.estimationOfResults.mousetrap.SGD['101-115'].SS} panic = ${this.estimationOfResults.mousetrap.SGD['101-115'].Panic} frustration = ${this.estimationOfResults.mousetrap.SGD['101-115'].F} |`);
      } else if (duration > 116000) {
        result.lowConfidence += this.estimationOfResults.mousetrap.SGD['116+'].LC;
        result.badTimeMan += this.estimationOfResults.mousetrap.SGD['116+'].BTM;
        result.perfectionism += this.estimationOfResults.mousetrap.SGD['116+'].P;
        result.negThink += this.estimationOfResults.mousetrap.SGD['116+'].NT;
        result.lackRicuz += this.estimationOfResults.mousetrap.SGD['116+'].LR;
        result.impulsivity += this.estimationOfResults.mousetrap.SGD['116+'].I;
        result.slowStarter += this.estimationOfResults.mousetrap.SGD['116+'].SS;
        result.panic += this.estimationOfResults.mousetrap.SGD['116+'].Panic;
        result.frustration += this.estimationOfResults.mousetrap.SGD['116+'].F;
        durationgame = (`${' Game Duration lowConfidence ='}${this.estimationOfResults.mousetrap.SGD['116+'].LC} badTimeMan = ${this.estimationOfResults.mousetrap.SGD['116+'].BTM} perfectionism = ${this.estimationOfResults.mousetrap.SGD['116+'].P} negThink = ${this.estimationOfResults.mousetrap.SGD['116+'].NT} lackRicuz = ${this.estimationOfResults.mousetrap.SGD['116+'].LR} impulsivity = ${this.estimationOfResults.mousetrap.SGD['116+'].I} slowStarter = ${this.estimationOfResults.mousetrap.SGD['116+'].SS} panic = ${this.estimationOfResults.mousetrap.SGD['116+'].Panic} frustration = ${this.estimationOfResults.mousetrap.SGD['116+'].F} |`);
      }
    }
    if (this.orderOfGames.UPDI.mousetrap.IB) {
    // Instruction Button
      if (instructionsClickCount === 0) {
        result.lowConfidence += this.estimationOfResults.mousetrap.IB['0'].LC;
        result.badTimeMan += this.estimationOfResults.mousetrap.IB['0'].BTM;
        result.perfectionism += this.estimationOfResults.mousetrap.IB['0'].P;
        result.negThink += this.estimationOfResults.mousetrap.IB['0'].NT;
        result.lackRicuz += this.estimationOfResults.mousetrap.IB['0'].LR;
        result.impulsivity += this.estimationOfResults.mousetrap.IB['0'].I;
        result.slowStarter += this.estimationOfResults.mousetrap.IB['0'].SS;
        result.panic += this.estimationOfResults.mousetrap.IB['0'].Panic;
        result.frustration += this.estimationOfResults.mousetrap.IB['0'].F;
        instruct = (`${'instructions lowConfidence ='}${this.estimationOfResults.mousetrap.IB['0'].LC} badTimeMan = ${this.estimationOfResults.mousetrap.IB['0'].BTM} perfectionism = ${this.estimationOfResults.mousetrap.IB['0'].P} negThink = ${this.estimationOfResults.mousetrap.IB['0'].NT} lackRicuz = ${this.estimationOfResults.mousetrap.IB['0'].LR} impulsivity = ${this.estimationOfResults.mousetrap.IB['0'].I} slowStarter = ${this.estimationOfResults.mousetrap.IB['0'].SS} panic = ${this.estimationOfResults.mousetrap.IB['0'].Panic} frustration = ${this.estimationOfResults.mousetrap.IB['0'].F}`);
      } else if (instructionsClickCount === 1) {
        result.lowConfidence += this.estimationOfResults.mousetrap.IB['1'].LC;
        result.badTimeMan += this.estimationOfResults.mousetrap.IB['1'].BTM;
        result.perfectionism += this.estimationOfResults.mousetrap.IB['1'].P;
        result.negThink += this.estimationOfResults.mousetrap.IB['1'].NT;
        result.lackRicuz += this.estimationOfResults.mousetrap.IB['1'].LR;
        result.impulsivity += this.estimationOfResults.mousetrap.IB['1'].I;
        result.slowStarter += this.estimationOfResults.mousetrap.IB['1'].SS;
        result.panic += this.estimationOfResults.mousetrap.IB['1'].Panic;
        result.frustration += this.estimationOfResults.mousetrap.IB['1'].F;
        instruct = (`${'instructions lowConfidence ='}${this.estimationOfResults.mousetrap.IB['1'].LC} badTimeMan = ${this.estimationOfResults.mousetrap.IB['1'].BTM} perfectionism = ${this.estimationOfResults.mousetrap.IB['1'].P} negThink = ${this.estimationOfResults.mousetrap.IB['1'].NT} lackRicuz = ${this.estimationOfResults.mousetrap.IB['1'].LR} impulsivity = ${this.estimationOfResults.mousetrap.IB['1'].I} slowStarter = ${this.estimationOfResults.mousetrap.IB['1'].SS} panic = ${this.estimationOfResults.mousetrap.IB['1'].Panic} frustration = ${this.estimationOfResults.mousetrap.IB['1'].F}`);
      } else if (instructionsClickCount >= 2) {
        result.lowConfidence += this.estimationOfResults.mousetrap.IB['2+'].LC;
        result.badTimeMan += this.estimationOfResults.mousetrap.IB['2+'].BTM;
        result.perfectionism += this.estimationOfResults.mousetrap.IB['2+'].P;
        result.negThink += this.estimationOfResults.mousetrap.IB['2+'].NT;
        result.lackRicuz += this.estimationOfResults.mousetrap.IB['2+'].LR;
        result.impulsivity += this.estimationOfResults.mousetrap.IB['2+'].I;
        result.slowStarter += this.estimationOfResults.mousetrap.IB['2+'].SS;
        result.panic += this.estimationOfResults.mousetrap.IB['2+'].Panic;
        result.frustration += this.estimationOfResults.mousetrap.IB['2+'].F;
        instruct = (`${'instructions lowConfidence ='}${this.estimationOfResults.mousetrap.IB['2+'].LC} badTimeMan = ${this.estimationOfResults.mousetrap.IB['2+'].BTM} perfectionism = ${this.estimationOfResults.mousetrap.IB['2+'].P} negThink = ${this.estimationOfResults.mousetrap.IB['2+'].NT} lackRicuz = ${this.estimationOfResults.mousetrap.IB['2+'].LR} impulsivity = ${this.estimationOfResults.mousetrap.IB['2+'].I} slowStarter = ${this.estimationOfResults.mousetrap.IB['2+'].SS} panic = ${this.estimationOfResults.mousetrap.IB['2+'].Panic} frustration = ${this.estimationOfResults.mousetrap.IB['2+'].F}`);
      }
    }
    this.gameScore.mousetrap = [result.lowConfidence, result.badTimeMan, result.perfectionism, result.negThink, result.lackRicuz, result.impulsivity, result.slowStarter, result.panic, result.frustration];
    
    const SumFromGame = (`mousetrap Summ =  lowConfidence =${this.gameScore.mousetrap[0]} badTimeMan =${this.gameScore.mousetrap[1]} perfectionism = ${this.gameScore.mousetrap[2]} negThink = ${this.gameScore.mousetrap[3]} lackRicuz = ${this.gameScore.mousetrap[4]} impulsivity = ${this.gameScore.mousetrap[5]} slowStarter = ${this.gameScore.mousetrap[6]}  panic =  ${this.gameScore.mousetrap[7]} frustration = ${this.gameScore.mousetrap[8]} |`);
    // const SumFromGame = (`mousetrap Summ =  Bad Time Man =${this.gameScore.mousetrap[0]} Frustration =${this.gameScore.mousetrap[1]} Impulsivity = ${this.gameScore.mousetrap[2]} Low Confidence = ${this.gameScore.mousetrap[3]} Lack Ricuz = ${this.gameScore.mousetrap[4]} Neg Think = ${this.gameScore.mousetrap[5]} Perfectionism = ${this.gameScore.mousetrap[6]}  Panic =  ${this.gameScore.mousetrap[7]} Slow Starter = ${this.gameScore.mousetrap[8]} |`);

    if (duration !== undefined){ alert(`${fromGame} ${space} ${instruct} ${space} ${durationgame} ${space} ${SumFromGame}`); }
  }
}

MouseGameService.$inject = ['gameScoreValue', 'orderOfGames', 'estimationOfResults'];
module.exports = MouseGameService;
