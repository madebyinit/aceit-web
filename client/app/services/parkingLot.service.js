class ParkingLotService {
  constructor(gameScoreValue, estimationOfResults, orderOfGames) {
    this.gameScore = gameScoreValue;
    this.estimationOfResults = estimationOfResults;
    this.orderOfGames = orderOfGames;
  }

  end(duration, noOfMoves, instructionsClickCount, win, firstMoveTime, admin) {
    console.log(admin);
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
    let firstMove = '';
    let instruct = '';
    let moves = '';
    let durationgame = '';
    const space = '                                                                                                     ';
    if (win) {
      this.gameScore.gamesSuccessfullyCompleted += 1;
    }
    if (this.orderOfGames.UPDI.parkinglot.NIA) {
    // No Initial Activity
      if (firstMoveTime <= 14000) {
        result.lowConfidence += this.estimationOfResults.parkinglot.NIA['0-14'].LC;
        result.badTimeMan += this.estimationOfResults.parkinglot.NIA['0-14'].BTM;
        result.perfectionism += this.estimationOfResults.parkinglot.NIA['0-14'].P;
        result.negThink += this.estimationOfResults.parkinglot.NIA['0-14'].NT;
        result.lackRicuz += this.estimationOfResults.parkinglot.NIA['0-14'].LR;
        result.impulsivity += this.estimationOfResults.parkinglot.NIA['0-14'].I;
        result.slowStarter += this.estimationOfResults.parkinglot.NIA['0-14'].SS;
        result.panic += this.estimationOfResults.parkinglot.NIA['0-14'].Panic;
        result.frustration += this.estimationOfResults.parkinglot.NIA['0-14'].F;
        firstMove = (`firstMoveTime lowConfidence = ${this.estimationOfResults.parkinglot.NIA['0-14'].LC} badTimeMan = ${this.estimationOfResults.parkinglot.NIA['0-14'].BTM} perfectionism = ${this.estimationOfResults.parkinglot.NIA['0-14'].P} negThink = ${this.estimationOfResults.parkinglot.NIA['0-14'].NT} lackRicuz = ${this.estimationOfResults.parkinglot.NIA['0-14'].LR} impulsivity = ${this.estimationOfResults.parkinglot.NIA['0-14'].I} slowStarter = ${this.estimationOfResults.parkinglot.NIA['0-14'].SS} panic = ${this.estimationOfResults.parkinglot.NIA['0-14'].Panic} frustration = ${this.estimationOfResults.parkinglot.NIA['0-14'].F} |`);
      } else if (firstMoveTime > 14000 && firstMoveTime < 24000) {
        result.lowConfidence += this.estimationOfResults.parkinglot.NIA['15-24'].LC;
        result.badTimeMan += this.estimationOfResults.parkinglot.NIA['15-24'].BTM;
        result.perfectionism += this.estimationOfResults.parkinglot.NIA['15-24'].P;
        result.negThink += this.estimationOfResults.parkinglot.NIA['15-24'].NT;
        result.lackRicuz += this.estimationOfResults.parkinglot.NIA['15-24'].LR;
        result.impulsivity += this.estimationOfResults.parkinglot.NIA['15-24'].I;
        result.slowStarter += this.estimationOfResults.parkinglot.NIA['15-24'].SS;
        result.panic += this.estimationOfResults.parkinglot.NIA['15-24'].Panic;
        result.frustration += this.estimationOfResults.parkinglot.NIA['15-24'].F;
        firstMove = (`firstMoveTime lowConfidence = ${this.estimationOfResults.parkinglot.NIA['15-24'].LC} badTimeMan = ${this.estimationOfResults.parkinglot.NIA['15-24'].BTM} perfectionism = ${this.estimationOfResults.parkinglot.NIA['15-24'].P} negThink = ${this.estimationOfResults.parkinglot.NIA['15-24'].NT} lackRicuz = ${this.estimationOfResults.parkinglot.NIA['15-24'].LR} impulsivity = ${this.estimationOfResults.parkinglot.NIA['15-24'].I} slowStarter = ${this.estimationOfResults.parkinglot.NIA['15-24'].SS} panic = ${this.estimationOfResults.parkinglot.NIA['15-24'].Panic} frustration = ${this.estimationOfResults.parkinglot.NIA['15-24'].F} |`);
      } else if (firstMoveTime > 24000) {
        result.lowConfidence += this.estimationOfResults.parkinglot.NIA['25+'].LC;
        result.badTimeMan += this.estimationOfResults.parkinglot.NIA['25+'].BTM;
        result.perfectionism += this.estimationOfResults.parkinglot.NIA['25+'].P;
        result.negThink += this.estimationOfResults.parkinglot.NIA['25+'].NT;
        result.lackRicuz += this.estimationOfResults.parkinglot.NIA['25+'].LR;
        result.impulsivity += this.estimationOfResults.parkinglot.NIA['25+'].I;
        result.slowStarter += this.estimationOfResults.parkinglot.NIA['25+'].SS;
        result.panic += this.estimationOfResults.parkinglot.NIA['25+'].Panic;
        result.frustration += this.estimationOfResults.parkinglot.NIA['25+'].F;
        firstMove = (`firstMoveTime lowConfidence =${this.estimationOfResults.parkinglot.NIA['25+'].LC} badTimeMan = ${this.estimationOfResults.parkinglot.NIA['25+'].BTM} perfectionism = ${this.estimationOfResults.parkinglot.NIA['25+'].P} negThink = ${this.estimationOfResults.parkinglot.NIA['25+'].NT} lackRicuz = ${this.estimationOfResults.parkinglot.NIA['25+'].LR} impulsivity = ${this.estimationOfResults.parkinglot.NIA['25+'].I} slowStarter = ${this.estimationOfResults.parkinglot.NIA['25+'].SS} panic = ${this.estimationOfResults.parkinglot.NIA['25+'].Panic} frustration = ${this.estimationOfResults.parkinglot.NIA['25+'].F} |`);
      }
    }
    if (this.orderOfGames.UPDI.parkinglot.SGD) {
    // Successful Game Duration
      if (duration > 0 && duration <= 40000) {
        result.lowConfidence += this.estimationOfResults.parkinglot.SGD['0-40'].LC;
        result.badTimeMan += this.estimationOfResults.parkinglot.SGD['0-40'].BTM;
        result.perfectionism += this.estimationOfResults.parkinglot.SGD['0-40'].P;
        result.negThink += this.estimationOfResults.parkinglot.SGD['0-40'].NT;
        result.lackRicuz += this.estimationOfResults.parkinglot.SGD['0-40'].LR;
        result.impulsivity += this.estimationOfResults.parkinglot.SGD['0-40'].I;
        result.slowStarter += this.estimationOfResults.parkinglot.SGD['0-40'].SS;
        result.panic += this.estimationOfResults.parkinglot.SGD['0-40'].Panic;
        result.frustration += this.estimationOfResults.parkinglot.SGD['0-40'].F;
        durationgame = (`${' Game Duration lowConfidence ='}${this.estimationOfResults.parkinglot.SGD['0-40'].LC} badTimeMan = ${this.estimationOfResults.parkinglot.SGD['0-40'].BTM} perfectionism = ${this.estimationOfResults.parkinglot.SGD['0-40'].P} negThink = ${this.estimationOfResults.parkinglot.SGD['0-40'].NT} lackRicuz = ${this.estimationOfResults.parkinglot.SGD['0-40'].LR} impulsivity = ${this.estimationOfResults.parkinglot.SGD['0-40'].I} slowStarter = ${this.estimationOfResults.parkinglot.SGD['0-40'].SS} panic = ${this.estimationOfResults.parkinglot.SGD['0-40'].Panic} frustration = ${this.estimationOfResults.parkinglot.SGD['0-40'].F} |`);
      } else if (duration > 40000 && duration <= 50000) {
        result.lowConfidence += this.estimationOfResults.parkinglot.SGD['41-50'].LC;
        result.badTimeMan += this.estimationOfResults.parkinglot.SGD['41-50'].BTM;
        result.perfectionism += this.estimationOfResults.parkinglot.SGD['41-50'].P;
        result.negThink += this.estimationOfResults.parkinglot.SGD['41-50'].NT;
        result.lackRicuz += this.estimationOfResults.parkinglot.SGD['41-50'].LR;
        result.impulsivity += this.estimationOfResults.parkinglot.SGD['41-50'].I;
        result.slowStarter += this.estimationOfResults.parkinglot.SGD['41-50'].SS;
        result.panic += this.estimationOfResults.parkinglot.SGD['41-50'].Panic;
        result.frustration += this.estimationOfResults.parkinglot.SGD['41-50'].F;
        durationgame = (`${' Game Duration lowConfidence ='}${this.estimationOfResults.parkinglot.SGD['41-50'].LC} badTimeMan = ${this.estimationOfResults.parkinglot.SGD['41-50'].BTM} perfectionism = ${this.estimationOfResults.parkinglot.SGD['41-50'].P} negThink = ${this.estimationOfResults.parkinglot.SGD['41-50'].NT} lackRicuz = ${this.estimationOfResults.parkinglot.SGD['41-50'].LR} impulsivity = ${this.estimationOfResults.parkinglot.SGD['41-50'].I} slowStarter = ${this.estimationOfResults.parkinglot.SGD['41-50'].SS} panic = ${this.estimationOfResults.parkinglot.SGD['41-50'].Panic} frustration = ${this.estimationOfResults.parkinglot.SGD['41-50'].F} |`);
      } else if (duration > 50000 && duration <= 60000) {
        result.lowConfidence += this.estimationOfResults.parkinglot.SGD['51-60'].LC;
        result.badTimeMan += this.estimationOfResults.parkinglot.SGD['51-60'].BTM;
        result.perfectionism += this.estimationOfResults.parkinglot.SGD['51-60'].P;
        result.negThink += this.estimationOfResults.parkinglot.SGD['51-60'].NT;
        result.lackRicuz += this.estimationOfResults.parkinglot.SGD['51-60'].LR;
        result.impulsivity += this.estimationOfResults.parkinglot.SGD['51-60'].I;
        result.slowStarter += this.estimationOfResults.parkinglot.SGD['51-60'].SS;
        result.panic += this.estimationOfResults.parkinglot.SGD['51-60'].Panic;
        result.frustration += this.estimationOfResults.parkinglot.SGD['51-60'].F;
        durationgame = (`${' Game Duration lowConfidence ='}${this.estimationOfResults.parkinglot.SGD['51-60'].LC} badTimeMan = ${this.estimationOfResults.parkinglot.SGD['51-60'].BTM} perfectionism = ${this.estimationOfResults.parkinglot.SGD['51-60'].P} negThink = ${this.estimationOfResults.parkinglot.SGD['51-60'].NT} lackRicuz = ${this.estimationOfResults.parkinglot.SGD['51-60'].LR} impulsivity = ${this.estimationOfResults.parkinglot.SGD['51-60'].I} slowStarter = ${this.estimationOfResults.parkinglot.SGD['51-60'].SS} panic = ${this.estimationOfResults.parkinglot.SGD['51-60'].Panic} frustration = ${this.estimationOfResults.parkinglot.SGD['51-60'].F} |`);
      } else if (duration > 60000 && duration <= 70000) {
        result.lowConfidence += this.estimationOfResults.parkinglot.SGD['61-70'].LC;
        result.badTimeMan += this.estimationOfResults.parkinglot.SGD['61-70'].BTM;
        result.perfectionism += this.estimationOfResults.parkinglot.SGD['61-70'].P;
        result.negThink += this.estimationOfResults.parkinglot.SGD['61-70'].NT;
        result.lackRicuz += this.estimationOfResults.parkinglot.SGD['61-70'].LR;
        result.impulsivity += this.estimationOfResults.parkinglot.SGD['61-70'].I;
        result.slowStarter += this.estimationOfResults.parkinglot.SGD['61-70'].SS;
        result.panic += this.estimationOfResults.parkinglot.SGD['61-70'].Panic;
        result.frustration += this.estimationOfResults.parkinglot.SGD['61-70'].F;
        durationgame = (`${' Game Duration lowConfidence ='}${this.estimationOfResults.parkinglot.SGD['61-70'].LC} badTimeMan = ${this.estimationOfResults.parkinglot.SGD['61-70'].BTM} perfectionism = ${this.estimationOfResults.parkinglot.SGD['61-70'].P} negThink = ${this.estimationOfResults.parkinglot.SGD['61-70'].NT} lackRicuz = ${this.estimationOfResults.parkinglot.SGD['61-70'].LR} impulsivity = ${this.estimationOfResults.parkinglot.SGD['61-70'].I} slowStarter = ${this.estimationOfResults.parkinglot.SGD['61-70'].SS} panic = ${this.estimationOfResults.parkinglot.SGD['61-70'].Panic} frustration = ${this.estimationOfResults.parkinglot.SGD['61-70'].F} |`);
      } else if (duration > 70000 && duration <= 80000) {
        result.lowConfidence += this.estimationOfResults.parkinglot.SGD['71-80'].LC;
        result.badTimeMan += this.estimationOfResults.parkinglot.SGD['71-80'].BTM;
        result.perfectionism += this.estimationOfResults.parkinglot.SGD['71-80'].P;
        result.negThink += this.estimationOfResults.parkinglot.SGD['71-80'].NT;
        result.lackRicuz += this.estimationOfResults.parkinglot.SGD['71-80'].LR;
        result.impulsivity += this.estimationOfResults.parkinglot.SGD['71-80'].I;
        result.slowStarter += this.estimationOfResults.parkinglot.SGD['71-80'].SS;
        result.panic += this.estimationOfResults.parkinglot.SGD['71-80'].Panic;
        result.frustration += this.estimationOfResults.parkinglot.SGD['71-80'].F;
        durationgame = (`${' Game Duration lowConfidence ='}${this.estimationOfResults.parkinglot.SGD['71-80'].LC} badTimeMan = ${this.estimationOfResults.parkinglot.SGD['71-80'].BTM} perfectionism = ${this.estimationOfResults.parkinglot.SGD['71-80'].P} negThink = ${this.estimationOfResults.parkinglot.SGD['71-80'].NT} lackRicuz = ${this.estimationOfResults.parkinglot.SGD['71-80'].LR} impulsivity = ${this.estimationOfResults.parkinglot.SGD['71-80'].I} slowStarter = ${this.estimationOfResults.parkinglot.SGD['71-80'].SS} panic = ${this.estimationOfResults.parkinglot.SGD['71-80'].Panic} frustration = ${this.estimationOfResults.parkinglot.SGD['71-80'].F} |`);
      } else if (duration > 80000 && duration <= 90000) {
        result.lowConfidence += this.estimationOfResults.parkinglot.SGD['81-90'].LC;
        result.badTimeMan += this.estimationOfResults.parkinglot.SGD['81-90'].BTM;
        result.perfectionism += this.estimationOfResults.parkinglot.SGD['81-90'].P;
        result.negThink += this.estimationOfResults.parkinglot.SGD['81-90'].NT;
        result.lackRicuz += this.estimationOfResults.parkinglot.SGD['81-90'].LR;
        result.impulsivity += this.estimationOfResults.parkinglot.SGD['81-90'].I;
        result.slowStarter += this.estimationOfResults.parkinglot.SGD['81-90'].SS;
        result.panic += this.estimationOfResults.parkinglot.SGD['81-90'].Panic;
        result.frustration += this.estimationOfResults.parkinglot.SGD['81-90'].F;
        durationgame = (`${' Game Duration lowConfidence ='}${this.estimationOfResults.parkinglot.SGD['81-90'].LC} badTimeMan = ${this.estimationOfResults.parkinglot.SGD['81-90'].BTM} perfectionism = ${this.estimationOfResults.parkinglot.SGD['81-90'].P} negThink = ${this.estimationOfResults.parkinglot.SGD['81-90'].NT} lackRicuz = ${this.estimationOfResults.parkinglot.SGD['81-90'].LR} impulsivity = ${this.estimationOfResults.parkinglot.SGD['81-90'].I} slowStarter = ${this.estimationOfResults.parkinglot.SGD['81-90'].SS} panic = ${this.estimationOfResults.parkinglot.SGD['81-90'].Panic} frustration = ${this.estimationOfResults.parkinglot.SGD['81-90'].F} |`);
      } else if (duration > 90000 && duration <= 100000) {
        result.lowConfidence += this.estimationOfResults.parkinglot.SGD['91-100'].LC;
        result.badTimeMan += this.estimationOfResults.parkinglot.SGD['91-100'].BTM;
        result.perfectionism += this.estimationOfResults.parkinglot.SGD['91-100'].P;
        result.negThink += this.estimationOfResults.parkinglot.SGD['91-100'].NT;
        result.lackRicuz += this.estimationOfResults.parkinglot.SGD['91-100'].LR;
        result.impulsivity += this.estimationOfResults.parkinglot.SGD['91-100'].I;
        result.slowStarter += this.estimationOfResults.parkinglot.SGD['91-100'].SS;
        result.panic += this.estimationOfResults.parkinglot.SGD['91-100'].Panic;
        result.frustration += this.estimationOfResults.parkinglot.SGD['91-100'].F;
        durationgame = (`${' Game Duration lowConfidence ='}${this.estimationOfResults.parkinglot.SGD['91-100'].LC} badTimeMan = ${this.estimationOfResults.parkinglot.SGD['91-100'].BTM} perfectionism = ${this.estimationOfResults.parkinglot.SGD['91-100'].P} negThink = ${this.estimationOfResults.parkinglot.SGD['91-100'].NT} lackRicuz = ${this.estimationOfResults.parkinglot.SGD['91-100'].LR} impulsivity = ${this.estimationOfResults.parkinglot.SGD['91-100'].I} slowStarter = ${this.estimationOfResults.parkinglot.SGD['91-100'].SS} panic = ${this.estimationOfResults.parkinglot.SGD['91-100'].Panic} frustration = ${this.estimationOfResults.parkinglot.SGD['91-100'].F} |`);
      } else if (duration > 100000 && duration <= 115000) {
        result.lowConfidence += this.estimationOfResults.parkinglot.SGD['101-115'].LC;
        result.badTimeMan += this.estimationOfResults.parkinglot.SGD['101-115'].BTM;
        result.perfectionism += this.estimationOfResults.parkinglot.SGD['101-115'].P;
        result.negThink += this.estimationOfResults.parkinglot.SGD['101-115'].NT;
        result.lackRicuz += this.estimationOfResults.parkinglot.SGD['101-115'].LR;
        result.impulsivity += this.estimationOfResults.parkinglot.SGD['101-115'].I;
        result.slowStarter += this.estimationOfResults.parkinglot.SGD['101-115'].SS;
        result.panic += this.estimationOfResults.parkinglot.SGD['101-115'].Panic;
        result.frustration += this.estimationOfResults.parkinglot.SGD['101-115'].F;
        durationgame = (`${' Game Duration lowConfidence ='}${this.estimationOfResults.parkinglot.SGD['101-115'].LC} badTimeMan = ${this.estimationOfResults.parkinglot.SGD['101-115'].BTM} perfectionism = ${this.estimationOfResults.parkinglot.SGD['101-115'].P} negThink = ${this.estimationOfResults.parkinglot.SGD['101-115'].NT} lackRicuz = ${this.estimationOfResults.parkinglot.SGD['101-115'].LR} impulsivity = ${this.estimationOfResults.parkinglot.SGD['101-115'].I} slowStarter = ${this.estimationOfResults.parkinglot.SGD['101-115'].SS} panic = ${this.estimationOfResults.parkinglot.SGD['101-115'].Panic} frustration = ${this.estimationOfResults.parkinglot.SGD['101-115'].F} |`);
      } else if (duration > 116000) {
        result.lowConfidence += this.estimationOfResults.parkinglot.SGD['116+'].LC;
        result.badTimeMan += this.estimationOfResults.parkinglot.SGD['116+'].BTM;
        result.perfectionism += this.estimationOfResults.parkinglot.SGD['116+'].P;
        result.negThink += this.estimationOfResults.parkinglot.SGD['116+'].NT;
        result.lackRicuz += this.estimationOfResults.parkinglot.SGD['116+'].LR;
        result.impulsivity += this.estimationOfResults.parkinglot.SGD['116+'].I;
        result.slowStarter += this.estimationOfResults.parkinglot.SGD['116+'].SS;
        result.panic += this.estimationOfResults.parkinglot.SGD['116+'].Panic;
        result.frustration += this.estimationOfResults.parkinglot.SGD['116+'].F;
        durationgame = (`${' Game Duration lowConfidence ='}${this.estimationOfResults.parkinglot.SGD['116+'].LC} badTimeMan = ${this.estimationOfResults.parkinglot.SGD['116+'].BTM} perfectionism = ${this.estimationOfResults.parkinglot.SGD['116+'].P} negThink = ${this.estimationOfResults.parkinglot.SGD['116+'].NT} lackRicuz = ${this.estimationOfResults.parkinglot.SGD['116+'].LR} impulsivity = ${this.estimationOfResults.parkinglot.SGD['116+'].I} slowStarter = ${this.estimationOfResults.parkinglot.SGD['116+'].SS} panic = ${this.estimationOfResults.parkinglot.SGD['116+'].Panic} frustration = ${this.estimationOfResults.parkinglot.SGD['116+'].F} |`);
      }
    }
    if (this.orderOfGames.UPDI.parkinglot.IB) {
    // Instruction Button
      if (instructionsClickCount === 0) {
        result.lowConfidence += this.estimationOfResults.parkinglot.IB['0'].LC;
        result.badTimeMan += this.estimationOfResults.parkinglot.IB['0'].BTM;
        result.perfectionism += this.estimationOfResults.parkinglot.IB['0'].P;
        result.negThink += this.estimationOfResults.parkinglot.IB['0'].NT;
        result.lackRicuz += this.estimationOfResults.parkinglot.IB['0'].LR;
        result.impulsivity += this.estimationOfResults.parkinglot.IB['0'].I;
        result.slowStarter += this.estimationOfResults.parkinglot.IB['0'].SS;
        result.panic += this.estimationOfResults.parkinglot.IB['0'].Panic;
        result.frustration += this.estimationOfResults.parkinglot.IB['0'].F;
        instruct = (`instructions ${instructionsClickCount} lowConfidence =${this.estimationOfResults.parkinglot.IB['0'].LC} badTimeMan = ${this.estimationOfResults.parkinglot.IB['0'].BTM} perfectionism = ${this.estimationOfResults.parkinglot.IB['0'].P} negThink = ${this.estimationOfResults.parkinglot.IB['0'].NT} lackRicuz = ${this.estimationOfResults.parkinglot.IB['0'].LR} impulsivity = ${this.estimationOfResults.parkinglot.IB['0'].I} slowStarter = ${this.estimationOfResults.parkinglot.IB['0'].SS} panic = ${this.estimationOfResults.parkinglot.IB['0'].Panic} frustration = ${this.estimationOfResults.parkinglot.IB['0'].F} |`);
      } else if (instructionsClickCount === 1) {
        result.lowConfidence += this.estimationOfResults.parkinglot.IB['1'].LC;
        result.badTimeMan += this.estimationOfResults.parkinglot.IB['1'].BTM;
        result.perfectionism += this.estimationOfResults.parkinglot.IB['1'].P;
        result.negThink += this.estimationOfResults.parkinglot.IB['1'].NT;
        result.lackRicuz += this.estimationOfResults.parkinglot.IB['1'].LR;
        result.impulsivity += this.estimationOfResults.parkinglot.IB['1'].I;
        result.slowStarter += this.estimationOfResults.parkinglot.IB['1'].SS;
        result.panic += this.estimationOfResults.parkinglot.IB['1'].Panic;
        result.frustration += this.estimationOfResults.parkinglot.IB['1'].F;
        instruct = (`instructions ${instructionsClickCount} lowConfidence =${this.estimationOfResults.parkinglot.IB['1'].LC} badTimeMan = ${this.estimationOfResults.parkinglot.IB['1'].BTM} perfectionism = ${this.estimationOfResults.parkinglot.IB['1'].P} negThink = ${this.estimationOfResults.parkinglot.IB['1'].NT} lackRicuz = ${this.estimationOfResults.parkinglot.IB['1'].LR} impulsivity = ${this.estimationOfResults.parkinglot.IB['1'].I} slowStarter = ${this.estimationOfResults.parkinglot.IB['1'].SS} panic = ${this.estimationOfResults.parkinglot.IB['1'].Panic} frustration = ${this.estimationOfResults.parkinglot.IB['1'].F} |`);
      } else if (instructionsClickCount >= 2) {
        result.lowConfidence += this.estimationOfResults.parkinglot.IB['2+'].LC;
        result.badTimeMan += this.estimationOfResults.parkinglot.IB['2+'].BTM;
        result.perfectionism += this.estimationOfResults.parkinglot.IB['2+'].P;
        result.negThink += this.estimationOfResults.parkinglot.IB['2+'].NT;
        result.lackRicuz += this.estimationOfResults.parkinglot.IB['2+'].LR;
        result.impulsivity += this.estimationOfResults.parkinglot.IB['2+'].I;
        result.slowStarter += this.estimationOfResults.parkinglot.IB['2+'].SS;
        result.panic += this.estimationOfResults.parkinglot.IB['2+'].Panic;
        result.frustration += this.estimationOfResults.parkinglot.IB['2+'].F;
        instruct = (`instructions ${instructionsClickCount} lowConfidence =${this.estimationOfResults.parkinglot.IB['2+'].LC} badTimeMan = ${this.estimationOfResults.parkinglot.IB['2+'].BTM} perfectionism = ${this.estimationOfResults.parkinglot.IB['2+'].P} negThink = ${this.estimationOfResults.parkinglot.IB['2+'].NT} lackRicuz = ${this.estimationOfResults.parkinglot.IB['2+'].LR} impulsivity = ${this.estimationOfResults.parkinglot.IB['2+'].I} slowStarter = ${this.estimationOfResults.parkinglot.IB['2+'].SS} panic = ${this.estimationOfResults.parkinglot.IB['2+'].Panic} frustration = ${this.estimationOfResults.parkinglot.IB['2+'].F} |`);
      }
    }
    if (this.orderOfGames.UPDI.parkinglot.NoM) {
    // Total # of moves
      if (noOfMoves < 41) {
        result.lowConfidence += this.estimationOfResults.parkinglot.TM['0-40'].LC;
        result.badTimeMan += this.estimationOfResults.parkinglot.TM['0-40'].BTM;
        result.perfectionism += this.estimationOfResults.parkinglot.TM['0-40'].P;
        result.negThink += this.estimationOfResults.parkinglot.TM['0-40'].NT;
        result.lackRicuz += this.estimationOfResults.parkinglot.TM['0-40'].LR;
        result.impulsivity += this.estimationOfResults.parkinglot.TM['0-40'].I;
        result.slowStarter += this.estimationOfResults.parkinglot.TM['0-40'].SS;
        result.panic += this.estimationOfResults.parkinglot.TM['0-40'].Panic;
        result.frustration += this.estimationOfResults.parkinglot.TM['0-40'].F;
        moves = (`noOfMoves ${noOfMoves}  lowConfidence =${this.estimationOfResults.parkinglot.TM['0-40'].LC} badTimeMan = ${this.estimationOfResults.parkinglot.TM['0-40'].BTM} perfectionism = ${this.estimationOfResults.parkinglot.TM['0-40'].P} negThink = ${this.estimationOfResults.parkinglot.TM['0-40'].NT} lackRicuz = ${this.estimationOfResults.parkinglot.TM['0-40'].LR} impulsivity = ${this.estimationOfResults.parkinglot.TM['0-40'].I} slowStarter = ${this.estimationOfResults.parkinglot.TM['0-40'].SS} panic = ${this.estimationOfResults.parkinglot.TM['0-40'].Panic} frustration = ${this.estimationOfResults.parkinglot.TM['0-40'].F} |`);
      } else if (noOfMoves >= 41 && noOfMoves < 61) {
        result.lowConfidence += this.estimationOfResults.parkinglot.TM['41-60'].LC;
        result.badTimeMan += this.estimationOfResults.parkinglot.TM['41-60'].BTM;
        result.perfectionism += this.estimationOfResults.parkinglot.TM['41-60'].P;
        result.negThink += this.estimationOfResults.parkinglot.TM['41-60'].NT;
        result.lackRicuz += this.estimationOfResults.parkinglot.TM['41-60'].LR;
        result.impulsivity += this.estimationOfResults.parkinglot.TM['41-60'].I;
        result.slowStarter += this.estimationOfResults.parkinglot.TM['41-60'].SS;
        result.panic += this.estimationOfResults.parkinglot.TM['41-60'].Panic;
        result.frustration += this.estimationOfResults.parkinglot.TM['41-60'].F;
        moves = (`noOfMoves ${noOfMoves}  lowConfidence =${this.estimationOfResults.parkinglot.TM['41-60'].LC} badTimeMan = ${this.estimationOfResults.parkinglot.TM['41-60'].BTM} perfectionism = ${this.estimationOfResults.parkinglot.TM['41-60'].P} negThink = ${this.estimationOfResults.parkinglot.TM['41-60'].NT} lackRicuz = ${this.estimationOfResults.parkinglot.TM['41-60'].LR} impulsivity = ${this.estimationOfResults.parkinglot.TM['41-60'].I} slowStarter = ${this.estimationOfResults.parkinglot.TM['41-60'].SS} panic = ${this.estimationOfResults.parkinglot.TM['41-60'].Panic} frustration = ${this.estimationOfResults.parkinglot.TM['41-60'].F} |`);
      } else if (noOfMoves >= 61) {
        result.lowConfidence += this.estimationOfResults.parkinglot.TM['61+'].LC;
        result.badTimeMan += this.estimationOfResults.parkinglot.TM['61+'].BTM;
        result.perfectionism += this.estimationOfResults.parkinglot.TM['61+'].P;
        result.negThink += this.estimationOfResults.parkinglot.TM['61+'].NT;
        result.lackRicuz += this.estimationOfResults.parkinglot.TM['61+'].LR;
        result.impulsivity += this.estimationOfResults.parkinglot.TM['61+'].I;
        result.slowStarter += this.estimationOfResults.parkinglot.TM['61+'].SS;
        result.panic += this.estimationOfResults.parkinglot.TM['61+'].Panic;
        result.frustration += this.estimationOfResults.parkinglot.TM['61+'].F;
        moves = (`noOfMoves ${noOfMoves}  lowConfidence =${this.estimationOfResults.parkinglot.TM['61+'].LC} badTimeMan = ${this.estimationOfResults.parkinglot.TM['61+'].BTM} perfectionism = ${this.estimationOfResults.parkinglot.TM['61+'].P} negThink = ${this.estimationOfResults.parkinglot.TM['61+'].NT} lackRicuz = ${this.estimationOfResults.parkinglot.TM['61+'].LR} impulsivity = ${this.estimationOfResults.parkinglot.TM['61+'].I} slowStarter = ${this.estimationOfResults.parkinglot.TM['61+'].SS} panic = ${this.estimationOfResults.parkinglot.TM['61+'].Panic} frustration = ${this.estimationOfResults.parkinglot.TM['61+'].F} |`);
      }
    }
    this.gameScore.parkinglot = [result.lowConfidence, result.badTimeMan, result.perfectionism, result.negThink, result.lackRicuz, result.impulsivity, result.slowStarter, result.panic, result.frustration];
    const SumFromGame = (`parkinglot Summ =  lowConfidence =${this.gameScore.parkinglot[0]} badTimeMan =${this.gameScore.parkinglot[1]} perfectionism = ${this.gameScore.parkinglot[2]} negThink = ${this.gameScore.parkinglot[3]} lackRicuz = ${this.gameScore.parkinglot[4]} impulsivity = ${this.gameScore.parkinglot[5]} slowStarter = ${this.gameScore.parkinglot[6]}  panic =  ${this.gameScore.parkinglot[7]} frustration = ${this.gameScore.parkinglot[8]} |`);
    // const SumFromGame = (`parkingLot Summ =  Bad Time Man =${this.gameScore.parkinglot[0]} Frustration =${this.gameScore.parkinglot[1]} Impulsivity = ${this.gameScore.parkinglot[2]} Low Confidence = ${this.gameScore.parkinglot[3]} Lack Ricuz = ${this.gameScore.parkinglot[4]} Neg Think = ${this.gameScore.parkinglot[5]} Perfectionism = ${this.gameScore.parkinglot[6]}  Panic =  ${this.gameScore.parkinglot[7]} Slow Starter = ${this.gameScore.parkinglot[8]} |`);
    console.log(admin);
    if (admin){ alert(`${fromGame} ${space} ${firstMove} ${space} ${instruct} ${space} ${moves} ${space} ${durationgame} ${space} ${SumFromGame}`); }
  }

  endLastGame(duration, noOfMoves, instructionsClickCount, win, firstMoveTime, admin) {
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
    let SumFromGame = '';
    const space = '                                                                                                     ';
    if (win) {
      this.gameScore.gamesSuccessfullyCompleted += 1;
    }
    if (this.orderOfGames.UPDI.parkinglotLast.IB) {
    // Instruction Button
      if (instructionsClickCount === 0) {
        result.lowConfidence += this.estimationOfResults.parkingLotLast.IB['0'].LC;
        result.badTimeMan += this.estimationOfResults.parkingLotLast.IB['0'].BTM;
        result.perfectionism += this.estimationOfResults.parkingLotLast.IB['0'].P;
        result.negThink += this.estimationOfResults.parkingLotLast.IB['0'].NT;
        result.lackRicuz += this.estimationOfResults.parkingLotLast.IB['0'].LR;
        result.impulsivity += this.estimationOfResults.parkingLotLast.IB['0'].I;
        result.slowStarter += this.estimationOfResults.parkingLotLast.IB['0'].SS;
        result.panic += this.estimationOfResults.parkingLotLast.IB['0'].Panic;
        result.frustration += this.estimationOfResults.parkingLotLast.IB['0'].F;
        instruct = (`instructions ${instructionsClickCount} lowConfidence =${this.estimationOfResults.parkingLotLast.IB['0'].LC} badTimeMan = ${this.estimationOfResults.parkingLotLast.IB['0'].BTM} perfectionism = ${this.estimationOfResults.parkingLotLast.IB['0'].P} negThink = ${this.estimationOfResults.parkingLotLast.IB['0'].NT} lackRicuz = ${this.estimationOfResults.parkingLotLast.IB['0'].LR} impulsivity = ${this.estimationOfResults.parkingLotLast.IB['0'].I} slowStarter = ${this.estimationOfResults.parkingLotLast.IB['0'].SS} panic = ${this.estimationOfResults.parkingLotLast.IB['0'].Panic} frustration = ${this.estimationOfResults.parkingLotLast.IB['0'].F}`);
      } else if (instructionsClickCount === 1) {
        result.lowConfidence += this.estimationOfResults.parkingLotLast.IB['1'].LC;
        result.badTimeMan += this.estimationOfResults.parkingLotLast.IB['1'].BTM;
        result.perfectionism += this.estimationOfResults.parkingLotLast.IB['1'].P;
        result.negThink += this.estimationOfResults.parkingLotLast.IB['1'].NT;
        result.lackRicuz += this.estimationOfResults.parkingLotLast.IB['1'].LR;
        result.impulsivity += this.estimationOfResults.parkingLotLast.IB['1'].I;
        result.slowStarter += this.estimationOfResults.parkingLotLast.IB['1'].SS;
        result.panic += this.estimationOfResults.parkingLotLast.IB['1'].Panic;
        result.frustration += this.estimationOfResults.parkingLotLast.IB['1'].F;
        instruct = (`instructions ${instructionsClickCount} lowConfidence =${this.estimationOfResults.parkingLotLast.IB['1'].LC} badTimeMan = ${this.estimationOfResults.parkingLotLast.IB['1'].BTM} perfectionism = ${this.estimationOfResults.parkingLotLast.IB['1'].P} negThink = ${this.estimationOfResults.parkingLotLast.IB['1'].NT} lackRicuz = ${this.estimationOfResults.parkingLotLast.IB['1'].LR} impulsivity = ${this.estimationOfResults.parkingLotLast.IB['1'].I} slowStarter = ${this.estimationOfResults.parkingLotLast.IB['1'].SS} panic = ${this.estimationOfResults.parkingLotLast.IB['1'].Panic} frustration = ${this.estimationOfResults.parkingLotLast.IB['1'].F}`);
      } else if (instructionsClickCount >= 2) {
        result.lowConfidence += this.estimationOfResults.parkingLotLast.IB['2+'].LC;
        result.badTimeMan += this.estimationOfResults.parkingLotLast.IB['2+'].BTM;
        result.perfectionism += this.estimationOfResults.parkingLotLast.IB['2+'].P;
        result.negThink += this.estimationOfResults.parkingLotLast.IB['2+'].NT;
        result.lackRicuz += this.estimationOfResults.parkingLotLast.IB['2+'].LR;
        result.impulsivity += this.estimationOfResults.parkingLotLast.IB['2+'].I;
        result.slowStarter += this.estimationOfResults.parkingLotLast.IB['2+'].SS;
        result.panic += this.estimationOfResults.parkingLotLast.IB['2+'].Panic;
        result.frustration += this.estimationOfResults.parkingLotLast.IB['2+'].F;
        instruct = (`instructions ${instructionsClickCount} lowConfidence =${this.estimationOfResults.parkingLotLast.IB['2+'].LC} badTimeMan = ${this.estimationOfResults.parkingLotLast.IB['2+'].BTM} perfectionism = ${this.estimationOfResults.parkingLotLast.IB['2+'].P} negThink = ${this.estimationOfResults.parkingLotLast.IB['2+'].NT} lackRicuz = ${this.estimationOfResults.parkingLotLast.IB['2+'].LR} impulsivity = ${this.estimationOfResults.parkingLotLast.IB['2+'].I} slowStarter = ${this.estimationOfResults.parkingLotLast.IB['2+'].SS} panic = ${this.estimationOfResults.parkingLotLast.IB['2+'].Panic} frustration = ${this.estimationOfResults.parkingLotLast.IB['2+'].F}`);
      }
    }
    if (this.orderOfGames.UPDI.parkinglotLast.NoM) {
    // Total # of moves
      if (noOfMoves < 15) {
        result.lowConfidence += this.estimationOfResults.parkingLotLast.TM['0-15'].LC;
        result.badTimeMan += this.estimationOfResults.parkingLotLast.TM['0-15'].BTM;
        result.perfectionism += this.estimationOfResults.parkingLotLast.TM['0-15'].P;
        result.negThink += this.estimationOfResults.parkingLotLast.TM['0-15'].NT;
        result.lackRicuz += this.estimationOfResults.parkingLotLast.TM['0-15'].LR;
        result.impulsivity += this.estimationOfResults.parkingLotLast.TM['0-15'].I;
        result.slowStarter += this.estimationOfResults.parkingLotLast.TM['0-15'].SS;
        result.panic += this.estimationOfResults.parkingLotLast.TM['0-15'].Panic;
        result.frustration += this.estimationOfResults.parkingLotLast.TM['0-15'].F;
        moves = (`noOfMoves ${noOfMoves}  lowConfidence = ${this.estimationOfResults.parkingLotLast.TM['0-15'].LC} badTimeMan = ${this.estimationOfResults.parkingLotLast.TM['0-15'].BTM} perfectionism = ${this.estimationOfResults.parkingLotLast.TM['0-15'].P} negThink = ${this.estimationOfResults.parkingLotLast.TM['0-15'].NT} lackRicuz = ${this.estimationOfResults.parkingLotLast.TM['0-15'].LR} impulsivity = ${this.estimationOfResults.parkingLotLast.TM['0-15'].I} slowStarter = ${this.estimationOfResults.parkingLotLast.TM['0-15'].SS} panic = ${this.estimationOfResults.parkingLotLast.TM['0-15'].Panic} frustration = ${this.estimationOfResults.parkingLotLast.TM['0-15'].F}`);
      } else if (noOfMoves >= 15 && noOfMoves < 25) {
        result.lowConfidence += this.estimationOfResults.parkingLotLast.TM['15-25'].LC;
        result.badTimeMan += this.estimationOfResults.parkingLotLast.TM['15-25'].BTM;
        result.perfectionism += this.estimationOfResults.parkingLotLast.TM['15-25'].P;
        result.negThink += this.estimationOfResults.parkingLotLast.TM['15-25'].NT;
        result.lackRicuz += this.estimationOfResults.parkingLotLast.TM['15-25'].LR;
        result.impulsivity += this.estimationOfResults.parkingLotLast.TM['15-25'].I;
        result.slowStarter += this.estimationOfResults.parkingLotLast.TM['15-25'].SS;
        result.panic += this.estimationOfResults.parkingLotLast.TM['15-25'].Panic;
        result.frustration += this.estimationOfResults.parkingLotLast.TM['15-25'].F;
        moves = (`noOfMoves ${noOfMoves}  lowConfidence = ${this.estimationOfResults.parkingLotLast.TM['15-25'].LC} badTimeMan = ${this.estimationOfResults.parkingLotLast.TM['15-25'].BTM} perfectionism = ${this.estimationOfResults.parkingLotLast.TM['15-25'].P} negThink = ${this.estimationOfResults.parkingLotLast.TM['15-25'].NT} lackRicuz = ${this.estimationOfResults.parkingLotLast.TM['15-25'].LR} impulsivity = ${this.estimationOfResults.parkingLotLast.TM['15-25'].I} slowStarter = ${this.estimationOfResults.parkingLotLast.TM['15-25'].SS} panic = ${this.estimationOfResults.parkingLotLast.TM['15-25'].Panic} frustration = ${this.estimationOfResults.parkingLotLast.TM['15-25'].F}`);
      } else if (noOfMoves >= 25) {
        result.lowConfidence += this.estimationOfResults.parkingLotLast.TM['25+'].LC;
        result.badTimeMan += this.estimationOfResults.parkingLotLast.TM['25+'].BTM;
        result.perfectionism += this.estimationOfResults.parkingLotLast.TM['25+'].P;
        result.negThink += this.estimationOfResults.parkingLotLast.TM['25+'].NT;
        result.lackRicuz += this.estimationOfResults.parkingLotLast.TM['25+'].LR;
        result.impulsivity += this.estimationOfResults.parkingLotLast.TM['25+'].I;
        result.slowStarter += this.estimationOfResults.parkingLotLast.TM['25+'].SS;
        result.panic += this.estimationOfResults.parkingLotLast.TM['25+'].Panic;
        result.frustration += this.estimationOfResults.parkingLotLast.TM['25+'].F;
        moves = (`noOfMoves ${noOfMoves}  lowConfidence = ${this.estimationOfResults.parkingLotLast.TM['25+'].LC} badTimeMan = ${this.estimationOfResults.parkingLotLast.TM['25+'].BTM} perfectionism = ${this.estimationOfResults.parkingLotLast.TM['25+'].P} negThink = ${this.estimationOfResults.parkingLotLast.TM['25+'].NT} lackRicuz = ${this.estimationOfResults.parkingLotLast.TM['25+'].LR} impulsivity = ${this.estimationOfResults.parkingLotLast.TM['25+'].I} slowStarter = ${this.estimationOfResults.parkingLotLast.TM['25+'].SS} panic = ${this.estimationOfResults.parkingLotLast.TM['25+'].Panic} frustration = ${this.estimationOfResults.parkingLotLast.TM['25+'].F}`);
      }
    }
    this.gameScore.parkinglotLast = [result.lowConfidence, result.badTimeMan, result.perfectionism, result.negThink, result.lackRicuz, result.impulsivity, result.slowStarter, result.panic, result.frustration];
    
    SumFromGame = (`parkinglot Summ =  lowConfidence =${this.gameScore.parkinglotLast[0]} badTimeMan =${this.gameScore.parkinglotLast[1]} perfectionism = ${this.gameScore.parkinglotLast[2]} negThink = ${this.gameScore.parkinglotLast[3]} lackRicuz = ${this.gameScore.parkinglotLast[4]} impulsivity = ${this.gameScore.parkinglotLast[5]} slowStarter = ${this.gameScore.parkinglotLast[6]}  panic =  ${this.gameScore.parkinglotLast[7]} frustration = ${this.gameScore.parkinglotLast[8]} |`);
    // SumFromGame = (`parkingLotLast Summ =  Bad Time Man =${this.gameScore.parkinglotLast[0]} Frustration =${this.gameScore.parkinglotLast[1]} Impulsivity = ${this.gameScore.parkinglotLast[2]} Low Confidence = ${this.gameScore.parkinglotLast[3]} Lack Ricuz = ${this.gameScore.parkinglotLast[4]} Neg Think = ${this.gameScore.parkinglotLast[5]} Perfectionism = ${this.gameScore.parkinglotLast[6]}  Panic =  ${this.gameScore.parkinglotLast[7]} Slow Starter = ${this.gameScore.parkinglotLast[8]} |`);

    if (admin){ alert(`${fromGame} ${space} ${instruct} ${space} ${moves} ${space} ${SumFromGame}`); }
  }
}

ParkingLotService.$inject = ['gameScoreValue', 'estimationOfResults', 'orderOfGames'];
module.exports = ParkingLotService;
