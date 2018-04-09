class TowerService {
    constructor(gameScoreValue){
        this.gameScore = gameScoreValue;
    }

    start() {

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
            frustration: 0
        };

        if (win == true){
            this.gameScore.gamesSuccessfullyCompleted += 1;
        }
        
    // Successful Game Duration

        if (duration > 80000 && duration <= 90000){ 
            result.badTimeMan+=6; 
            result.perfectionism +=6; 
        }
        else if (duration > 90000 && duration <= 100000){ 
            result.badTimeMan+=8; 
            result.perfectionism +=8; 
        }
        else if (duration > 100000 && duration <= 115000){ 
            result.badTimeMan+=10; 
            result.perfectionism +=10; 
        }
        else if (duration > 116000){ 
            result.badTimeMan+=10; 
            result.perfectionism +=10; }


    // Instruction Button

        if(instructionsClickCount === 1) {
            result.impulsivity +=5;
        } else if(instructionsClickCount >= 2) {
            result.impulsivity +=10;
        }

    // Total # of moves

        if (noOfMoves >= 46 && noOfMoves < 81){ 
            result.impulsivity +=5; 
            result.frustration+=5; 
        }
        else if (noOfMoves >= 81){ 
            result.impulsivity +=10; 
            result.frustration+=10; 
        }

      this.gameScore.tower = Object.assign({}, result);
    }

    replay() {
        
    }
}

TowerService.$inject = ['gameScoreValue'];
module.exports = TowerService;