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

        if (win){
            this.gameScore.gamesSuccessfullyCompleted += 1;
        }
        
    // Successful Game Duration

        if (duration > 80000 && duration <= 90000){ 

            result.lowConfidence += this.estimationOfResults.parkinglot.SGD["81-90"].LC; 
            result.badTimeMan +=    this.estimationOfResults.parkinglot.SGD["81-90"].BTM; 
            result.perfectionism += this.estimationOfResults.parkinglot.SGD["81-90"].P; 
            result.negThink +=      this.estimationOfResults.parkinglot.SGD["81-90"].NT; 
            result.lackRicuz +=     this.estimationOfResults.parkinglot.SGD["81-90"].LR; 
            result.impulsivity +=   this.estimationOfResults.parkinglot.SGD["81-90"].I; 
            result.slowStarter +=   this.estimationOfResults.parkinglot.SGD["81-90"].SS; 
            result.panic +=         this.estimationOfResults.parkinglot.SGD["81-90"].Panic;
            result.frustration +=   this.estimationOfResults.parkinglot.SGD["81-90"].F;
        }
        else if (duration > 90000 && duration <= 100000){ 

            result.lowConfidence += this.estimationOfResults.parkinglot.SGD["91-100"].LC; 
            result.badTimeMan +=    this.estimationOfResults.parkinglot.SGD["91-100"].BTM; 
            result.perfectionism += this.estimationOfResults.parkinglot.SGD["91-100"].P; 
            result.negThink +=      this.estimationOfResults.parkinglot.SGD["91-100"].NT; 
            result.lackRicuz +=     this.estimationOfResults.parkinglot.SGD["91-100"].LR; 
            result.impulsivity +=   this.estimationOfResults.parkinglot.SGD["91-100"].I; 
            result.slowStarter +=   this.estimationOfResults.parkinglot.SGD["91-100"].SS; 
            result.panic +=         this.estimationOfResults.parkinglot.SGD["91-100"].Panic;
            result.frustration +=   this.estimationOfResults.parkinglot.SGD["91-100"].F;
        }
        else if (duration > 100000 && duration <= 115000){ 

            result.lowConfidence += this.estimationOfResults.parkinglot.SGD["101-115"].LC; 
            result.badTimeMan +=    this.estimationOfResults.parkinglot.SGD["101-115"].BTM; 
            result.perfectionism += this.estimationOfResults.parkinglot.SGD["101-115"].P; 
            result.negThink +=      this.estimationOfResults.parkinglot.SGD["101-115"].NT; 
            result.lackRicuz +=     this.estimationOfResults.parkinglot.SGD["101-115"].LR; 
            result.impulsivity +=   this.estimationOfResults.parkinglot.SGD["101-115"].I; 
            result.slowStarter +=   this.estimationOfResults.parkinglot.SGD["101-115"].SS; 
            result.panic +=         this.estimationOfResults.parkinglot.SGD["101-115"].Panic;
            result.frustration +=   this.estimationOfResults.parkinglot.SGD["101-115"].F;
        }
        else if (duration > 116000){ 

            result.lowConfidence += this.estimationOfResults.parkinglot.SGD["116+"].LC; 
            result.badTimeMan +=    this.estimationOfResults.parkinglot.SGD["116+"].BTM; 
            result.perfectionism += this.estimationOfResults.parkinglot.SGD["116+"].P; 
            result.negThink +=      this.estimationOfResults.parkinglot.SGD["116+"].NT; 
            result.lackRicuz +=     this.estimationOfResults.parkinglot.SGD["116+"].LR; 
            result.impulsivity +=   this.estimationOfResults.parkinglot.SGD["116+"].I; 
            result.slowStarter +=   this.estimationOfResults.parkinglot.SGD["116+"].SS; 
            result.panic +=         this.estimationOfResults.parkinglot.SGD["116+"].Panic;
            result.frustration +=   this.estimationOfResults.parkinglot.SGD["116+"].F;
        }


        // Instruction Button
        if(instructionsClickCount === 1) {

            result.lowConfidence += this.estimationOfResults.parkinglot.IB["1"].LC; 
            result.badTimeMan +=    this.estimationOfResults.parkinglot.IB["1"].BTM; 
            result.perfectionism += this.estimationOfResults.parkinglot.IB["1"].P; 
            result.negThink +=      this.estimationOfResults.parkinglot.IB["1"].NT; 
            result.lackRicuz +=     this.estimationOfResults.parkinglot.IB["1"].LR; 
            result.impulsivity +=   this.estimationOfResults.parkinglot.IB["1"].I; 
            result.slowStarter +=   this.estimationOfResults.parkinglot.IB["1"].SS; 
            result.panic +=         this.estimationOfResults.parkinglot.IB["1"].Panic;
            result.frustration +=   this.estimationOfResults.parkinglot.IB["1"].F;
            
            

        }else if(instructionsClickCount >= 2) {

            result.lowConfidence += this.estimationOfResults.parkinglot.IB["2+"].LC; 
            result.badTimeMan +=    this.estimationOfResults.parkinglot.IB["2+"].BTM; 
            result.perfectionism += this.estimationOfResults.parkinglot.IB["2+"].P; 
            result.negThink +=      this.estimationOfResults.parkinglot.IB["2+"].NT; 
            result.lackRicuz +=     this.estimationOfResults.parkinglot.IB["2+"].LR; 
            result.impulsivity +=   this.estimationOfResults.parkinglot.IB["2+"].I; 
            result.slowStarter +=   this.estimationOfResults.parkinglot.IB["2+"].SS; 
            result.panic +=         this.estimationOfResults.parkinglot.IB["2+"].Panic;
            result.frustration +=   this.estimationOfResults.parkinglot.IB["2+"].F;
        }

    // Total # of moves

        if (noOfMoves >= 46 && noOfMoves < 81){ 

            result.lowConfidence += this.estimationOfResults.parkinglot.TM["46-80"].LC; 
            result.badTimeMan +=    this.estimationOfResults.parkinglot.TM["46-80"].BTM; 
            result.perfectionism += this.estimationOfResults.parkinglot.TM["46-80"].P; 
            result.negThink +=      this.estimationOfResults.parkinglot.TM["46-80"].NT; 
            result.lackRicuz +=     this.estimationOfResults.parkinglot.TM["46-80"].LR; 
            result.impulsivity +=   this.estimationOfResults.parkinglot.TM["46-80"].I; 
            result.slowStarter +=   this.estimationOfResults.parkinglot.TM["46-80"].SS; 
            result.panic +=         this.estimationOfResults.parkinglot.TM["46-80"].Panic;
            result.frustration +=   this.estimationOfResults.parkinglot.TM["46-80"].F;
        }
        else if (noOfMoves >= 81){ 
 
            result.lowConfidence += this.estimationOfResults.parkinglot.TM["81+"].LC; 
            result.badTimeMan +=    this.estimationOfResults.parkinglot.TM["81+"].BTM; 
            result.perfectionism += this.estimationOfResults.parkinglot.TM["81+"].P; 
            result.negThink +=      this.estimationOfResults.parkinglot.TM["81+"].NT; 
            result.lackRicuz +=     this.estimationOfResults.parkinglot.TM["81+"].LR; 
            result.impulsivity +=   this.estimationOfResults.parkinglot.TM["81+"].I; 
            result.slowStarter +=   this.estimationOfResults.parkinglot.TM["81+"].SS; 
            result.panic +=         this.estimationOfResults.parkinglot.TM["81+"].Panic;
            result.frustration +=   this.estimationOfResults.parkinglot.TM["81+"].F;
        }

      this.gameScore.tower = Object.assign({}, result);
        alert('tower = '+this.gameScore.tower.lowConfidence+' '+this.gameScore.tower.badTimeMan+' '+this.gameScore.tower.perfectionism+' '+this.gameScore.tower.negThink+' '+this.gameScore.tower.lackRicuz+' '+this.gameScore.tower.impulsivity+' '+this.gameScore.tower.slowStarter+' '+this.gameScore.tower.panic+' '+this.gameScore.tower.frustration);

    }

    replay() {
        
    }
}

TowerService.$inject = ['gameScoreValue'];
module.exports = TowerService;