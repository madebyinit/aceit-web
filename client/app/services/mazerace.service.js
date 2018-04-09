class MazeraceService {
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

        if (win == true){
            // Successful Game Duration
              if (duration <= 60000){}
              else if (duration > 60000 && duration <= 70000){ 
                result.lowConfidence +=1; 
                result.badTimeMan+=2; 
                result.negThink += 1; 
                result.slackRicuz += 2; 
                }
              else if (duration > 70000 && duration <= 80000){ 
                result.lowConfidence +=3; 
                result.badTimeMan+=5; 
                result.perfectionism +=2; 
                result.negThink += 3; 
                result.lackRicuz += 3; 
                }
              else if (duration > 80000 && duration <= 90000){ 
                result.lowConfidence +=5; 
                result.badTimeMan+=7; 
                result.perfectionism +=5; 
                result.negThink += 5; 
                result.lackRicuz += 5; }
              else if (duration > 90000 && duration <= 100000){ 
                result.lowConfidence +=7; 
                result.badTimeMan+=9; 
                result.perfectionism +=9; 
                result.negThink += 7; 
                result.lackRicuz += 7; 
                }
              else if (duration > 100000 && duration <= 115000){ 
                result.lowConfidence +=10; 
                result.badTimeMan+=10; 
                result.perfectionism +=10; 
                result.negThink += 10; 
                result.lackRicuz += 10;  
                }
              else if (duration > 116000){ 
                result.lowConfidence +=10; 
                result.badTimeMan+=10; 
                result.perfectionism +=10; 
                result.negThink += 10; 
                result.lackRicuz += 10; 
                }
          }else{
            // Game Duration When Time is Up
              if (duration <= 30000){  
                result.badTimeMan+=10; 
                }
              else if (duration > 30000 && duration <= 40000){ 
                result.badTimeMan+=9; 
                }
              else if (duration > 40000 && duration <= 50000){ 
                result.badTimeMan+=8; 
                }
              else if (duration > 50000 && duration <= 60000){ 
                result.badTimeMan+=7; 
                }
              else if (duration > 60000 && duration <= 70000){ 
                result.lowConfidence +=4; 
                result.badTimeMan+=7; 
                result.negThink +=4; 
                result.lackRicuz += 4; 
                }
              else if (duration > 70000 && duration <= 80000){ 
                result.lowConfidence +=7; 
                result.badTimeMan+=7; 
                result.negThink +=7; 
                result.lackRicuz +=7; 
                }
              else if (duration > 80000 && duration <= 90000){ 
                result.lowConfidence +=9; 
                result.badTimeMan+=9; 
                result.negThink +=9; 
                result.lackRicuz +=9; 
                }
              else if (duration > 90000 && duration <= 100000){ 
                result.lowConfidence +=10; 
                result.badTimeMan+=10; 
                result.perfectionism +=5; 
                result.negThink +=10; 
                result.lackRicuz +=10; 
                }
              else if (duration > 100000 && duration <= 115000){ 
                result.lowConfidence +=10; 
                result.badTimeMan+=10; 
                result.perfectionism +=10; 
                result.negThink +=10; 
                result.lackRicuz +=10; 
                }
              else if (duration > 116000){ 
                result.lowConfidence +=10; 
                result.badTimeMan+=10; 
                result.perfectionism +=10; 
                result.negThink +=10; 
                result.lackRicuz +=10; 
                }
        
          }
            // Instruction Button

            if(instructionsClickCount === 1) {
                result.impulsivity +=5;
            } else if(instructionsClickCount >= 2) {
                result.impulsivity +=10;
            }

            this.gameScore.mazerace = Object.assign({}, result);

    }

    replay() {
        
    }
}

MazeraceService.$inject = ['gameScoreValue'];
module.exports = MazeraceService;