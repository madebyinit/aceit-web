class SkipService {
    constructor(gameScoreValue,estimationOfResults){
        this.gameScore = gameScoreValue;
        this.estimationOfResults = estimationOfResults;
    }

    GameSkip(secondsleft,gameName) {
       

        if (secondsleft <= 30){ console.log("TEST",this.gameScore[gameName]);  
            this.gameScore[gameName] = [
                this.estimationOfResults[gameName].Skip["0-30"].LC,
                this.estimationOfResults[gameName].Skip["0-30"].BTM,
                this.estimationOfResults[gameName].Skip["0-30"].P,
                this.estimationOfResults[gameName].Skip["0-30"].NT,
                this.estimationOfResults[gameName].Skip["0-30"].LR,
                this.estimationOfResults[gameName].Skip["0-30"].I,
                this.estimationOfResults[gameName].Skip["0-30"].SS,
                this.estimationOfResults[gameName].Skip["0-30"].Panic,
                this.estimationOfResults[gameName].Skip["0-30"].F]; 
            }
        else if (secondsleft > 30 && secondsleft <= 40){ 
            this.gameScore[gameName] = [
                this.estimationOfResults[gameName].Skip["31-40"].LC,
                this.estimationOfResults[gameName].Skip["31-40"].BTM,
                this.estimationOfResults[gameName].Skip["31-40"].P,
                this.estimationOfResults[gameName].Skip["31-40"].NT,
                this.estimationOfResults[gameName].Skip["31-40"].LR,
                this.estimationOfResults[gameName].Skip["31-40"].I,
                this.estimationOfResults[gameName].Skip["31-40"].SS,
                this.estimationOfResults[gameName].Skip["31-40"].Panic,
                this.estimationOfResults[gameName].Skip["31-40"].F]; 
        }

        else if (secondsleft > 40 && secondsleft <= 50){
            this.gameScore[gameName] = [
                this.estimationOfResults[gameName].Skip["41-50"].LC,
                this.estimationOfResults[gameName].Skip["41-50"].BTM,
                this.estimationOfResults[gameName].Skip["41-50"].P,
                this.estimationOfResults[gameName].Skip["41-50"].NT,
                this.estimationOfResults[gameName].Skip["41-50"].LR,
                this.estimationOfResults[gameName].Skip["41-50"].I,
                this.estimationOfResults[gameName].Skip["41-50"].SS,
                this.estimationOfResults[gameName].Skip["41-50"].Panic,
                this.estimationOfResults[gameName].Skip["41-50"].F]; 
        }
        else if (secondsleft > 50 && secondsleft <= 60){
            this.gameScore[gameName] = [
                this.estimationOfResults[gameName].Skip["51-60"].LC,
                this.estimationOfResults[gameName].Skip["51-60"].BTM,
                this.estimationOfResults[gameName].Skip["51-60"].P,
                this.estimationOfResults[gameName].Skip["51-60"].NT,
                this.estimationOfResults[gameName].Skip["51-60"].LR,
                this.estimationOfResults[gameName].Skip["51-60"].I,
                this.estimationOfResults[gameName].Skip["51-60"].SS,
                this.estimationOfResults[gameName].Skip["51-60"].Panic,
                this.estimationOfResults[gameName].Skip["51-60"].F]; 
        }
        else if (secondsleft > 60 && secondsleft <= 70){
            this.gameScore[gameName] = [
                this.estimationOfResults[gameName].Skip["61-70"].LC,
                this.estimationOfResults[gameName].Skip["61-70"].BTM,
                this.estimationOfResults[gameName].Skip["61-70"].P,
                this.estimationOfResults[gameName].Skip["61-70"].NT,
                this.estimationOfResults[gameName].Skip["61-70"].LR,
                this.estimationOfResults[gameName].Skip["61-70"].I,
                this.estimationOfResults[gameName].Skip["61-70"].SS,
                this.estimationOfResults[gameName].Skip["61-70"].Panic,
                this.estimationOfResults[gameName].Skip["61-70"].F]; 
        }
        else if (secondsleft > 70 && secondsleft <= 80){
            this.gameScore[gameName] = [
                this.estimationOfResults[gameName].Skip["71-80"].LC,
                this.estimationOfResults[gameName].Skip["71-80"].BTM,
                this.estimationOfResults[gameName].Skip["71-80"].P,
                this.estimationOfResults[gameName].Skip["71-80"].NT,
                this.estimationOfResults[gameName].Skip["71-80"].LR,
                this.estimationOfResults[gameName].Skip["71-80"].I,
                this.estimationOfResults[gameName].Skip["71-80"].SS,
                this.estimationOfResults[gameName].Skip["71-80"].Panic,
                this.estimationOfResults[gameName].Skip["71-80"].F]; 
        }
        else if (secondsleft > 80 && secondsleft <= 90){
            this.gameScore[gameName] = [
                this.estimationOfResults[gameName].Skip["81-90"].LC,
                this.estimationOfResults[gameName].Skip["81-90"].BTM,
                this.estimationOfResults[gameName].Skip["81-90"].P,
                this.estimationOfResults[gameName].Skip["81-90"].NT,
                this.estimationOfResults[gameName].Skip["81-90"].LR,
                this.estimationOfResults[gameName].Skip["81-90"].I,
                this.estimationOfResults[gameName].Skip["81-90"].SS,
                this.estimationOfResults[gameName].Skip["81-90"].Panic,
                this.estimationOfResults[gameName].Skip["81-90"].F]; 
        }
        else if (secondsleft > 90 && secondsleft <= 100){
            this.gameScore[gameName] = [
                this.estimationOfResults[gameName].Skip["91-100"].LC,
                this.estimationOfResults[gameName].Skip["91-100"].BTM,
                this.estimationOfResults[gameName].Skip["91-100"].P,
                this.estimationOfResults[gameName].Skip["91-100"].NT,
                this.estimationOfResults[gameName].Skip["91-100"].LR,
                this.estimationOfResults[gameName].Skip["91-100"].I,
                this.estimationOfResults[gameName].Skip["91-100"].SS,
                this.estimationOfResults[gameName].Skip["91-100"].Panic,
                this.estimationOfResults[gameName].Skip["91-100"].F]; 
        }
        else if (secondsleft > 100 && secondsleft <= 115){
            this.gameScore[gameName] = [
                this.estimationOfResults[gameName].Skip["101-115"].LC,
                this.estimationOfResults[gameName].Skip["101-115"].BTM,
                this.estimationOfResults[gameName].Skip["101-115"].P,
                this.estimationOfResults[gameName].Skip["101-115"].NT,
                this.estimationOfResults[gameName].Skip["101-115"].LR,
                this.estimationOfResults[gameName].Skip["101-115"].I,
                this.estimationOfResults[gameName].Skip["101-115"].SS,
                this.estimationOfResults[gameName].Skip["101-115"].Panic,
                this.estimationOfResults[gameName].Skip["101-115"].F];  
        }
        else if (secondsleft > 116){
            this.gameScore[gameName] = [
                this.estimationOfResults[gameName].Skip["116+"].LC,
                this.estimationOfResults[gameName].Skip["116+"].BTM,
                this.estimationOfResults[gameName].Skip["116+"].P,
                this.estimationOfResults[gameName].Skip["116+"].NT,
                this.estimationOfResults[gameName].Skip["116+"].LR,
                this.estimationOfResults[gameName].Skip["116+"].I,
                this.estimationOfResults[gameName].Skip["116+"].SS,
                this.estimationOfResults[gameName].Skip["116+"].Panic,
                this.estimationOfResults[gameName].Skip["116+"].F]; 
        }
        console.log(this.gameScore,"SKIP RESULT");
    }

}

SkipService.$inject = ['gameScoreValue','estimationOfResults'];
module.exports = SkipService;