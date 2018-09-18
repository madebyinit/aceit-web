class SkipService {
  constructor(gameScoreValue, orderOfGames, helperService) {
    this.gameScore = gameScoreValue;
    this.orderOfGames = orderOfGames;
    this.helperService = helperService;
  }

  GameSkip(secondsleft, gameName, estimationOfResults, admin) {
    this.estimationOfResults = estimationOfResults;
    if (this.orderOfGames.UPDI[gameName].SG) {
      if (secondsleft <= 30) {
        this.GameSkipEndFunction('0-30', secondsleft, gameName, admin);
      } else if (secondsleft > 30 && secondsleft <= 40) {
        this.GameSkipEndFunction('31-40', secondsleft, gameName, admin);
      } else if (secondsleft > 40 && secondsleft <= 50) {
        this.GameSkipEndFunction('41-50', secondsleft, gameName, admin);
      } else if (secondsleft > 50 && secondsleft <= 60) {
        this.GameSkipEndFunction('51-60', secondsleft, gameName, admin);
      } else if (secondsleft > 60 && secondsleft <= 70) {
        this.GameSkipEndFunction('61-70', secondsleft, gameName, admin);
      } else if (secondsleft > 70 && secondsleft <= 80) {
        this.GameSkipEndFunction('71-80', secondsleft, gameName, admin);
      } else if (secondsleft > 80 && secondsleft <= 90) {
        this.GameSkipEndFunction('81-90', secondsleft, gameName, admin);
      } else if (secondsleft > 90 && secondsleft <= 100) {
        this.GameSkipEndFunction('91-100', secondsleft, gameName, admin);
      } else if (secondsleft > 100 && secondsleft <= 115) {
        this.GameSkipEndFunction('101-115', secondsleft, gameName, admin);
      } else if (secondsleft > 116) {
        this.GameSkipEndFunction('116+', secondsleft, gameName, admin);
      }
    }
  }
  GameSkipEndFunction(key, secondsleft, gameName, admin) {
    this.gameScore[gameName][0] += this.estimationOfResults[gameName].Skip[key].LC;
    this.gameScore[gameName][1] += this.estimationOfResults[gameName].Skip[key].BTM;
    this.gameScore[gameName][2] += this.estimationOfResults[gameName].Skip[key].P;
    this.gameScore[gameName][3] += this.estimationOfResults[gameName].Skip[key].NT;
    this.gameScore[gameName][4] += this.estimationOfResults[gameName].Skip[key].LR;
    this.gameScore[gameName][5] += this.estimationOfResults[gameName].Skip[key].I;
    this.gameScore[gameName][6] += this.estimationOfResults[gameName].Skip[key].SS;
    this.gameScore[gameName][7] += this.estimationOfResults[gameName].Skip[key].Panic;
    this.gameScore[gameName][8] += this.estimationOfResults[gameName].Skip[key].F;
    // SumFromGame = (`parkinglot Summ =  lowConfidence =${this.gameScore.parkinglotLast[0]} badTimeMan =${this.gameScore.parkinglotLast[1]} perfectionism = ${this.gameScore.parkinglotLast[2]} negThink = ${this.gameScore.parkinglotLast[3]} lackRicuz = ${this.gameScore.parkinglotLast[4]} impulsivity = ${this.gameScore.parkinglotLast[5]} slowStarter = ${this.gameScore.parkinglotLast[6]}  panic =  ${this.gameScore.parkinglotLast[7]} frustration = ${this.gameScore.parkinglotLast[8]} |`);
    // alert(`SKIP RESULT - time ${secondsleft} - Bad Time Man = ${this.gameScore[gameName][0]} Frustration = ${this.gameScore[gameName][1]} Impulsivity =  ${this.gameScore[gameName][2]} Low Confidence = ${this.gameScore[gameName][3]} Lack Ricuz =  ${this.gameScore[gameName][4]} Neg Think = ${this.gameScore[gameName][5]} Perfectionism = ${this.gameScore[gameName][6]}  panic = ${this.gameScore[gameName][7]}  Slow Starter = ${this.gameScore[gameName][8]}`);
    // alert(`SKIP RESULT - Bad Time Man = ${this.gameScore[gameName][0]} Frustration = ${this.gameScore[gameName][1]} Impulsivity =  ${this.gameScore[gameName][2]} Low Confidence = ${this.gameScore[gameName][3]} Lack Ricuz =  ${this.gameScore[gameName][4]} Neg Think = ${this.gameScore[gameName][5]} Perfectionism = ${this.gameScore[gameName][6]}  panic = ${this.gameScore[gameName][7]}  Slow Starter = ${this.gameScore[gameName][8]}`);
    if (admin) {
      alert(`SKIP RESULT - time ${secondsleft}
    lowConfidence =${this.estimationOfResults[gameName].Skip[key].LC} 
    badTimeMan =${this.estimationOfResults[gameName].Skip[key].BTM} 
    perfectionism = ${this.estimationOfResults[gameName].Skip[key].P} 
    negThink = ${this.estimationOfResults[gameName].Skip[key].NT} 
    lackRicuz = ${this.estimationOfResults[gameName].Skip[key].LR} 
    impulsivity = ${this.estimationOfResults[gameName].Skip[key].I} 
    slowStarter = ${this.estimationOfResults[gameName].Skip[key].SS}  
    panic =  ${this.estimationOfResults[gameName].Skip[key].Panic} 
    frustration = ${this.estimationOfResults[gameName].Skip[key].F} |`);
    }
  }
}

SkipService.$inject = ['gameScoreValue', 'orderOfGames', 'helperService'];
module.exports = SkipService;
