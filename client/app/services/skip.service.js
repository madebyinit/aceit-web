class SkipService {
  constructor(gameScoreValue, orderOfGames, helperService) {
    this.gameScore = gameScoreValue;
    this.orderOfGames = orderOfGames;
    this.helperService = helperService;
  }

  GameSkip(secondsleft, gameName, estimationOfResults) {
    this.estimationOfResults = estimationOfResults;
    if (this.orderOfGames.UPDI[gameName].SG) {
      if (secondsleft <= 30) {
        this.gameScore[gameName][0] += this.estimationOfResults[gameName].Skip['0-30'].LC;
        this.gameScore[gameName][1] += this.estimationOfResults[gameName].Skip['0-30'].BTM;
        this.gameScore[gameName][2] += this.estimationOfResults[gameName].Skip['0-30'].P;
        this.gameScore[gameName][3] += this.estimationOfResults[gameName].Skip['0-30'].NT;
        this.gameScore[gameName][4] += this.estimationOfResults[gameName].Skip['0-30'].LR;
        this.gameScore[gameName][5] += this.estimationOfResults[gameName].Skip['0-30'].I;
        this.gameScore[gameName][6] += this.estimationOfResults[gameName].Skip['0-30'].SS;
        this.gameScore[gameName][7] += this.estimationOfResults[gameName].Skip['0-30'].Panic;
        this.gameScore[gameName][8] += this.estimationOfResults[gameName].Skip['0-30'].F;
      } else if (secondsleft > 30 && secondsleft <= 40) {
        this.gameScore[gameName][0] += this.estimationOfResults[gameName].Skip['31-40'].LC;
        this.gameScore[gameName][1] += this.estimationOfResults[gameName].Skip['31-40'].BTM;
        this.gameScore[gameName][2] += this.estimationOfResults[gameName].Skip['31-40'].P;
        this.gameScore[gameName][3] += this.estimationOfResults[gameName].Skip['31-40'].NT;
        this.gameScore[gameName][4] += this.estimationOfResults[gameName].Skip['31-40'].LR;
        this.gameScore[gameName][5] += this.estimationOfResults[gameName].Skip['31-40'].I;
        this.gameScore[gameName][6] += this.estimationOfResults[gameName].Skip['31-40'].SS;
        this.gameScore[gameName][7] += this.estimationOfResults[gameName].Skip['31-40'].Panic;
        this.gameScore[gameName][8] += this.estimationOfResults[gameName].Skip['31-40'].F;
      } else if (secondsleft > 40 && secondsleft <= 50) {
        this.gameScore[gameName][0] += this.estimationOfResults[gameName].Skip['41-50'].LC;
        this.gameScore[gameName][1] += this.estimationOfResults[gameName].Skip['41-50'].BTM;
        this.gameScore[gameName][2] += this.estimationOfResults[gameName].Skip['41-50'].P;
        this.gameScore[gameName][3] += this.estimationOfResults[gameName].Skip['41-50'].NT;
        this.gameScore[gameName][4] += this.estimationOfResults[gameName].Skip['41-50'].LR;
        this.gameScore[gameName][5] += this.estimationOfResults[gameName].Skip['41-50'].I;
        this.gameScore[gameName][6] += this.estimationOfResults[gameName].Skip['41-50'].SS;
        this.gameScore[gameName][7] += this.estimationOfResults[gameName].Skip['41-50'].Panic;
        this.gameScore[gameName][8] += this.estimationOfResults[gameName].Skip['41-50'].F;
      } else if (secondsleft > 50 && secondsleft <= 60) {
        this.gameScore[gameName][0] += this.estimationOfResults[gameName].Skip['51-60'].LC;
        this.gameScore[gameName][1] += this.estimationOfResults[gameName].Skip['51-60'].BTM;
        this.gameScore[gameName][2] += this.estimationOfResults[gameName].Skip['51-60'].P;
        this.gameScore[gameName][3] += this.estimationOfResults[gameName].Skip['51-60'].NT;
        this.gameScore[gameName][4] += this.estimationOfResults[gameName].Skip['51-60'].LR;
        this.gameScore[gameName][5] += this.estimationOfResults[gameName].Skip['51-60'].I;
        this.gameScore[gameName][6] += this.estimationOfResults[gameName].Skip['51-60'].SS;
        this.gameScore[gameName][7] += this.estimationOfResults[gameName].Skip['51-60'].Panic;
        this.gameScore[gameName][8] += this.estimationOfResults[gameName].Skip['51-60'].F;
      } else if (secondsleft > 60 && secondsleft <= 70) {
        this.gameScore[gameName][0] += this.estimationOfResults[gameName].Skip['61-70'].LC;
        this.gameScore[gameName][1] += this.estimationOfResults[gameName].Skip['61-70'].BTM;
        this.gameScore[gameName][2] += this.estimationOfResults[gameName].Skip['61-70'].P;
        this.gameScore[gameName][3] += this.estimationOfResults[gameName].Skip['61-70'].NT;
        this.gameScore[gameName][4] += this.estimationOfResults[gameName].Skip['61-70'].LR;
        this.gameScore[gameName][5] += this.estimationOfResults[gameName].Skip['61-70'].I;
        this.gameScore[gameName][6] += this.estimationOfResults[gameName].Skip['61-70'].SS;
        this.gameScore[gameName][7] += this.estimationOfResults[gameName].Skip['61-70'].Panic;
        this.gameScore[gameName][8] += this.estimationOfResults[gameName].Skip['61-70'].F;
      } else if (secondsleft > 70 && secondsleft <= 80) {
        this.gameScore[gameName][0] += this.estimationOfResults[gameName].Skip['71-80'].LC;
        this.gameScore[gameName][1] += this.estimationOfResults[gameName].Skip['71-80'].BTM;
        this.gameScore[gameName][2] += this.estimationOfResults[gameName].Skip['71-80'].P;
        this.gameScore[gameName][3] += this.estimationOfResults[gameName].Skip['71-80'].NT;
        this.gameScore[gameName][4] += this.estimationOfResults[gameName].Skip['71-80'].LR;
        this.gameScore[gameName][5] += this.estimationOfResults[gameName].Skip['71-80'].I;
        this.gameScore[gameName][6] += this.estimationOfResults[gameName].Skip['71-80'].SS;
        this.gameScore[gameName][7] += this.estimationOfResults[gameName].Skip['71-80'].Panic;
        this.gameScore[gameName][8] += this.estimationOfResults[gameName].Skip['71-80'].F;
      } else if (secondsleft > 80 && secondsleft <= 90) {
        this.gameScore[gameName][0] += this.estimationOfResults[gameName].Skip['81-90'].LC;
        this.gameScore[gameName][1] += this.estimationOfResults[gameName].Skip['81-90'].BTM;
        this.gameScore[gameName][2] += this.estimationOfResults[gameName].Skip['81-90'].P;
        this.gameScore[gameName][3] += this.estimationOfResults[gameName].Skip['81-90'].NT;
        this.gameScore[gameName][4] += this.estimationOfResults[gameName].Skip['81-90'].LR;
        this.gameScore[gameName][5] += this.estimationOfResults[gameName].Skip['81-90'].I;
        this.gameScore[gameName][6] += this.estimationOfResults[gameName].Skip['81-90'].SS;
        this.gameScore[gameName][7] += this.estimationOfResults[gameName].Skip['81-90'].Panic;
        this.gameScore[gameName][8] += this.estimationOfResults[gameName].Skip['81-90'].F;
      } else if (secondsleft > 90 && secondsleft <= 100) {
        this.gameScore[gameName][0] += this.estimationOfResults[gameName].Skip['91-100'].LC;
        this.gameScore[gameName][1] += this.estimationOfResults[gameName].Skip['91-100'].BTM;
        this.gameScore[gameName][2] += this.estimationOfResults[gameName].Skip['91-100'].P;
        this.gameScore[gameName][3] += this.estimationOfResults[gameName].Skip['91-100'].NT;
        this.gameScore[gameName][4] += this.estimationOfResults[gameName].Skip['91-100'].LR;
        this.gameScore[gameName][5] += this.estimationOfResults[gameName].Skip['91-100'].I;
        this.gameScore[gameName][6] += this.estimationOfResults[gameName].Skip['91-100'].SS;
        this.gameScore[gameName][7] += this.estimationOfResults[gameName].Skip['91-100'].Panic;
        this.gameScore[gameName][8] += this.estimationOfResults[gameName].Skip['91-100'].F;
      } else if (secondsleft > 100 && secondsleft <= 115) {
        this.gameScore[gameName][0] += this.estimationOfResults[gameName].Skip['101-115'].LC;
        this.gameScore[gameName][1] += this.estimationOfResults[gameName].Skip['101-115'].BTM;
        this.gameScore[gameName][2] += this.estimationOfResults[gameName].Skip['101-115'].P;
        this.gameScore[gameName][3] += this.estimationOfResults[gameName].Skip['101-115'].NT;
        this.gameScore[gameName][4] += this.estimationOfResults[gameName].Skip['101-115'].LR;
        this.gameScore[gameName][5] += this.estimationOfResults[gameName].Skip['101-115'].I;
        this.gameScore[gameName][6] += this.estimationOfResults[gameName].Skip['101-115'].SS;
        this.gameScore[gameName][7] += this.estimationOfResults[gameName].Skip['101-115'].Panic;
        this.gameScore[gameName][8] += this.estimationOfResults[gameName].Skip['101-115'].F;
      } else if (secondsleft > 116) {
        this.gameScore[gameName][0] += this.estimationOfResults[gameName].Skip['116+'].LC;
        this.gameScore[gameName][1] += this.estimationOfResults[gameName].Skip['116+'].BTM;
        this.gameScore[gameName][2] += this.estimationOfResults[gameName].Skip['116+'].P;
        this.gameScore[gameName][3] += this.estimationOfResults[gameName].Skip['116+'].NT;
        this.gameScore[gameName][4] += this.estimationOfResults[gameName].Skip['116+'].LR;
        this.gameScore[gameName][5] += this.estimationOfResults[gameName].Skip['116+'].I;
        this.gameScore[gameName][6] += this.estimationOfResults[gameName].Skip['116+'].SS;
        this.gameScore[gameName][7] += this.estimationOfResults[gameName].Skip['116+'].Panic;
        this.gameScore[gameName][8] += this.estimationOfResults[gameName].Skip['116+'].F;
      }
    }
    alert(`SKIP RESULT - Bad Time Man = ${this.gameScore[gameName][0]} Frustration = ${this.gameScore[gameName][1]} Impulsivity =  ${this.gameScore[gameName][2]} Low Confidence = ${this.gameScore[gameName][3]} Lack Ricuz =  ${this.gameScore[gameName][4]} Neg Think = ${this.gameScore[gameName][5]} Perfectionism = ${this.gameScore[gameName][6]}  panic = ${this.gameScore[gameName][7]}  Slow Starter = ${this.gameScore[gameName][8]}`);
  }
}

SkipService.$inject = ['gameScoreValue', 'orderOfGames', 'helperService'];
module.exports = SkipService;
