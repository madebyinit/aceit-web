class HelperService {
  constructor(orderOfGames, estimationOfResults) {
    this.orderOfGames = orderOfGames;
    this.estimationOfResults = estimationOfResults;
  }

  gameSequence() {
    this.orderOfGames.gameSequence = ['parkinglot', 'tower', 'mousetrap', 'mazerace', 'parkinglot'];

    this.orderOfGames.level = [2, 4, 0, 2, 3];
  }

  Results() {
    this.estimationOfResults.parkinglot = {

      // Low Confidence = LC
      // Bad Time Man = BTM
      // Perfectionism = P
      // Neg Think = NT
      // Lack Ricuz = LR
      // Impulsivity = I
      // Slow Starter = SS
      // Panic = panic
      // Frustration = F

      // Successful Game Duration
      SGD: {
        '61-70': {
          LC: 1, BTM: 2, P: 0, NT: 1, LR: 0, I: 0, SS: 1, Panic: 0, F: 0,
        },
        '71-80': {
          LC: 1, BTM: 5, P: 2, NT: 2, LR: 2, I: 0, SS: 5, Panic: 5, F: 0,
        },
        '81-90': {
          LC: 1, BTM: 7, P: 5, NT: 4, LR: 5, I: 0, SS: 7, Panic: 5, F: 0,
        },
        '91-100': {
          LC: 2, BTM: 4, P: 4, NT: 5, LR: 7, I: 0, SS: 9, Panic: 0, F: 0,
        },
        '101-115': {
          LC: 5, BTM: 6, P: 6, NT: 6, LR: 6, I: 6, SS: 6, Panic: 6, F: 0,
        },
        '116+': {
          LC: 8, BTM: 10, P: 10, NT: 8, LR: 10, I: 0, SS: 10, Panic: 0, F: 0,
        },
      },

      Skip: {
        '0-30': {
          LC: 10, BTM: 10, P: 0, NT: 10, LR: 10, I: 10, SS: 10, Panic: 10, F: 0,
        },
        '31-40': {
          LC: 10, BTM: 8, P: 0, NT: 10, LR: 0, I: 9, SS: 8, Panic: 9, F: 0,
        },
        '41-50': {
          LC: 9, BTM: 6, P: 0, NT: 9, LR: 0, I: 8, SS: 4, Panic: 8, F: 0,
        },
        '51-60': {
          LC: 7, BTM: 0, P: 0, NT: 7, LR: 0, I: 0, SS: 3, Panic: 0, F: 0,
        },
        '61-70': {
          LC: 5, BTM: 2, P: 0, NT: 5, LR: 0, I: 0, SS: 4, Panic: 0, F: 0,
        },
        '71-80': {
          LC: 6, BTM: 6, P: 2, NT: 6, LR: 0, I: 0, SS: 7, Panic: 0, F: 0,
        },
        '81-90': {
          LC: 7, BTM: 9, P: 5, NT: 7, LR: 0, I: 0, SS: 9, Panic: 0, F: 0,
        },
        '91-100': {
          LC: 8, BTM: 10, P: 10, NT: 8, LR: 0, I: 0, SS: 1, Panic: 0, F: 0,
        },
        '101-115': {
          LC: 10, BTM: 10, P: 10, NT: 10, LR: 0, I: 0, SS: 1, Panic: 0, F: 0,
        },
        '116+': {
          LC: 10, BTM: 10, P: 10, NT: 10, LR: 10, I: 0, SS: 10, Panic: 0, F: 0,
        },
      },

      // Instruction Button
      IB: {
        1: {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 5, SS: 0, Panic: 0, F: 0,
        },
        '2+': {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 10, SS: 0, Panic: 0, F: 0,
        },
      },

      // Total # of moves
      TM: {
        '41-60': {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 5, I: 0, SS: 0, Panic: 0, F: 5,
        },
        '61+': {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 10, I: 0, SS: 0, Panic: 0, F: 10,
        },
      },

      // No Initial Activity
      NIA: {
        '15-24': {
          LC: 3, BTM: 0, P: 0, NT: 1, LR: 1, I: 0, SS: 5, Panic: 0, F: 0,
        },
        '25+': {
          LC: 5, BTM: 0, P: 0, NT: 2, LR: 1, I: 0, SS: 10, Panic: 0, F: 0,
        },
      },
    };
    // _______
    this.estimationOfResults.tower = {
      // Successful Game Duration
      SGD: {
        '81-90': {
          LC: 0, BTM: 6, P: 6, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '91-100': {
          LC: 0, BTM: 8, P: 8, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '101-115': {
          LC: 0, BTM: 10, P: 10, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '116+': {
          LC: 0, BTM: 10, P: 10, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
      },

      Skip: {
        '0-30': {
          LC: 5, BTM: 0, P: 0, NT: 0, LR: 0, I: 6, SS: 0, Panic: 0, F: 0,
        },
        '31-40': {
          LC: 4, BTM: 0, P: 0, NT: 0, LR: 0, I: 2, SS: 0, Panic: 0, F: 0,
        },
        '41-50': {
          LC: 3, BTM: 0, P: 0, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '51-60': {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '61-70': {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '71-80': {
          LC: 0, BTM: 2, P: 2, NT: 6, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '81-90': {
          LC: 0, BTM: 4, P: 4, NT: 7, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '91-100': {
          LC: 0, BTM: 8, P: 8, NT: 8, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '101-115': {
          LC: 0, BTM: 10, P: 10, NT: 10, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '116+': {
          LC: 0, BTM: 10, P: 10, NT: 10, LR: 10, I: 0, SS: 0, Panic: 0, F: 0,
        },
      },
      // Instruction Button
      IB: {
        1: {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 5, SS: 0, Panic: 0, F: 0,
        },
        '2+': {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 10, SS: 0, Panic: 0, F: 0,
        },
      },
      // Total # of moves
      TM: {
        '41-80': {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 5, I: 0, SS: 0, Panic: 0, F: 5,
        },
        '81+': {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 10, I: 0, SS: 0, Panic: 0, F: 10,
        },
      },
    };
    // _______
    this.estimationOfResults.mousetrap = {
      // Successful Game Duration
      SGD: {
        '91-100': {
          LC: 0, BTM: 2, P: 0, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '101-115': {
          LC: 0, BTM: 4, P: 4, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '116+': {
          LC: 0, BTM: 10, P: 6, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
      },

      Skip: {
        '0-30': {
          LC: 10, BTM: 10, P: 0, NT: 10, LR: 0, I: 10, SS: 0, Panic: 0, F: 0,
        },
        '31-40': {
          LC: 8, BTM: 6, P: 0, NT: 8, LR: 0, I: 8, SS: 0, Panic: 0, F: 0,
        },
        '41-50': {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '51-60': {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '61-70': {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '71-80': {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '81-90': {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '91-100': {
          LC: 0, BTM: 3, P: 1, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '101-115': {
          LC: 0, BTM: 6, P: 3, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '116+': {
          LC: 0, BTM: 10, P: 10, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
      },
      // Instruction Button
      IB: {
        1: {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 5, SS: 0, Panic: 0, F: 0,
        },
        '2+': {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 10, SS: 0, Panic: 0, F: 0,
        },
      },

    };
    // _______
    this.estimationOfResults.mazerace = {
      // Successful Game Duration
      SGD: {
        '61-70': {
          LC: 1, BTM: 2, P: 0, NT: 1, LR: 2, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '71-80': {
          LC: 3, BTM: 5, P: 2, NT: 3, LR: 3, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '81-90': {
          LC: 5, BTM: 7, P: 5, NT: 5, LR: 5, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '91-100': {
          LC: 7, BTM: 9, P: 9, NT: 7, LR: 7, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '101-115': {
          LC: 10, BTM: 10, P: 10, NT: 10, LR: 10, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '116+': {
          LC: 10, BTM: 10, P: 10, NT: 10, LR: 10, I: 0, SS: 0, Panic: 0, F: 0,
        },
      },

      Skip: {
        '0-30': {
          LC: 10, BTM: 10, P: 0, NT: 10, LR: 10, I: 10, SS: 0, Panic: 10, F: 0,
        },
        '31-40': {
          LC: 9, BTM: 9, P: 0, NT: 9, LR: 9, I: 9, SS: 0, Panic: 9, F: 0,
        },
        '41-50': {
          LC: 8, BTM: 7, P: 0, NT: 8, LR: 8, I: 0, SS: 0, Panic: 8, F: 0,
        },
        '51-60': {
          LC: 7, BTM: 0, P: 0, NT: 7, LR: 7, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '61-70': {
          LC: 6, BTM: 0, P: 0, NT: 6, LR: 6, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '71-80': {
          LC: 5, BTM: 3, P: 0, NT: 5, LR: 5, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '81-90': {
          LC: 7, BTM: 7, P: 3, NT: 4, LR: 4, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '91-100': {
          LC: 8, BTM: 10, P: 8, NT: 8, LR: 8, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '101-115': {
          LC: 10, BTM: 10, P: 9, NT: 9, LR: 10, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '116+': {
          LC: 10, BTM: 10, P: 10, NT: 10, LR: 10, I: 0, SS: 0, Panic: 0, F: 0,
        },
      },
      // Current Game Duration When Time is Up
      CGDETiU: {
        '0-30': {
          LC: 0, BTM: 10, P: 0, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '31-40': {
          LC: 0, BTM: 9, P: 0, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '41-50': {
          LC: 0, BTM: 8, P: 0, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '51-60': {
          LC: 0, BTM: 7, P: 0, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '61-70': {
          LC: 4, BTM: 7, P: 0, NT: 4, LR: 4, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '71-80': {
          LC: 7, BTM: 7, P: 0, NT: 7, LR: 7, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '81-90': {
          LC: 9, BTM: 9, P: 0, NT: 9, LR: 9, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '91-100': {
          LC: 10, BTM: 10, P: 5, NT: 10, LR: 10, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '101-115': {
          LC: 10, BTM: 10, P: 10, NT: 10, LR: 10, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '116+': {
          LC: 10, BTM: 10, P: 10, NT: 10, LR: 10, I: 0, SS: 0, Panic: 0, F: 0,
        },
      },
      // Instruction Button
      IB: {
        1: {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 5, SS: 0, Panic: 0, F: 0,
        },
        '2+': {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 10, SS: 0, Panic: 0, F: 0,
        },
      },

    };
    // ________
    this.estimationOfResults.parkingLotLast = {
      // Instruction Button
      IB: {
        1: {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 5, SS: 0, Panic: 0, F: 0,
        },
        '2+': {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 10, SS: 0, Panic: 0, F: 0,
        },
      },

      // Total # of moves
      TM: {
        '15-25': {
          LC: 3, BTM: 0, P: 0, NT: 1, LR: 2, I: 0, SS: 0, Panic: 0, F: 5,
        },
        '25+': {
          LC: 10, BTM: 0, P: 0, NT: 2, LR: 4, I: 0, SS: 0, Panic: 0, F: 10,
        },
      },

    };

    this.estimationOfResults.gameEnd = {

      GSIWTiU: {
        'Game 1': {
          LC: 20, BTM: 20, P: 20, NT: 20, LR: 20, I: 0, SS: 20, Panic: 20, F: 0,
        },
        'Game 2': {
          LC: 10, BTM: 20, P: 20, NT: 10, LR: 10, I: 0, SS: 10, Panic: 10, F: 0,
        },
        'Game 3': {
          LC: 0, BTM: 20, P: 20, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
      },

      TTtFNS: {
        '0-30': {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '31-40': {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 0, SS: 0, Panic: 3, F: 0,
        },
        '41-50': {
          LC: 0, BTM: 0, P: 0, NT: 3, LR: 3, I: 0, SS: 0, Panic: 6, F: 0,
        },
        '51-60': {
          LC: 0, BTM: 0, P: 0, NT: 5, LR: 5, I: 0, SS: 0, Panic: 10, F: 0,
        },
        '61-70': {
          LC: 1, BTM: 0, P: 0, NT: 7, LR: 7, I: 0, SS: 0, Panic: 10, F: 0,
        },
        '71-80': {
          LC: 3, BTM: 0, P: 0, NT: 8, LR: 8, I: 0, SS: 0, Panic: 10, F: 0,
        },
        '81-90': {
          LC: 5, BTM: 0, P: 0, NT: 9, LR: 9, I: 0, SS: 0, Panic: 10, F: 0,
        },
        '91-100': {
          LC: 7, BTM: 0, P: 0, NT: 10, LR: 10, I: 0, SS: 0, Panic: 10, F: 0,
        },
        '101-115': {
          LC: 10, BTM: 0, P: 0, NT: 10, LR: 10, I: 0, SS: 0, Panic: 10, F: 0,
        },
        '116+': {
          LC: 10, BTM: 0, P: 0, NT: 10, LR: 10, I: 0, SS: 0, Panic: 10, F: 0,
        },
      },

      TTfLG: {
        '0-10': {
          LC: 0, BTM: 20, P: 0, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '11-20': {
          LC: 0, BTM: 15, P: 0, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '21-30': {
          LC: 0, BTM: 10, P: 0, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '31-40': {
          LC: 0, BTM: 5, P: 0, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '41-50': {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '51+': {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
      },
    };

    this.estimationOfResults.GP = {
      GSD: 300,
      TtDSOGP: 120,
      UPDI: {
        1: { UPDI: 'NIA', Feedback: false, IUA: true },
        2: { UPDI: 'NSGDA', Feedback: false, IUA: true },
        3: { UPDI: 'Skip', Feedback: false, IUA: true },
        4: { UPDI: 'CGDWTiU', Feedback: false, IUA: true },
        5: { UPDI: 'IB', Feedback: false, IUA: true },
        6: { UPDI: 'NoM', Feedback: false, IUA: true },
        7: { UPDI: 'TTfLG', Feedback: false, IUA: true },
        8: { UPDI: 'TTtFNS', Feedback: false, IUA: true },
        9: { UPDI: 'SA', Feedback: true, IUA: false },
        10: { UPDI: 'GSC', Feedback: true, IUA: false },
        11: { UPDI: 'MM', Feedback: true, IUA: false },
        12: { UPDI: 'CGSWTiU', Feedback: false, IUA: true },
      },
    };
  }
}


HelperService.$inject = ['orderOfGames', 'estimationOfResults'];
module.exports = HelperService;
