class HelperService {
  constructor(orderOfGames, estimationOfResults) {
    this.orderOfGames = orderOfGames;
    this.estimationOfResults = estimationOfResults;
  }

  gameSequence() {
    this.orderOfGames.gameSequence = ['parkinglot', 'tower', 'mousetrap', 'mazerace', 'parkinglot'];

    this.orderOfGames.level = [2, 4, 0, 2, 3];

    this.orderOfGames.UPDI = {
      parkinglot: {
        NIA: true,
        SGD: true,
        SG: true,
        IB: true,
        NoM: true,
      },
      tower: {
        SGD: true,
        SG: true,
        IB: true,
        NoM: true,
      },
      mousetrap: {
        SGD: true,
        SG: true,
        IB: true,
      },
      mazerace: {
        SGD: true,
        SG: true,
        CGDWTiU: true,
        IB: true,
      },
      parkinglotLast: {
        IB: true,
        NoM: true,
        TTtLGFS: true,
        TTtFNS: true,
      },
    };
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
        '0-40': {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '41-50': {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '51-60': {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
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
        0: {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
        1: {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 5, SS: 0, Panic: 0, F: 0,
        },
        '2+': {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 10, SS: 0, Panic: 0, F: 0,
        },
      },

      // Total # of moves
      TM: {
        '0-40': {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '41-60': {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 5, I: 0, SS: 0, Panic: 0, F: 5,
        },
        '61+': {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 10, I: 0, SS: 0, Panic: 0, F: 10,
        },
      },

      // No Initial Activity
      NIA: {
        '0-14': {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
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
        '0-40': {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
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
        0: {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
        1: {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 5, SS: 0, Panic: 0, F: 0,
        },
        '2+': {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 10, SS: 0, Panic: 0, F: 0,
        },
      },
      // Total # of moves
      TM: {
        '1-45': {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '46-80': {
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
        '0-40': {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
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
        0: {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
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
        '0-40': {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '41-50': {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
        '51-60': {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
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
        0: {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
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
        0: {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
        1: {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 5, SS: 0, Panic: 0, F: 0,
        },
        '2+': {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 10, SS: 0, Panic: 0, F: 0,
        },
      },

      // Total # of moves
      TM: {
        '0-15': {
          LC: 0, BTM: 0, P: 0, NT: 0, LR: 0, I: 0, SS: 0, Panic: 0, F: 0,
        },
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
        NIA: { Feedback: false, IUA: true },
        SGD: { Feedback: false, IUA: true },
        SG: { Feedback: false, IUA: true },
        CGDWTiU: { Feedback: false, IUA: true },
        IB: { Feedback: false, IUA: true },
        NoM: { Feedback: false, IUA: true },
        TTtLGFS: { Feedback: false, IUA: true },
        TTtFNS: { Feedback: false, IUA: true },
        SA: { Feedback: true, IUA: false },
        GSC: { Feedback: true, IUA: false },
        MM: { Feedback: true, IUA: false },
        CGSWTiU: { Feedback: false, IUA: true },
      },
      UBA: {
        'Low Confidence': true,
        'Bad Time Management': true,
        Perfectionism: true,
        'Negative Thinking': true,
        'Lack of Concentration': true,
        Impulsivity: true,
        'Slow starter': true,
        Panic: true,
        Frustration: true,
      },
    };
  }

  feedbackSentences() {
    console.log('FEEDBACK');
    this.estimationOfResults.Feedback = {
      F: {
        '5-9': 'You may get frustrated and lose your cool when you find a question difficult. Stop, take a deep breath and do your routine. Focus on the physical tools in the app.',
        '10+': 'You have a tendency to get frustrated and angry and when you find a question difficult. You must stop, do your routine and gain your composure. Focus on the physical tools in the app.',
      },
      SA: {
        0: 'You have a good sense of who you are and of your abilities to perform.',
        '2-4': 'You may have some self-limiting beliefs causing you to doubt your abilities. It is important t for you to study hard, be prepared and then believe and trust yourself. Focus on your goals and become aware of the “little voice” in your head that may be overly negative.',
      },
      GSC: {
        3: 'You manage stress well.  In order to reach your peak performance, practice your routine in order to stay focused and positive.',
        '4-5': 'Your ability to manage stress is commendable. You are confident, focused and work well within a time frame. You stay positive, are quick to see possibilities and solve problems accurately. Practice your routine in order to stay focused and positive.',
      },
      SS: {
        '10-19': 'You have a tendency to start slowly. Before you begin the test, use your routine to get focused and into your zone so you start with confidence.',
        '20+': ' You may get overwhelmed when beginning the test.  Try to get focused and into your zone before the test starts by using your routine.',
      },
      I: {
        '10-19': 'Sometimes you begin a task, get confused and then read the instructions. Be sure to read and understand the instructions first.',
        '20+': 'You have a tendency to jump right in and tackle the task at hand. It is crucial for you to take the time and READ THE INSTRUCTIONS  before you start to answer any question',
      },
      Panic: {
        '5-10': 'When faced with a difficult question, you may get stressed out and not take the time to focus and attempt to solve it.',
        '11+': 'You have a tendency to stress out when faced with a question that  is unfamiliar to you. ',
      },
      NT: {
        '9-19': 'When you are stressed, your negative inner voice may tell you that you “can’t” whereas you probably “can.” ',
        '20+': 'Your inner voice may be too self-critical and pessimistic which will prevent you from trusting your ability to perform. You may skip questions even though you know the answers. ',
      },
      LC: {
        '5-10': ' If you see that you are getting overwhelmed and negative thoughts are appearing as the test gets closer, use the Positive Thinking tool in the app.',
        '11-19': 'Be patient and trust that you have the ability. Spend time on the positive thinking tool in the app.',
        '20+': 'You may start questioning yourself and losing confidence if you don’t succeed. It’s important for you to stop, do your routine and then start the next question anew. Refocusing your attention is crucial in order to stay positive. Spend some extra time on the Positive Thinking tool in the app.',
      },
      P: {
        '11-19': 'It’s important for you to be careful and accurate and it is difficult for you to let go of a question you feel you can solve',
        '20+': ' You are committed to carefully and accurately find solutions to difficult questions however, you may be spending too much time on a specific question.',
      },
      BTM: {
        '5-10': 'You manage the time well. The more practice tests you take, keeping your eye on the clock, the more you will improve your performance.',
        '11-19': 'You must focus on the big picture and always be aware of the time. Spending too much time on a hard question or skipping it too quickly is not effective. During the practice tests keep in mind the time factor.',
        '20+': 'You need to make a plan ahead of time on how long you can spend on each question (or section) and then adjust according to how you’re doing. You always need to be aware of the time and to pace yourself. ',
      },

      C: {
        '5-10': 'Your focus is good. During the test, use your power word if you lose concentration and need to refocus. Check out the stress and recovery section.',
        '10-19': 'Concentration during the test may be difficult for you when you’re feeling the pressure. It’s important to use your power word to get re-focused and to practice your routine. Check out the stress and recovery section.',
        '20+': 'It may be hard for you to be totally focused during the test. Use the concentration tools to bring your mind back. Check out the stress and recovery section.',
      },
      MM: {
        true: 'Your brain processes information better in a quiet environment. Find a quiet place to study with as little background noise as possible.',
      },
    };
  }
  feedbackCounter() {
    console.log('FEEDBACK Counter');
    this.estimationOfResults.feedbackCounter = {
      F: {
        '5-9': [5, 9],
        '10+': [10, 1000],
      },
      SA: {
        0: [0, 0],
        '2-4': [2, 4],
      },
      GSC: {
        3: [3, 3],
        '4-5': [4, 5],
      },
      SS: {
        '10-19': [10, 19],
        '20+': [20, 1000],
      },
      I: {
        '10-19': [10, 19],
        '20+': [20, 1000],
      },
      Panic: {
        '5-10': [5, 10],
        '11+': [11, 1000],
      },
      NT: {
        '9-19': [9, 19],
        '20+': [20, 1000],
      },
      LC: {
        '5-10': [5, 10],
        '11-19': [11, 19],
        '20+': [20, 1000],
      },
      P: {
        '11-19': [11, 19],
        '20+': [20, 1000],
      },
      BTM: {
        '5-10': [5, 10],
        '11-19': [11, 19],
        '20+': [20, 1000],
      },

      C: {
        '5-10': [5, 10],
        '10-19': [10, 19],
        '20+': [20, 1000],
      },
      MM: {
        true: [1, 1],
      },
    };
  }

  SuggestedTools() {
    this.estimationOfResults.SuggestPoints = {
      Panic: 10,
      'Negative Thinking': 10,
      'Low Confidence': 10,
      Concentration: 10,
      Frustration: 10,
    };
  }

  FeedbackChange() {
    this.estimationOfResults.FeedbackPosition = {
      0: 'selfAssessment',
      1: 'gamesSuccessfullyCompleted',
      2: 'slowStarter',
      3: 'impulsivity',
      4: 'panic',
      5: 'negativeThinking',
      6: 'lowConfidence ',
      7: 'perfectionism',
      8: 'badTimeManagement',
      9: 'frustration',
      10: 'concentration',
      11: 'muteMusic',
    };
  }
}


HelperService.$inject = ['orderOfGames', 'estimationOfResults'];
module.exports = HelperService;
