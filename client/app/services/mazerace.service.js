class MazeraceService {
  constructor(gameScoreValue, estimationOfResults, orderOfGames) {
    this.gameScore = gameScoreValue;
    this.estimationOfResults = estimationOfResults;
    this.orderOfGames = orderOfGames;
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
      if (this.orderOfGames.UPDI.mazerace.SGD) {
      // Successful Game Duration
        if (duration > 0 && duration <= 40000) {
          result.lowConfidence += this.estimationOfResults.mazerace.SGD['0-40'].LC;
          result.badTimeMan += this.estimationOfResults.mazerace.SGD['0-40'].BTM;
          result.perfectionism += this.estimationOfResults.mazerace.SGD['0-40'].P;
          result.negThink += this.estimationOfResults.mazerace.SGD['0-40'].NT;
          result.lackRicuz += this.estimationOfResults.mazerace.SGD['0-40'].LR;
          result.impulsivity += this.estimationOfResults.mazerace.SGD['0-40'].I;
          result.slowStarter += this.estimationOfResults.mazerace.SGD['0-40'].SS;
          result.panic += this.estimationOfResults.mazerace.SGD['0-40'].Panic;
          result.frustration += this.estimationOfResults.mazerace.SGD['0-40'].F;
        } else if (duration > 40000 && duration <= 50000) {
          result.lowConfidence += this.estimationOfResults.mazerace.SGD['41-50'].LC;
          result.badTimeMan += this.estimationOfResults.mazerace.SGD['41-50'].BTM;
          result.perfectionism += this.estimationOfResults.mazerace.SGD['41-50'].P;
          result.negThink += this.estimationOfResults.mazerace.SGD['41-50'].NT;
          result.lackRicuz += this.estimationOfResults.mazerace.SGD['41-50'].LR;
          result.impulsivity += this.estimationOfResults.mazerace.SGD['41-50'].I;
          result.slowStarter += this.estimationOfResults.mazerace.SGD['41-50'].SS;
          result.panic += this.estimationOfResults.mazerace.SGD['41-50'].Panic;
          result.frustration += this.estimationOfResults.mazerace.SGD['41-50'].F;
        } else if (duration > 50000 && duration <= 60000) {
          result.lowConfidence += this.estimationOfResults.mazerace.SGD['51-60'].LC;
          result.badTimeMan += this.estimationOfResults.mazerace.SGD['51-60'].BTM;
          result.perfectionism += this.estimationOfResults.mazerace.SGD['51-60'].P;
          result.negThink += this.estimationOfResults.mazerace.SGD['51-60'].NT;
          result.lackRicuz += this.estimationOfResults.mazerace.SGD['51-60'].LR;
          result.impulsivity += this.estimationOfResults.mazerace.SGD['51-60'].I;
          result.slowStarter += this.estimationOfResults.mazerace.SGD['51-60'].SS;
          result.panic += this.estimationOfResults.mazerace.SGD['51-60'].Panic;
          result.frustration += this.estimationOfResults.mazerace.SGD['51-60'].F;
        } else if (duration > 60000 && duration <= 70000) {
          result.lowConfidence += this.estimationOfResults.mazerace.SGD['61-70'].LC;
          result.badTimeMan += this.estimationOfResults.mazerace.SGD['61-70'].BTM;
          result.perfectionism += this.estimationOfResults.mazerace.SGD['61-70'].P;
          result.negThink += this.estimationOfResults.mazerace.SGD['61-70'].NT;
          result.lackRicuz += this.estimationOfResults.mazerace.SGD['61-70'].LR;
          result.impulsivity += this.estimationOfResults.mazerace.SGD['61-70'].I;
          result.slowStarter += this.estimationOfResults.mazerace.SGD['61-70'].SS;
          result.panic += this.estimationOfResults.mazerace.SGD['61-70'].Panic;
          result.frustration += this.estimationOfResults.mazerace.SGD['61-70'].F;
        } else if (duration > 70000 && duration <= 80000) {
          result.lowConfidence += this.estimationOfResults.mazerace.SGD['71-80'].LC;
          result.badTimeMan += this.estimationOfResults.mazerace.SGD['71-80'].BTM;
          result.perfectionism += this.estimationOfResults.mazerace.SGD['71-80'].P;
          result.negThink += this.estimationOfResults.mazerace.SGD['71-80'].NT;
          result.lackRicuz += this.estimationOfResults.mazerace.SGD['71-80'].LR;
          result.impulsivity += this.estimationOfResults.mazerace.SGD['71-80'].I;
          result.slowStarter += this.estimationOfResults.mazerace.SGD['71-80'].SS;
          result.panic += this.estimationOfResults.mazerace.SGD['71-80'].Panic;
          result.frustration += this.estimationOfResults.mazerace.SGD['71-80'].F;
        } else if (duration > 80000 && duration <= 90000) {
          result.lowConfidence += this.estimationOfResults.mazerace.SGD['81-90'].LC;
          result.badTimeMan += this.estimationOfResults.mazerace.SGD['81-90'].BTM;
          result.perfectionism += this.estimationOfResults.mazerace.SGD['81-90'].P;
          result.negThink += this.estimationOfResults.mazerace.SGD['81-90'].NT;
          result.lackRicuz += this.estimationOfResults.mazerace.SGD['81-90'].LR;
          result.impulsivity += this.estimationOfResults.mazerace.SGD['81-90'].I;
          result.slowStarter += this.estimationOfResults.mazerace.SGD['81-90'].SS;
          result.panic += this.estimationOfResults.mazerace.SGD['81-90'].Panic;
          result.frustration += this.estimationOfResults.mazerace.SGD['81-90'].F;
        } else if (duration > 90000 && duration <= 100000) {
          result.lowConfidence += this.estimationOfResults.mazerace.SGD['91-100'].LC;
          result.badTimeMan += this.estimationOfResults.mazerace.SGD['91-100'].BTM;
          result.perfectionism += this.estimationOfResults.mazerace.SGD['91-100'].P;
          result.negThink += this.estimationOfResults.mazerace.SGD['91-100'].NT;
          result.lackRicuz += this.estimationOfResults.mazerace.SGD['91-100'].LR;
          result.impulsivity += this.estimationOfResults.mazerace.SGD['91-100'].I;
          result.slowStarter += this.estimationOfResults.mazerace.SGD['91-100'].SS;
          result.panic += this.estimationOfResults.mazerace.SGD['91-100'].Panic;
          result.frustration += this.estimationOfResults.mazerace.SGD['91-100'].F;
        } else if (duration > 100000 && duration <= 115000) {
          result.lowConfidence += this.estimationOfResults.mazerace.SGD['101-115'].LC;
          result.badTimeMan += this.estimationOfResults.mazerace.SGD['101-115'].BTM;
          result.perfectionism += this.estimationOfResults.mazerace.SGD['101-115'].P;
          result.negThink += this.estimationOfResults.mazerace.SGD['101-115'].NT;
          result.lackRicuz += this.estimationOfResults.mazerace.SGD['101-115'].LR;
          result.impulsivity += this.estimationOfResults.mazerace.SGD['101-115'].I;
          result.slowStarter += this.estimationOfResults.mazerace.SGD['101-115'].SS;
          result.panic += this.estimationOfResults.mazerace.SGD['101-115'].Panic;
          result.frustration += this.estimationOfResults.mazerace.SGD['101-115'].F;
        } else if (duration > 116000) {
          result.lowConfidence += this.estimationOfResults.mazerace.SGD['116+'].LC;
          result.badTimeMan += this.estimationOfResults.mazerace.SGD['116+'].BTM;
          result.perfectionism += this.estimationOfResults.mazerace.SGD['116+'].P;
          result.negThink += this.estimationOfResults.mazerace.SGD['116+'].NT;
          result.lackRicuz += this.estimationOfResults.mazerace.SGD['116+'].LR;
          result.impulsivity += this.estimationOfResults.mazerace.SGD['116+'].I;
          result.slowStarter += this.estimationOfResults.mazerace.SGD['116+'].SS;
          result.panic += this.estimationOfResults.mazerace.SGD['116+'].Panic;
          result.frustration += this.estimationOfResults.mazerace.SGD['116+'].F;
        }
      }
    } else if (this.orderOfGames.UPDI.mazerace.CGDWTiU) {
      // Game Duration When Time is Up
      if (duration <= 30000) {
        result.lowConfidence += this.estimationOfResults.mazerace.CGDETiU['0-30'].LC;
        result.badTimeMan += this.estimationOfResults.mazerace.CGDETiU['0-30'].BTM;
        result.perfectionism += this.estimationOfResults.mazerace.CGDETiU['0-30'].P;
        result.negThink += this.estimationOfResults.mazerace.CGDETiU['0-30'].NT;
        result.lackRicuz += this.estimationOfResults.mazerace.CGDETiU['0-30'].LR;
        result.impulsivity += this.estimationOfResults.mazerace.CGDETiU['0-30'].I;
        result.slowStarter += this.estimationOfResults.mazerace.CGDETiU['0-30'].SS;
        result.panic += this.estimationOfResults.mazerace.CGDETiU['0-30'].Panic;
        result.frustration += this.estimationOfResults.mazerace.CGDETiU['0-30'].F;
      } else if (duration > 30000 && duration <= 40000) {
        // result.badTimeMan+=9;
        result.lowConfidence += this.estimationOfResults.mazerace.CGDETiU['31-40'].LC;
        result.badTimeMan += this.estimationOfResults.mazerace.CGDETiU['31-40'].BTM;
        result.perfectionism += this.estimationOfResults.mazerace.CGDETiU['31-40'].P;
        result.negThink += this.estimationOfResults.mazerace.CGDETiU['31-40'].NT;
        result.lackRicuz += this.estimationOfResults.mazerace.CGDETiU['31-40'].LR;
        result.impulsivity += this.estimationOfResults.mazerace.CGDETiU['31-40'].I;
        result.slowStarter += this.estimationOfResults.mazerace.CGDETiU['31-40'].SS;
        result.panic += this.estimationOfResults.mazerace.CGDETiU['31-40'].Panic;
        result.frustration += this.estimationOfResults.mazerace.CGDETiU['31-40'].F;
      } else if (duration > 40000 && duration <= 50000) {
        // result.badTimeMan+=8;
        result.lowConfidence += this.estimationOfResults.mazerace.CGDETiU['41-50'].LC;
        result.badTimeMan += this.estimationOfResults.mazerace.CGDETiU['41-50'].BTM;
        result.perfectionism += this.estimationOfResults.mazerace.CGDETiU['41-50'].P;
        result.negThink += this.estimationOfResults.mazerace.CGDETiU['41-50'].NT;
        result.lackRicuz += this.estimationOfResults.mazerace.CGDETiU['41-50'].LR;
        result.impulsivity += this.estimationOfResults.mazerace.CGDETiU['41-50'].I;
        result.slowStarter += this.estimationOfResults.mazerace.CGDETiU['41-50'].SS;
        result.panic += this.estimationOfResults.mazerace.CGDETiU['41-50'].Panic;
        result.frustration += this.estimationOfResults.mazerace.CGDETiU['41-50'].F;
      } else if (duration > 50000 && duration <= 60000) {
        // result.badTimeMan+=7;
        result.lowConfidence += this.estimationOfResults.mazerace.CGDETiU['51-60'].LC;
        result.badTimeMan += this.estimationOfResults.mazerace.CGDETiU['51-60'].BTM;
        result.perfectionism += this.estimationOfResults.mazerace.CGDETiU['51-60'].P;
        result.negThink += this.estimationOfResults.mazerace.CGDETiU['51-60'].NT;
        result.lackRicuz += this.estimationOfResults.mazerace.CGDETiU['51-60'].LR;
        result.impulsivity += this.estimationOfResults.mazerace.CGDETiU['51-60'].I;
        result.slowStarter += this.estimationOfResults.mazerace.CGDETiU['51-60'].SS;
        result.panic += this.estimationOfResults.mazerace.CGDETiU['51-60'].Panic;
        result.frustration += this.estimationOfResults.mazerace.CGDETiU['51-60'].F;
      } else if (duration > 60000 && duration <= 70000) {
        result.lowConfidence += this.estimationOfResults.mazerace.CGDETiU['61-70'].LC;
        result.badTimeMan += this.estimationOfResults.mazerace.CGDETiU['61-70'].BTM;
        result.perfectionism += this.estimationOfResults.mazerace.CGDETiU['61-70'].P;
        result.negThink += this.estimationOfResults.mazerace.CGDETiU['61-70'].NT;
        result.lackRicuz += this.estimationOfResults.mazerace.CGDETiU['61-70'].LR;
        result.impulsivity += this.estimationOfResults.mazerace.CGDETiU['61-70'].I;
        result.slowStarter += this.estimationOfResults.mazerace.CGDETiU['61-70'].SS;
        result.panic += this.estimationOfResults.mazerace.CGDETiU['61-70'].Panic;
        result.frustration += this.estimationOfResults.mazerace.CGDETiU['61-70'].F;
      } else if (duration > 70000 && duration <= 80000) {
        result.lowConfidence += this.estimationOfResults.mazerace.CGDETiU['71-80'].LC;
        result.badTimeMan += this.estimationOfResults.mazerace.CGDETiU['71-80'].BTM;
        result.perfectionism += this.estimationOfResults.mazerace.CGDETiU['71-80'].P;
        result.negThink += this.estimationOfResults.mazerace.CGDETiU['71-80'].NT;
        result.lackRicuz += this.estimationOfResults.mazerace.CGDETiU['71-80'].LR;
        result.impulsivity += this.estimationOfResults.mazerace.CGDETiU['71-80'].I;
        result.slowStarter += this.estimationOfResults.mazerace.CGDETiU['71-80'].SS;
        result.panic += this.estimationOfResults.mazerace.CGDETiU['71-80'].Panic;
        result.frustration += this.estimationOfResults.mazerace.CGDETiU['71-80'].F;
      } else if (duration > 80000 && duration <= 90000) {
        result.lowConfidence += this.estimationOfResults.mazerace.CGDETiU['81-90'].LC;
        result.badTimeMan += this.estimationOfResults.mazerace.CGDETiU['81-90'].BTM;
        result.perfectionism += this.estimationOfResults.mazerace.CGDETiU['81-90'].P;
        result.negThink += this.estimationOfResults.mazerace.CGDETiU['81-90'].NT;
        result.lackRicuz += this.estimationOfResults.mazerace.CGDETiU['81-90'].LR;
        result.impulsivity += this.estimationOfResults.mazerace.CGDETiU['81-90'].I;
        result.slowStarter += this.estimationOfResults.mazerace.CGDETiU['81-90'].SS;
        result.panic += this.estimationOfResults.mazerace.CGDETiU['81-90'].Panic;
        result.frustration += this.estimationOfResults.mazerace.CGDETiU['81-90'].F;
      } else if (duration > 90000 && duration <= 100000) {
        result.lowConfidence += this.estimationOfResults.mazerace.CGDETiU['91-100'].LC;
        result.badTimeMan += this.estimationOfResults.mazerace.CGDETiU['91-100'].BTM;
        result.perfectionism += this.estimationOfResults.mazerace.CGDETiU['91-100'].P;
        result.negThink += this.estimationOfResults.mazerace.CGDETiU['91-100'].NT;
        result.lackRicuz += this.estimationOfResults.mazerace.CGDETiU['91-100'].LR;
        result.impulsivity += this.estimationOfResults.mazerace.CGDETiU['91-100'].I;
        result.slowStarter += this.estimationOfResults.mazerace.CGDETiU['91-100'].SS;
        result.panic += this.estimationOfResults.mazerace.CGDETiU['91-100'].Panic;
        result.frustration += this.estimationOfResults.mazerace.CGDETiU['91-100'].F;
      } else if (duration > 100000 && duration <= 115000) {
        result.lowConfidence += this.estimationOfResults.mazerace.CGDETiU['101-115'].LC;
        result.badTimeMan += this.estimationOfResults.mazerace.CGDETiU['101-115'].BTM;
        result.perfectionism += this.estimationOfResults.mazerace.CGDETiU['101-115'].P;
        result.negThink += this.estimationOfResults.mazerace.CGDETiU['101-115'].NT;
        result.lackRicuz += this.estimationOfResults.mazerace.CGDETiU['101-115'].LR;
        result.impulsivity += this.estimationOfResults.mazerace.CGDETiU['101-115'].I;
        result.slowStarter += this.estimationOfResults.mazerace.CGDETiU['101-115'].SS;
        result.panic += this.estimationOfResults.mazerace.CGDETiU['101-115'].Panic;
        result.frustration += this.estimationOfResults.mazerace.CGDETiU['101-115'].F;
      } else if (duration > 116000) {
        result.lowConfidence += this.estimationOfResults.mazerace.CGDETiU['116+'].LC;
        result.badTimeMan += this.estimationOfResults.mazerace.CGDETiU['116+'].BTM;
        result.perfectionism += this.estimationOfResults.mazerace.CGDETiU['116+'].P;
        result.negThink += this.estimationOfResults.mazerace.CGDETiU['116+'].NT;
        result.lackRicuz += this.estimationOfResults.mazerace.CGDETiU['116+'].LR;
        result.impulsivity += this.estimationOfResults.mazerace.CGDETiU['116+'].I;
        result.slowStarter += this.estimationOfResults.mazerace.CGDETiU['116+'].SS;
        result.panic += this.estimationOfResults.mazerace.CGDETiU['116+'].Panic;
        result.frustration += this.estimationOfResults.mazerace.CGDETiU['116+'].F;
      }
    }
    if (this.orderOfGames.UPDI.mazerace.IB) {
    // Instruction Button
      if (instructionsClickCount === 0) {
        result.lowConfidence += this.estimationOfResults.mazerace.IB['0'].LC;
        result.badTimeMan += this.estimationOfResults.mazerace.IB['0'].BTM;
        result.perfectionism += this.estimationOfResults.mazerace.IB['0'].P;
        result.negThink += this.estimationOfResults.mazerace.IB['0'].NT;
        result.lackRicuz += this.estimationOfResults.mazerace.IB['0'].LR;
        result.impulsivity += this.estimationOfResults.mazerace.IB['0'].I;
        result.slowStarter += this.estimationOfResults.mazerace.IB['0'].SS;
        result.panic += this.estimationOfResults.mazerace.IB['0'].Panic;
        result.frustration += this.estimationOfResults.mazerace.IB['0'].F;
      } else if (instructionsClickCount === 1) {
        result.lowConfidence += this.estimationOfResults.mazerace.IB['1'].LC;
        result.badTimeMan += this.estimationOfResults.mazerace.IB['1'].BTM;
        result.perfectionism += this.estimationOfResults.mazerace.IB['1'].P;
        result.negThink += this.estimationOfResults.mazerace.IB['1'].NT;
        result.lackRicuz += this.estimationOfResults.mazerace.IB['1'].LR;
        result.impulsivity += this.estimationOfResults.mazerace.IB['1'].I;
        result.slowStarter += this.estimationOfResults.mazerace.IB['1'].SS;
        result.panic += this.estimationOfResults.mazerace.IB['1'].Panic;
        result.frustration += this.estimationOfResults.mazerace.IB['1'].F;
      } else if (instructionsClickCount >= 2) {
        result.lowConfidence += this.estimationOfResults.mazerace.IB['2+'].LC;
        result.badTimeMan += this.estimationOfResults.mazerace.IB['2+'].BTM;
        result.perfectionism += this.estimationOfResults.mazerace.IB['2+'].P;
        result.negThink += this.estimationOfResults.mazerace.IB['2+'].NT;
        result.lackRicuz += this.estimationOfResults.mazerace.IB['2+'].LR;
        result.impulsivity += this.estimationOfResults.mazerace.IB['2+'].I;
        result.slowStarter += this.estimationOfResults.mazerace.IB['2+'].SS;
        result.panic += this.estimationOfResults.mazerace.IB['2+'].Panic;
        result.frustration += this.estimationOfResults.mazerace.IB['2+'].F;
      }
    }
    this.gameScore.mazerace = [result.lowConfidence, result.badTimeMan, result.perfectionism, result.negThink, result.lackRicuz, result.impulsivity, result.slowStarter, result.panic, result.frustration];
    alert(`mazerace = ${this.gameScore.mazerace}`);
  }
}

MazeraceService.$inject = ['gameScoreValue', 'estimationOfResults', 'orderOfGames'];
module.exports = MazeraceService;
