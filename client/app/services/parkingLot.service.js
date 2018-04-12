class ParkingLotService {
    constructor(gameScoreValue,estimationOfResults){
        this.gameScore = gameScoreValue;
        this.estimationOfResults = estimationOfResults;
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
        // {'LC':10,'BTM':10,'P': 0,'NT':10,'LR':10,'I':10,'SS':10,'Panic':10,'F':0}
        console.log(firstMoveTime,"FIRST TIME");
        // No Initial Activity
        if (firstMoveTime > 14000 && firstMoveTime < 24000) {
            result.lowConfidence += this.estimationOfResults.parkinglot.NIA["15-24"].LC; 
            result.badTimeMan += this.estimationOfResults.parkinglot.NIA["15-24"].BTM; 
            result.perfectionism += this.estimationOfResults.parkinglot.NIA["15-24"].P; 
            result.negThink += this.estimationOfResults.parkinglot.NIA["15-24"].NT; 
            result.lackRicuz += this.estimationOfResults.parkinglot.NIA["15-24"].LR; 
            result.impulsivity += this.estimationOfResults.parkinglot.NIA["15-24"].I; 
            result.slowStarter += this.estimationOfResults.parkinglot.NIA["15-24"].SS; 
            result.panic += this.estimationOfResults.parkinglot.NIA["15-24"].Panic;
            result.frustration += this.estimationOfResults.parkinglot.NIA["15-24"].F;
        
        }else if (firstMoveTime > 24000) { 

            result.lowConfidence += this.estimationOfResults.parkinglot.NIA["25+"].LC; 
            result.badTimeMan += this.estimationOfResults.parkinglot.NIA["25+"].BTM; 
            result.perfectionism += this.estimationOfResults.parkinglot.NIA["25+"].P; 
            result.negThink += this.estimationOfResults.parkinglot.NIA["25+"].NT; 
            result.lackRicuz += this.estimationOfResults.parkinglot.NIA["25+"].LR; 
            result.impulsivity += this.estimationOfResults.parkinglot.NIA["25+"].I; 
            result.slowStarter += this.estimationOfResults.parkinglot.NIA["25+"].SS; 
            result.panic += this.estimationOfResults.parkinglot.NIA["25+"].Panic;
            result.frustration += this.estimationOfResults.parkinglot.NIA["25+"].F;
        }
    
        // Successful Game Duration
        if (duration > 60000 && duration <= 70000){ 
            // result.lowConfidence +=1; 
            // result.badTimeMan+=2; 
            // result.negThink += 1; 
            // result.slowStarter += 1;

            result.lowConfidence += this.estimationOfResults.parkinglot.SGD["61-70"].LC; 
            result.badTimeMan +=    this.estimationOfResults.parkinglot.SGD["61-70"].BTM; 
            result.perfectionism += this.estimationOfResults.parkinglot.SGD["61-70"].P; 
            result.negThink +=      this.estimationOfResults.parkinglot.SGD["61-70"].NT; 
            result.lackRicuz +=     this.estimationOfResults.parkinglot.SGD["61-70"].LR; 
            result.impulsivity +=   this.estimationOfResults.parkinglot.SGD["61-70"].I; 
            result.slowStarter +=   this.estimationOfResults.parkinglot.SGD["61-70"].SS; 
            result.panic +=         this.estimationOfResults.parkinglot.SGD["61-70"].Panic;
            result.frustration +=   this.estimationOfResults.parkinglot.SGD["61-70"].F;
        
        }else if (duration > 70000 && duration <= 80000){ 
            // result.lowConfidence +=1; 
            // result.badTimeMan+=5; 
            // result.perfectionism +=2; 
            // result.negThink += 2; 
            // result.lackRicuz += 2; 
            // result.slowStarter += 5; 
            // result.panic += 5; 

            result.lowConfidence += this.estimationOfResults.parkinglot.SGD["71-80"].LC; 
            result.badTimeMan +=    this.estimationOfResults.parkinglot.SGD["71-80"].BTM; 
            result.perfectionism += this.estimationOfResults.parkinglot.SGD["71-80"].P; 
            result.negThink +=      this.estimationOfResults.parkinglot.SGD["71-80"].NT; 
            result.lackRicuz +=     this.estimationOfResults.parkinglot.SGD["71-80"].LR; 
            result.impulsivity +=   this.estimationOfResults.parkinglot.SGD["71-80"].I; 
            result.slowStarter +=   this.estimationOfResults.parkinglot.SGD["71-80"].SS; 
            result.panic +=         this.estimationOfResults.parkinglot.SGD["71-80"].Panic;
            result.frustration +=   this.estimationOfResults.parkinglot.SGD["71-80"].F;

        }else if (duration > 80000 && duration <= 90000){ 
            // result.lowConfidence +=1; 
            // result.badTimeMan+=7; 
            // result.perfectionism +=5; 
            // result.negThink += 4; 
            // result.lackRicuz += 5; 
            // result.slowStarter += 7; 
            // result.panic += 5; 

            result.lowConfidence += this.estimationOfResults.parkinglot.SGD["81-90"].LC; 
            result.badTimeMan +=    this.estimationOfResults.parkinglot.SGD["81-90"].BTM; 
            result.perfectionism += this.estimationOfResults.parkinglot.SGD["81-90"].P; 
            result.negThink +=      this.estimationOfResults.parkinglot.SGD["81-90"].NT; 
            result.lackRicuz +=     this.estimationOfResults.parkinglot.SGD["81-90"].LR; 
            result.impulsivity +=   this.estimationOfResults.parkinglot.SGD["81-90"].I; 
            result.slowStarter +=   this.estimationOfResults.parkinglot.SGD["81-90"].SS; 
            result.panic +=         this.estimationOfResults.parkinglot.SGD["81-90"].Panic;
            result.frustration +=   this.estimationOfResults.parkinglot.SGD["81-90"].F;

        }else if (duration > 90000 && duration <= 100000){ 
            // result.lowConfidence +=2; 
            // result.badTimeMan+=4; 
            // result.perfectionism +=4; 
            // result.negThink += 5; 
            // result.lackRicuz += 7; 
            // result.slowStarter += 9; 

            result.lowConfidence += this.estimationOfResults.parkinglot.SGD["91-100"].LC; 
            result.badTimeMan +=    this.estimationOfResults.parkinglot.SGD["91-100"].BTM; 
            result.perfectionism += this.estimationOfResults.parkinglot.SGD["91-100"].P; 
            result.negThink +=      this.estimationOfResults.parkinglot.SGD["91-100"].NT; 
            result.lackRicuz +=     this.estimationOfResults.parkinglot.SGD["91-100"].LR; 
            result.impulsivity +=   this.estimationOfResults.parkinglot.SGD["91-100"].I; 
            result.slowStarter +=   this.estimationOfResults.parkinglot.SGD["91-100"].SS; 
            result.panic +=         this.estimationOfResults.parkinglot.SGD["91-100"].Panic;
            result.frustration +=   this.estimationOfResults.parkinglot.SGD["91-100"].F;

        }else if (duration > 100000 && duration <= 115000){ 
            // result.lowConfidence +=5; 
            // result.badTimeMan+=6; 
            // result.perfectionism +=6; 
            // result.negThink += 6; 
            // result.lackRicuz += 6; 
            // result.impulsivity +=6; 
            // result.slowStarter += 6; 
            // result.panic += 6; 

            result.lowConfidence += this.estimationOfResults.parkinglot.SGD["101-115"].LC; 
            result.badTimeMan +=    this.estimationOfResults.parkinglot.SGD["101-115"].BTM; 
            result.perfectionism += this.estimationOfResults.parkinglot.SGD["101-115"].P; 
            result.negThink +=      this.estimationOfResults.parkinglot.SGD["101-115"].NT; 
            result.lackRicuz +=     this.estimationOfResults.parkinglot.SGD["101-115"].LR; 
            result.impulsivity +=   this.estimationOfResults.parkinglot.SGD["101-115"].I; 
            result.slowStarter +=   this.estimationOfResults.parkinglot.SGD["101-115"].SS; 
            result.panic +=         this.estimationOfResults.parkinglot.SGD["101-115"].Panic;
            result.frustration +=   this.estimationOfResults.parkinglot.SGD["101-115"].F;

        }else if (duration > 116000){ 
            // result.lowConfidence +=8; 
            // result.badTimeMan+=10; 
            // result.perfectionism +=10; 
            // result.negThink += 8; 
            // result.lackRicuz += 10; 
            // result.slowStarter += 10; 

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
            // result.impulsivity +=5;
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
            // result.impulsivity +=10;
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
        if (noOfMoves >= 41 && noOfMoves < 61){ 
            // result.impulsivity +=5; 
            // result.frustration+=5; 
            result.lowConfidence += this.estimationOfResults.parkinglot.TM["41-60"].LC; 
            result.badTimeMan +=    this.estimationOfResults.parkinglot.TM["41-60"].BTM; 
            result.perfectionism += this.estimationOfResults.parkinglot.TM["41-60"].P; 
            result.negThink +=      this.estimationOfResults.parkinglot.TM["41-60"].NT; 
            result.lackRicuz +=     this.estimationOfResults.parkinglot.TM["41-60"].LR; 
            result.impulsivity +=   this.estimationOfResults.parkinglot.TM["41-60"].I; 
            result.slowStarter +=   this.estimationOfResults.parkinglot.TM["41-60"].SS; 
            result.panic +=         this.estimationOfResults.parkinglot.TM["41-60"].Panic;
            result.frustration +=   this.estimationOfResults.parkinglot.TM["41-60"].F;

        }else if (noOfMoves >= 61){ 
            // result.impulsivity +=10; 
            // result.frustration+=10; 
            result.lowConfidence += this.estimationOfResults.parkinglot.TM["61+"].LC; 
            result.badTimeMan +=    this.estimationOfResults.parkinglot.TM["61+"].BTM; 
            result.perfectionism += this.estimationOfResults.parkinglot.TM["61+"].P; 
            result.negThink +=      this.estimationOfResults.parkinglot.TM["61+"].NT; 
            result.lackRicuz +=     this.estimationOfResults.parkinglot.TM["61+"].LR; 
            result.impulsivity +=   this.estimationOfResults.parkinglot.TM["61+"].I; 
            result.slowStarter +=   this.estimationOfResults.parkinglot.TM["61+"].SS; 
            result.panic +=         this.estimationOfResults.parkinglot.TM["61+"].Panic;
            result.frustration +=   this.estimationOfResults.parkinglot.TM["61+"].F;
        }
        this.gameScore.parkinglot = Object.assign({}, result);
        alert('parkinglot = '+this.gameScore.parkinglot.lowConfidence+' '+this.gameScore.parkinglot.badTimeMan+' '+this.gameScore.parkinglot.perfectionism+' '+this.gameScore.parkinglot.negThink+' '+this.gameScore.parkinglot.lackRicuz+' '+this.gameScore.parkinglot.impulsivity+' '+this.gameScore.parkinglot.slowStarter+' '+this.gameScore.parkinglot.panic+' '+this.gameScore.parkinglot.frustration);
        // console.log(this.gameScore.parkinglot," WWWWWWWWWWW ", this.estimationOfResults.parkinglot);
        // lowConfidence: 0,
        // badTimeMan: 0,
        // perfectionism: 0,
        // negThink: 0,
        // lackRicuz: 0,
        // impulsivity: 0,
        // slowStarter: 0,
        // panic: 0,
        // frustration: 0
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
        console.log( noOfMoves)
console.log(this.estimationOfResults.parkingLotLast);
        if (win == true){
            this.gameScore.gamesSuccessfullyCompleted += 1;
        }

        // Instruction Button
        if(instructionsClickCount === 1) {
            // result.impulsivity +=5;
            result.lowConfidence += this.estimationOfResults.parkingLotLast.IB["1"].LC; 
            result.badTimeMan +=    this.estimationOfResults.parkingLotLast.IB["1"].BTM; 
            result.perfectionism += this.estimationOfResults.parkingLotLast.IB["1"].P; 
            result.negThink +=      this.estimationOfResults.parkingLotLast.IB["1"].NT; 
            result.lackRicuz +=     this.estimationOfResults.parkingLotLast.IB["1"].LR; 
            result.impulsivity +=   this.estimationOfResults.parkingLotLast.IB["1"].I; 
            result.slowStarter +=   this.estimationOfResults.parkingLotLast.IB["1"].SS; 
            result.panic +=         this.estimationOfResults.parkingLotLast.IB["1"].Panic;
            result.frustration +=   this.estimationOfResults.parkingLotLast.IB["1"].F;
        
        }else if(instructionsClickCount >= 2) {
            // result.impulsivity +=10;
            result.lowConfidence += this.estimationOfResults.parkingLotLast.IB["2+"].LC; 
            result.badTimeMan +=    this.estimationOfResults.parkingLotLast.IB["2+"].BTM; 
            result.perfectionism += this.estimationOfResults.parkingLotLast.IB["2+"].P; 
            result.negThink +=      this.estimationOfResults.parkingLotLast.IB["2+"].NT; 
            result.lackRicuz +=     this.estimationOfResults.parkingLotLast.IB["2+"].LR; 
            result.impulsivity +=   this.estimationOfResults.parkingLotLast.IB["2+"].I; 
            result.slowStarter +=   this.estimationOfResults.parkingLotLast.IB["2+"].SS; 
            result.panic +=         this.estimationOfResults.parkingLotLast.IB["2+"].Panic;
            result.frustration +=   this.estimationOfResults.parkingLotLast.IB["2+"].F;
        }
  
        // Total # of moves
  
         if (noOfMoves >= 15 && noOfMoves < 25){ 
            // result.lowConfidence +=3; 
            // result.negThink +=1; 
            // result.lackRicuz+=2; 
            // result.panic+=5; 
            console.log("FTE", noOfMoves)
            result.lowConfidence += this.estimationOfResults.parkingLotLast.TM["15-25"].LC; 
            result.badTimeMan +=    this.estimationOfResults.parkingLotLast.TM["15-25"].BTM; 
            result.perfectionism += this.estimationOfResults.parkingLotLast.TM["15-25"].P; 
            result.negThink +=      this.estimationOfResults.parkingLotLast.TM["15-25"].NT; 
            result.lackRicuz +=     this.estimationOfResults.parkingLotLast.TM["15-25"].LR; 
            result.impulsivity +=   this.estimationOfResults.parkingLotLast.TM["15-25"].I; 
            result.slowStarter +=   this.estimationOfResults.parkingLotLast.TM["15-25"].SS; 
            result.panic +=         this.estimationOfResults.parkingLotLast.TM["15-25"].Panic;
            result.frustration +=   this.estimationOfResults.parkingLotLast.TM["15-25"].F;
        }
        else if (noOfMoves >= 25){ 
            console.log("FTE222", noOfMoves)
            // result.lowConfidence +=10; 
            // result.negThink +=2; 
            // result.lackRicuz+=4; 
            // result.panic+=10; 

            result.lowConfidence += this.estimationOfResults.parkingLotLast.TM["25+"].LC; 
            result.badTimeMan +=    this.estimationOfResults.parkingLotLast.TM["25+"].BTM; 
            result.perfectionism += this.estimationOfResults.parkingLotLast.TM["25+"].P; 
            result.negThink +=      this.estimationOfResults.parkingLotLast.TM["25+"].NT; 
            result.lackRicuz +=     this.estimationOfResults.parkingLotLast.TM["25+"].LR; 
            result.impulsivity +=   this.estimationOfResults.parkingLotLast.TM["25+"].I; 
            result.slowStarter +=   this.estimationOfResults.parkingLotLast.TM["25+"].SS; 
            result.panic +=         this.estimationOfResults.parkingLotLast.TM["25+"].Panic;
            result.frustration +=   this.estimationOfResults.parkingLotLast.TM["25+"].F;
        }

        this.gameScore.parkinglotLast = Object.assign({}, result);

        alert('parkingLotLast = '+this.gameScore.parkinglotLast.lowConfidence+' '+this.gameScore.parkinglotLast.badTimeMan+' '+this.gameScore.parkinglotLast.perfectionism+' '+this.gameScore.parkinglotLast.negThink+' '+this.gameScore.parkinglotLast.lackRicuz+' '+this.gameScore.parkinglotLast.impulsivity+' '+this.gameScore.parkinglotLast.slowStarter+' '+this.gameScore.parkinglotLast.panic+' '+this.gameScore.parkinglotLast.frustration);

    }

    replay() {
        
    }
}

ParkingLotService.$inject = ['gameScoreValue','estimationOfResults'];
module.exports = ParkingLotService;