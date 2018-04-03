class ParkingLotService {
    constructor(gameScoreValue){
        'ngInject';
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
    
        // No Initial Activity
        if (firstMoveTime > 1400 && firstMoveTime < 2400) {
            result.lowConfidence +=3; 
            result.negThink += 1; 
            result.lackRicuz += 1; 
            result.slowStarter += 5; 
            result.panic += 3;
        }
        else if (firstMoveTime > 2400) { 
            result.lowConfidence +=5; 
            result.negThink += 2; 
            result.lackRicuz += 2; 
            result.slowStarter += 10; 
            result.panic += 10; 
        }
    
        // Successful Game Duration
        if (duration > 60000 && duration <= 70000){ 
            result.lowConfidence +=1; 
            result.badTimeMan+=2; 
            result.negThink += 1; 
            result.slowStarter += 1;}
        else if (duration > 70000 && duration <= 80000){ 
            result.lowConfidence +=1; 
            result.badTimeMan+=5; 
            result.perfectionism +=2; 
            result.negThink += 2; 
            result.lackRicuz += 2; 
            result.slowStarter += 5; 
            result.panic += 5; 
        }
        else if (duration > 80000 && duration <= 90000){ 
            result.lowConfidence +=1; 
            result.badTimeMan+=7; 
            result.perfectionism +=5; 
            result.negThink += 4; 
            result.lackRicuz += 5; 
            result.slowStarter += 7; 
            result.panic += 5; 
        }
        else if (duration > 90000 && duration <= 100000){ 
            result.lowConfidence +=2; 
            result.badTimeMan+=4; 
            result.perfectionism +=4; 
            result.negThink += 5; 
            result.lackRicuz += 7; 
            result.slowStarter += 9; 
        }
        else if (duration > 100000 && duration <= 115000){ 
            result.lowConfidence +=5; 
            result.badTimeMan+=6; 
            result.perfectionism +=6; 
            result.negThink += 6; 
            result.lackRicuz += 6; 
            result.impulsivity +=6; 
            result.slowStarter += 6; 
            result.panic += 6; 
        }
        else if (duration > 116000){ 
            result.lowConfidence +=8; 
            result.badTimeMan+=10; 
            result.perfectionism +=10; 
            result.negThink += 8; 
            result.lackRicuz += 10; 
            result.slowStarter += 10; 
        }

        // Instruction Button
        if(instructionsClickCount === 1) {
            result.impulsivity +=5;
        } else if(instructionsClickCount >= 2) {
            result.impulsivity +=10;
        }
    
        // Total # of moves
        if (noOfMoves >= 41 && noOfMoves < 61){ 
            result.impulsivity +=5; 
            result.frustration+=5; 
        } else if (noOfMoves >= 61){ 
            result.impulsivity +=10; 
            result.frustration+=10; 
        }
        this.gameScore.parkingLot = {...result};
        console.log(this.gameScore.parkingLot);
    }

    endLastGame(duration, noOfMoves, instructionsClickCount, win, firstMoveTime) {
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

        // Instruction Button

        if(instructionsClickCount === 1) {
            result.impulsivity +=5;
        } else if(instructionsClickCount >= 2) {
            result.impulsivity +=10;
        }
  
        // Total # of moves
  
        if (noOfMoves >= 0 && noOfMoves < 15){}
        else if (noOfMoves >= 15 && noOfMoves < 25){ 
            result.lowConfidence +=3; 
            result.negThink +=1; 
            result.lackRicuz+=2; 
            result.panic+=5; 
        }
        else if (noOfMoves >= 25){ 
            result.lowConfidence +=10; 
            result.negThink +=2; 
            result.lackRicuz+=4; 
            result.panic+=10; 
        }
    }

    replay() {
        
    }
}

module.exports = ParkingLotService;