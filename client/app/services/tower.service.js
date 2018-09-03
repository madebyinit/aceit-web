class TowerService {
  constructor(gameScoreValue, orderOfGames, estimationOfResults) {
    this.gameScore = gameScoreValue;
    this.orderOfGames = orderOfGames;
    this.estimationOfResults = estimationOfResults;
  }

  end(duration, noOfMoves, instructionsClickCount, win, firstMoveTime) {
    console.log(this.gameScore.gamesSuccessfullyCompleted, 'hyt');
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
    let moves = '';
    let durationgame = '';
    const space = '                                                                                                     ';
    if (win) {
      this.gameScore.gamesSuccessfullyCompleted += 1;
    }
    // console.log(this.estimationOfResults.tower, "TEST TOWER");
    // Successful Game Duration
    if (this.orderOfGames.UPDI.tower.SGD) {
      if (duration > 0 && duration <= 40000) {
        result.lowConfidence += this.estimationOfResults.tower.SGD['0-40'].LC;
        result.badTimeMan += this.estimationOfResults.tower.SGD['0-40'].BTM;
        result.perfectionism += this.estimationOfResults.tower.SGD['0-40'].P;
        result.negThink += this.estimationOfResults.tower.SGD['0-40'].NT;
        result.lackRicuz += this.estimationOfResults.tower.SGD['0-40'].LR;
        result.impulsivity += this.estimationOfResults.tower.SGD['0-40'].I;
        result.slowStarter += this.estimationOfResults.tower.SGD['0-40'].SS;
        result.panic += this.estimationOfResults.tower.SGD['0-40'].Panic;
        result.frustration += this.estimationOfResults.tower.SGD['0-40'].F;
        durationgame = (`${'Game Duration lowConfidence ='}${this.estimationOfResults.tower.SGD['0-40'].LC} badTimeMan = ${this.estimationOfResults.tower.SGD['0-40'].BTM} perfectionism = ${this.estimationOfResults.tower.SGD['0-40'].P} negThink = ${this.estimationOfResults.tower.SGD['0-40'].NT} lackRicuz = ${this.estimationOfResults.tower.SGD['0-40'].LR} impulsivity = ${this.estimationOfResults.tower.SGD['0-40'].I} slowStarter = ${this.estimationOfResults.tower.SGD['0-40'].SS} panic = ${this.estimationOfResults.tower.SGD['0-40'].Panic} frustration = ${this.estimationOfResults.tower.SGD['0-40'].F} |`);
      } else if (duration > 40000 && duration <= 50000) {
        result.lowConfidence += this.estimationOfResults.tower.SGD['41-50'].LC;
        result.badTimeMan += this.estimationOfResults.tower.SGD['41-50'].BTM;
        result.perfectionism += this.estimationOfResults.tower.SGD['41-50'].P;
        result.negThink += this.estimationOfResults.tower.SGD['41-50'].NT;
        result.lackRicuz += this.estimationOfResults.tower.SGD['41-50'].LR;
        result.impulsivity += this.estimationOfResults.tower.SGD['41-50'].I;
        result.slowStarter += this.estimationOfResults.tower.SGD['41-50'].SS;
        result.panic += this.estimationOfResults.tower.SGD['41-50'].Panic;
        result.frustration += this.estimationOfResults.tower.SGD['41-50'].F;
        durationgame = (`${'Game Duration lowConfidence ='}${this.estimationOfResults.tower.SGD['41-50'].LC} badTimeMan = ${this.estimationOfResults.tower.SGD['41-50'].BTM} perfectionism = ${this.estimationOfResults.tower.SGD['41-50'].P} negThink = ${this.estimationOfResults.tower.SGD['41-50'].NT} lackRicuz = ${this.estimationOfResults.tower.SGD['41-50'].LR} impulsivity = ${this.estimationOfResults.tower.SGD['41-50'].I} slowStarter = ${this.estimationOfResults.tower.SGD['41-50'].SS} panic = ${this.estimationOfResults.tower.SGD['41-50'].Panic} frustration = ${this.estimationOfResults.tower.SGD['41-50'].F} |`);
      } else if (duration > 50000 && duration <= 60000) {
        result.lowConfidence += this.estimationOfResults.tower.SGD['51-60'].LC;
        result.badTimeMan += this.estimationOfResults.tower.SGD['51-60'].BTM;
        result.perfectionism += this.estimationOfResults.tower.SGD['51-60'].P;
        result.negThink += this.estimationOfResults.tower.SGD['51-60'].NT;
        result.lackRicuz += this.estimationOfResults.tower.SGD['51-60'].LR;
        result.impulsivity += this.estimationOfResults.tower.SGD['51-60'].I;
        result.slowStarter += this.estimationOfResults.tower.SGD['51-60'].SS;
        result.panic += this.estimationOfResults.tower.SGD['51-60'].Panic;
        result.frustration += this.estimationOfResults.tower.SGD['51-60'].F;
        durationgame = (`${'Game Duration lowConfidence ='}${this.estimationOfResults.tower.SGD['51-60'].LC} badTimeMan = ${this.estimationOfResults.tower.SGD['51-60'].BTM} perfectionism = ${this.estimationOfResults.tower.SGD['51-60'].P} negThink = ${this.estimationOfResults.tower.SGD['51-60'].NT} lackRicuz = ${this.estimationOfResults.tower.SGD['51-60'].LR} impulsivity = ${this.estimationOfResults.tower.SGD['51-60'].I} slowStarter = ${this.estimationOfResults.tower.SGD['51-60'].SS} panic = ${this.estimationOfResults.tower.SGD['51-60'].Panic} frustration = ${this.estimationOfResults.tower.SGD['51-60'].F} |`);
      } else if (duration > 60000 && duration <= 70000) {
        result.lowConfidence += this.estimationOfResults.tower.SGD['61-70'].LC;
        result.badTimeMan += this.estimationOfResults.tower.SGD['61-70'].BTM;
        result.perfectionism += this.estimationOfResults.tower.SGD['61-70'].P;
        result.negThink += this.estimationOfResults.tower.SGD['61-70'].NT;
        result.lackRicuz += this.estimationOfResults.tower.SGD['61-70'].LR;
        result.impulsivity += this.estimationOfResults.tower.SGD['61-70'].I;
        result.slowStarter += this.estimationOfResults.tower.SGD['61-70'].SS;
        result.panic += this.estimationOfResults.tower.SGD['61-70'].Panic;
        result.frustration += this.estimationOfResults.tower.SGD['61-70'].F;
        durationgame = (`${'Game Duration lowConfidence ='}${this.estimationOfResults.tower.SGD['61-70'].LC} badTimeMan = ${this.estimationOfResults.tower.SGD['61-70'].BTM} perfectionism = ${this.estimationOfResults.tower.SGD['61-70'].P} negThink = ${this.estimationOfResults.tower.SGD['61-70'].NT} lackRicuz = ${this.estimationOfResults.tower.SGD['61-70'].LR} impulsivity = ${this.estimationOfResults.tower.SGD['61-70'].I} slowStarter = ${this.estimationOfResults.tower.SGD['61-70'].SS} panic = ${this.estimationOfResults.tower.SGD['61-70'].Panic} frustration = ${this.estimationOfResults.tower.SGD['61-70'].F} |`);
      } else if (duration > 70000 && duration <= 80000) {
        result.lowConfidence += this.estimationOfResults.tower.SGD['71-80'].LC;
        result.badTimeMan += this.estimationOfResults.tower.SGD['71-80'].BTM;
        result.perfectionism += this.estimationOfResults.tower.SGD['71-80'].P;
        result.negThink += this.estimationOfResults.tower.SGD['71-80'].NT;
        result.lackRicuz += this.estimationOfResults.tower.SGD['71-80'].LR;
        result.impulsivity += this.estimationOfResults.tower.SGD['71-80'].I;
        result.slowStarter += this.estimationOfResults.tower.SGD['71-80'].SS;
        result.panic += this.estimationOfResults.tower.SGD['71-80'].Panic;
        result.frustration += this.estimationOfResults.tower.SGD['71-80'].F;
        durationgame = (`${'Game Duration lowConfidence ='}${this.estimationOfResults.tower.SGD['71-80'].LC} badTimeMan = ${this.estimationOfResults.tower.SGD['71-80'].BTM} perfectionism = ${this.estimationOfResults.tower.SGD['71-80'].P} negThink = ${this.estimationOfResults.tower.SGD['71-80'].NT} lackRicuz = ${this.estimationOfResults.tower.SGD['71-80'].LR} impulsivity = ${this.estimationOfResults.tower.SGD['71-80'].I} slowStarter = ${this.estimationOfResults.tower.SGD['71-80'].SS} panic = ${this.estimationOfResults.tower.SGD['71-80'].Panic} frustration = ${this.estimationOfResults.tower.SGD['71-80'].F} |`);
      } else if (duration > 80000 && duration <= 90000) {
        result.lowConfidence += this.estimationOfResults.tower.SGD['81-90'].LC;
        result.badTimeMan += this.estimationOfResults.tower.SGD['81-90'].BTM;
        result.perfectionism += this.estimationOfResults.tower.SGD['81-90'].P;
        result.negThink += this.estimationOfResults.tower.SGD['81-90'].NT;
        result.lackRicuz += this.estimationOfResults.tower.SGD['81-90'].LR;
        result.impulsivity += this.estimationOfResults.tower.SGD['81-90'].I;
        result.slowStarter += this.estimationOfResults.tower.SGD['81-90'].SS;
        result.panic += this.estimationOfResults.tower.SGD['81-90'].Panic;
        result.frustration += this.estimationOfResults.tower.SGD['81-90'].F;
        durationgame = (`${'Game Duration lowConfidence ='}${this.estimationOfResults.tower.SGD['81-90'].LC} badTimeMan = ${this.estimationOfResults.tower.SGD['81-90'].BTM} perfectionism = ${this.estimationOfResults.tower.SGD['81-90'].P} negThink = ${this.estimationOfResults.tower.SGD['81-90'].NT} lackRicuz = ${this.estimationOfResults.tower.SGD['81-90'].LR} impulsivity = ${this.estimationOfResults.tower.SGD['81-90'].I} slowStarter = ${this.estimationOfResults.tower.SGD['81-90'].SS} panic = ${this.estimationOfResults.tower.SGD['81-90'].Panic} frustration = ${this.estimationOfResults.tower.SGD['81-90'].F} |`);
      } else if (duration > 90000 && duration <= 100000) {
        result.lowConfidence += this.estimationOfResults.tower.SGD['91-100'].LC;
        result.badTimeMan += this.estimationOfResults.tower.SGD['91-100'].BTM;
        result.perfectionism += this.estimationOfResults.tower.SGD['91-100'].P;
        result.negThink += this.estimationOfResults.tower.SGD['91-100'].NT;
        result.lackRicuz += this.estimationOfResults.tower.SGD['91-100'].LR;
        result.impulsivity += this.estimationOfResults.tower.SGD['91-100'].I;
        result.slowStarter += this.estimationOfResults.tower.SGD['91-100'].SS;
        result.panic += this.estimationOfResults.tower.SGD['91-100'].Panic;
        result.frustration += this.estimationOfResults.tower.SGD['91-100'].F;
        durationgame = (`${'Game Duration lowConfidence ='}${this.estimationOfResults.tower.SGD['91-100'].LC} badTimeMan = ${this.estimationOfResults.tower.SGD['91-100'].BTM} perfectionism = ${this.estimationOfResults.tower.SGD['91-100'].P} negThink = ${this.estimationOfResults.tower.SGD['91-100'].NT} lackRicuz = ${this.estimationOfResults.tower.SGD['91-100'].LR} impulsivity = ${this.estimationOfResults.tower.SGD['91-100'].I} slowStarter = ${this.estimationOfResults.tower.SGD['91-100'].SS} panic = ${this.estimationOfResults.tower.SGD['91-100'].Panic} frustration = ${this.estimationOfResults.tower.SGD['91-100'].F} |`);
      } else if (duration > 100000 && duration <= 115000) {
        result.lowConfidence += this.estimationOfResults.tower.SGD['101-115'].LC;
        result.badTimeMan += this.estimationOfResults.tower.SGD['101-115'].BTM;
        result.perfectionism += this.estimationOfResults.tower.SGD['101-115'].P;
        result.negThink += this.estimationOfResults.tower.SGD['101-115'].NT;
        result.lackRicuz += this.estimationOfResults.tower.SGD['101-115'].LR;
        result.impulsivity += this.estimationOfResults.tower.SGD['101-115'].I;
        result.slowStarter += this.estimationOfResults.tower.SGD['101-115'].SS;
        result.panic += this.estimationOfResults.tower.SGD['101-115'].Panic;
        result.frustration += this.estimationOfResults.tower.SGD['101-115'].F;
        durationgame = (`${'Game Duration lowConfidence ='}${this.estimationOfResults.tower.SGD['101-115'].LC} badTimeMan = ${this.estimationOfResults.tower.SGD['101-115'].BTM} perfectionism = ${this.estimationOfResults.tower.SGD['101-115'].P} negThink = ${this.estimationOfResults.tower.SGD['101-115'].NT} lackRicuz = ${this.estimationOfResults.tower.SGD['101-115'].LR} impulsivity = ${this.estimationOfResults.tower.SGD['101-115'].I} slowStarter = ${this.estimationOfResults.tower.SGD['101-115'].SS} panic = ${this.estimationOfResults.tower.SGD['101-115'].Panic} frustration = ${this.estimationOfResults.tower.SGD['101-115'].F} |`);
      } else if (duration > 116000) {
        result.lowConfidence += this.estimationOfResults.tower.SGD['116+'].LC;
        result.badTimeMan += this.estimationOfResults.tower.SGD['116+'].BTM;
        result.perfectionism += this.estimationOfResults.tower.SGD['116+'].P;
        result.negThink += this.estimationOfResults.tower.SGD['116+'].NT;
        result.lackRicuz += this.estimationOfResults.tower.SGD['116+'].LR;
        result.impulsivity += this.estimationOfResults.tower.SGD['116+'].I;
        result.slowStarter += this.estimationOfResults.tower.SGD['116+'].SS;
        result.panic += this.estimationOfResults.tower.SGD['116+'].Panic;
        result.frustration += this.estimationOfResults.tower.SGD['116+'].F;
        durationgame = (`${'Game Duration lowConfidence ='}${this.estimationOfResults.tower.SGD['116+'].LC} badTimeMan = ${this.estimationOfResults.tower.SGD['116+'].BTM} perfectionism = ${this.estimationOfResults.tower.SGD['116+'].P} negThink = ${this.estimationOfResults.tower.SGD['116+'].NT} lackRicuz = ${this.estimationOfResults.tower.SGD['116+'].LR} impulsivity = ${this.estimationOfResults.tower.SGD['116+'].I} slowStarter = ${this.estimationOfResults.tower.SGD['116+'].SS} panic = ${this.estimationOfResults.tower.SGD['116+'].Panic} frustration = ${this.estimationOfResults.tower.SGD['116+'].F} |`);
      }
    }
    if (this.orderOfGames.UPDI.tower.IB) {
    // Instruction Button
      if (instructionsClickCount === 0) {
        result.lowConfidence += this.estimationOfResults.tower.IB['0'].LC;
        result.badTimeMan += this.estimationOfResults.tower.IB['0'].BTM;
        result.perfectionism += this.estimationOfResults.tower.IB['0'].P;
        result.negThink += this.estimationOfResults.tower.IB['0'].NT;
        result.lackRicuz += this.estimationOfResults.tower.IB['0'].LR;
        result.impulsivity += this.estimationOfResults.tower.IB['0'].I;
        result.slowStarter += this.estimationOfResults.tower.IB['0'].SS;
        result.panic += this.estimationOfResults.tower.IB['0'].Panic;
        result.frustration += this.estimationOfResults.tower.IB['0'].F;
        instruct = (`${'instructions lowConfidence ='}${this.estimationOfResults.tower.IB['0'].LC} badTimeMan = ${this.estimationOfResults.tower.IB['0'].BTM} perfectionism = ${this.estimationOfResults.tower.IB['0'].P} negThink = ${this.estimationOfResults.tower.IB['0'].NT} lackRicuz = ${this.estimationOfResults.tower.IB['0'].LR} impulsivity = ${this.estimationOfResults.tower.IB['0'].I} slowStarter = ${this.estimationOfResults.tower.IB['0'].SS} panic = ${this.estimationOfResults.tower.IB['0'].Panic} frustration = ${this.estimationOfResults.tower.IB['0'].F}`);
      } else if (instructionsClickCount === 1) {
        result.lowConfidence += this.estimationOfResults.tower.IB['1'].LC;
        result.badTimeMan += this.estimationOfResults.tower.IB['1'].BTM;
        result.perfectionism += this.estimationOfResults.tower.IB['1'].P;
        result.negThink += this.estimationOfResults.tower.IB['1'].NT;
        result.lackRicuz += this.estimationOfResults.tower.IB['1'].LR;
        result.impulsivity += this.estimationOfResults.tower.IB['1'].I;
        result.slowStarter += this.estimationOfResults.tower.IB['1'].SS;
        result.panic += this.estimationOfResults.tower.IB['1'].Panic;
        result.frustration += this.estimationOfResults.tower.IB['1'].F;
        instruct = (`${'instructions lowConfidence ='}${this.estimationOfResults.tower.IB['1'].LC} badTimeMan = ${this.estimationOfResults.tower.IB['1'].BTM} perfectionism = ${this.estimationOfResults.tower.IB['1'].P} negThink = ${this.estimationOfResults.tower.IB['1'].NT} lackRicuz = ${this.estimationOfResults.tower.IB['1'].LR} impulsivity = ${this.estimationOfResults.tower.IB['1'].I} slowStarter = ${this.estimationOfResults.tower.IB['1'].SS} panic = ${this.estimationOfResults.tower.IB['1'].Panic} frustration = ${this.estimationOfResults.tower.IB['1'].F}`);
      } else if (instructionsClickCount >= 2) {
        result.lowConfidence += this.estimationOfResults.tower.IB['2+'].LC;
        result.badTimeMan += this.estimationOfResults.tower.IB['2+'].BTM;
        result.perfectionism += this.estimationOfResults.tower.IB['2+'].P;
        result.negThink += this.estimationOfResults.tower.IB['2+'].NT;
        result.lackRicuz += this.estimationOfResults.tower.IB['2+'].LR;
        result.impulsivity += this.estimationOfResults.tower.IB['2+'].I;
        result.slowStarter += this.estimationOfResults.tower.IB['2+'].SS;
        result.panic += this.estimationOfResults.tower.IB['2+'].Panic;
        result.frustration += this.estimationOfResults.tower.IB['2+'].F;
        instruct = (`${'instructions lowConfidence ='}${this.estimationOfResults.tower.IB['2+'].LC} badTimeMan = ${this.estimationOfResults.tower.IB['2+'].BTM} perfectionism = ${this.estimationOfResults.tower.IB['2+'].P} negThink = ${this.estimationOfResults.tower.IB['2+'].NT} lackRicuz = ${this.estimationOfResults.tower.IB['2+'].LR} impulsivity = ${this.estimationOfResults.tower.IB['2+'].I} slowStarter = ${this.estimationOfResults.tower.IB['2+'].SS} panic = ${this.estimationOfResults.tower.IB['2+'].Panic} frustration = ${this.estimationOfResults.tower.IB['2+'].F}`);
      }
    }
    // Total # of moves
    if (this.orderOfGames.UPDI.tower.NoM) {
      if (noOfMoves < 46) {
        result.lowConfidence += this.estimationOfResults.tower.TM['1-45'].LC;
        result.badTimeMan += this.estimationOfResults.tower.TM['1-45'].BTM;
        result.perfectionism += this.estimationOfResults.tower.TM['1-45'].P;
        result.negThink += this.estimationOfResults.tower.TM['1-45'].NT;
        result.lackRicuz += this.estimationOfResults.tower.TM['1-45'].LR;
        result.impulsivity += this.estimationOfResults.tower.TM['1-45'].I;
        result.slowStarter += this.estimationOfResults.tower.TM['1-45'].SS;
        result.panic += this.estimationOfResults.tower.TM['1-45'].Panic;
        result.frustration += this.estimationOfResults.tower.TM['1-45'].F;
        moves = (`noOfMoves ${noOfMoves}  lowConfidence =${this.estimationOfResults.tower.TM['1-45'].LC} badTimeMan = ${this.estimationOfResults.tower.TM['1-45'].BTM} perfectionism = ${this.estimationOfResults.tower.TM['1-45'].P} negThink = ${this.estimationOfResults.tower.TM['1-45'].NT} lackRicuz = ${this.estimationOfResults.tower.TM['1-45'].LR} impulsivity = ${this.estimationOfResults.tower.TM['1-45'].I} slowStarter = ${this.estimationOfResults.tower.TM['1-45'].SS} panic = ${this.estimationOfResults.tower.TM['1-45'].Panic} frustration = ${this.estimationOfResults.tower.TM['1-45'].F}`);
      } else if (noOfMoves >= 46 && noOfMoves < 81) {
        result.lowConfidence += this.estimationOfResults.tower.TM['46-80'].LC;
        result.badTimeMan += this.estimationOfResults.tower.TM['46-80'].BTM;
        result.perfectionism += this.estimationOfResults.tower.TM['46-80'].P;
        result.negThink += this.estimationOfResults.tower.TM['46-80'].NT;
        result.lackRicuz += this.estimationOfResults.tower.TM['46-80'].LR;
        result.impulsivity += this.estimationOfResults.tower.TM['46-80'].I;
        result.slowStarter += this.estimationOfResults.tower.TM['46-80'].SS;
        result.panic += this.estimationOfResults.tower.TM['46-80'].Panic;
        result.frustration += this.estimationOfResults.tower.TM['46-80'].F;
        moves = (`noOfMoves ${noOfMoves}  lowConfidence =${this.estimationOfResults.tower.TM['46-80'].LC} badTimeMan = ${this.estimationOfResults.tower.TM['46-80'].BTM} perfectionism = ${this.estimationOfResults.tower.TM['46-80'].P} negThink = ${this.estimationOfResults.tower.TM['46-80'].NT} lackRicuz = ${this.estimationOfResults.tower.TM['46-80'].LR} impulsivity = ${this.estimationOfResults.tower.TM['46-80'].I} slowStarter = ${this.estimationOfResults.tower.TM['46-80'].SS} panic = ${this.estimationOfResults.tower.TM['46-80'].Panic} frustration = ${this.estimationOfResults.tower.TM['46-80'].F}`);
      } else if (noOfMoves >= 81) {
        result.lowConfidence += this.estimationOfResults.tower.TM['81+'].LC;
        result.badTimeMan += this.estimationOfResults.tower.TM['81+'].BTM;
        result.perfectionism += this.estimationOfResults.tower.TM['81+'].P;
        result.negThink += this.estimationOfResults.tower.TM['81+'].NT;
        result.lackRicuz += this.estimationOfResults.tower.TM['81+'].LR;
        result.impulsivity += this.estimationOfResults.tower.TM['81+'].I;
        result.slowStarter += this.estimationOfResults.tower.TM['81+'].SS;
        result.panic += this.estimationOfResults.tower.TM['81+'].Panic;
        result.frustration += this.estimationOfResults.tower.TM['81+'].F;
        moves = (`noOfMoves ${noOfMoves}  lowConfidence =${this.estimationOfResults.tower.TM['81+'].LC} badTimeMan = ${this.estimationOfResults.tower.TM['81+'].BTM} perfectionism = ${this.estimationOfResults.tower.TM['81+'].P} negThink = ${this.estimationOfResults.tower.TM['81+'].NT} lackRicuz = ${this.estimationOfResults.tower.TM['81+'].LR} impulsivity = ${this.estimationOfResults.tower.TM['81+'].I} slowStarter = ${this.estimationOfResults.tower.TM['81+'].SS} panic = ${this.estimationOfResults.tower.TM['81+'].Panic} frustration = ${this.estimationOfResults.tower.TM['81+'].F}`);

      }
    }
    this.gameScore.tower = [result.lowConfidence, result.badTimeMan, result.perfectionism, result.negThink, result.lackRicuz, result.impulsivity, result.slowStarter, result.panic, result.frustration];

    // const SumFromGame = (`tower Summ =  Bad Time Man =${this.gameScore.tower[0]} Frustration =${this.gameScore.tower[1]} Impulsivity = ${this.gameScore.tower[2]} Low Confidence = ${this.gameScore.tower[3]} Lack Ricuz = ${this.gameScore.tower[4]} Neg Think = ${this.gameScore.tower[5]} Perfectionism = ${this.gameScore.tower[6]}  Panic =  ${this.gameScore.tower[7]} Slow Starter = ${this.gameScore.tower[8]} |`);
    const SumFromGame = (`Tower Summ =  lowConfidence =${this.gameScore.tower[0]} badTimeMan =${this.gameScore.tower[1]} perfectionism = ${this.gameScore.tower[2]} negThink = ${this.gameScore.tower[3]} lackRicuz = ${this.gameScore.tower[4]} impulsivity = ${this.gameScore.tower[5]} slowStarter = ${this.gameScore.tower[6]}  panic =  ${this.gameScore.tower[7]} frustration = ${this.gameScore.tower[8]} |`);

    if (duration !== undefined){ alert(`${fromGame} ${space} ${instruct} ${space} ${moves} ${space} ${durationgame} ${space} ${SumFromGame}`); }
    
  }
}

TowerService.$inject = ['gameScoreValue', 'orderOfGames', 'estimationOfResults'];
module.exports = TowerService;
