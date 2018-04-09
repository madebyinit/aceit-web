class MouseGameService {
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

    if (duration > 90000 && duration <= 100000){ 
        result.badTimeMan+=2; 
    }
    else if (duration > 100000 && duration <= 115000){ 
        result.badTimeMan+=4; 
        result.perfectionism +=4; 
    }
    else if (duration > 116000){ 
        result.badTimeMan+=10; 
        result.perfectionism +=6; 
    }

    // Instruction Button

    if(instructionsClickCount === 1) {
        result.impulsivity +=5;
    } else if(instructionsClickCount >= 2) {
        result.impulsivity +=10;
    }

    this.gameScore.mousetrap = Object.assign({}, result);

    }

    replay() {
        
    }
}

MouseGameService.$inject = ['gameScoreValue'];
module.exports = MouseGameService;