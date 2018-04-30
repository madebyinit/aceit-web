class TowerService {
  constructor(gameScoreValue, orderOfGames, estimationOfResults) {
    this.gameScore = gameScoreValue;
    this.orderOfGames = orderOfGames;
    this.estimationOfResults = estimationOfResults;
  }

  end(duration, noOfMoves, instructionsClickCount, win, firstMoveTime) {
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
      }
    }
    if (this.orderOfGames.UPDI.tower.IB) {
    // Instruction Button
      if (instructionsClickCount === 1) {
        result.lowConfidence += this.estimationOfResults.tower.IB['1'].LC;
        result.badTimeMan += this.estimationOfResults.tower.IB['1'].BTM;
        result.perfectionism += this.estimationOfResults.tower.IB['1'].P;
        result.negThink += this.estimationOfResults.tower.IB['1'].NT;
        result.lackRicuz += this.estimationOfResults.tower.IB['1'].LR;
        result.impulsivity += this.estimationOfResults.tower.IB['1'].I;
        result.slowStarter += this.estimationOfResults.tower.IB['1'].SS;
        result.panic += this.estimationOfResults.tower.IB['1'].Panic;
        result.frustration += this.estimationOfResults.tower.IB['1'].F;
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
      }
    }
    // Total # of moves
    if (this.orderOfGames.UPDI.tower.NoM) {
      if (noOfMoves >= 46 && noOfMoves < 81) {
        result.lowConfidence += this.estimationOfResults.tower.TM['46-80'].LC;
        result.badTimeMan += this.estimationOfResults.tower.TM['46-80'].BTM;
        result.perfectionism += this.estimationOfResults.tower.TM['46-80'].P;
        result.negThink += this.estimationOfResults.tower.TM['46-80'].NT;
        result.lackRicuz += this.estimationOfResults.tower.TM['46-80'].LR;
        result.impulsivity += this.estimationOfResults.tower.TM['46-80'].I;
        result.slowStarter += this.estimationOfResults.tower.TM['46-80'].SS;
        result.panic += this.estimationOfResults.tower.TM['46-80'].Panic;
        result.frustration += this.estimationOfResults.tower.TM['46-80'].F;
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
      }
    }
    this.gameScore.tower = Object.assign({}, result);
    alert(`tower = ${this.gameScore.tower.lowConfidence} ${this.gameScore.tower.badTimeMan} ${this.gameScore.tower.perfectionism} ${this.gameScore.tower.negThink} ${this.gameScore.tower.lackRicuz} ${this.gameScore.tower.impulsivity} ${this.gameScore.tower.slowStarter} ${this.gameScore.tower.panic} ${this.gameScore.tower.frustration}`);
  }
}

TowerService.$inject = ['gameScoreValue', 'orderOfGames', 'estimationOfResults'];
module.exports = TowerService;
