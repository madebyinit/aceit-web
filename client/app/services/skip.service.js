class SkipService {
    constructor(gameScoreValue){
        'ngInject';
        this.gameScore = gameScoreValue;
    }


    firstSkip(secondsleft) {
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

        if (secondsleft <= 30){ console.log("TEST");  
            this.gameScore.parkingLot = [
                result.result.lowConfidence = 10,
                result.badTimeMan = 10,
                result.perfectionism = 0,
                result.negThink = 10,
                result.lackRicuz = 10,
                result.impulsivity = 10,
                result.slowStarter = 10,
                result.panic = 10,
                result.frustration = 0]; 
            }
        else if (secondsleft > 30 && secondsleft <= 40){ 
            this.gameScore.parkingLot = [
                result.result.lowConfidence = 10,
                result.badTimeMan = 8,
                result.perfectionism = 0,
                result.negThink = 10,
                result.lackRicuz = 0,
                result.impulsivity = 9,
                result.slowStarter = 8,
                result.panic = 9,
                result.frustration = 0]; 
        }

        else if (secondsleft > 40 && secondsleft <= 50){
            this.gameScore.parkingLot = [
                result.result.lowConfidence = 9,
                result.badTimeMan = 6,
                result.perfectionism = 0,
                result.negThink = 9,
                result.lackRicuz = 0,
                result.impulsivity = 8,
                result.slowStarter = 4,
                result.panic = 8,
                result.frustration = 0]; 
        }
        else if (secondsleft > 50 && secondsleft <= 60){
            this.gameScore.parkingLot = [
                result.result.lowConfidence = 7,
                result.badTimeMan = 0,
                result.perfectionism = 0,
                result.negThink = 7,
                result.lackRicuz = 0,
                result.impulsivity = 0,
                result.slowStarter = 3,
                result.panic = 0,
                result.frustration = 0]; 
        }
        else if (secondsleft > 60 && secondsleft <= 70){
            this.gameScore.parkingLot = [
                result.result.lowConfidence = 5,
                result.badTimeMan = 2,
                result.perfectionism = 0,
                result.negThink = 5,
                result.lackRicuz = 0,
                result.impulsivity = 0,
                result.slowStarter = 4,
                result.panic = 0,
                result.frustration = 0]; 
        }
        else if (secondsleft > 70 && secondsleft <= 80){
            this.gameScore.parkingLot = [
                result.result.lowConfidence = 6,
                result.badTimeMan = 6,
                result.perfectionism = 2,
                result.negThink = 6,
                result.lackRicuz = 0,
                result.impulsivity = 0,
                result.slowStarter = 7,
                result.panic = 0,
                result.frustration = 0]; 
        }
        else if (secondsleft > 80 && secondsleft <= 90){
            this.gameScore.parkingLot = [
                result.result.lowConfidence = 7,
                result.badTimeMan = 9,
                result.perfectionism = 5,
                result.negThink = 7,
                result.lackRicuz = 0,
                result.impulsivity = 0,
                result.slowStarter = 9,
                result.panic = 0,
                result.frustration = 0]; 
        }
        else if (secondsleft > 90 && secondsleft <= 100){
            this.gameScore.parkingLot = [
                result.result.lowConfidence = 8,
                result.badTimeMan = 10,
                result.perfectionism = 10,
                result.negThink = 8,
                result.lackRicuz = 0,
                result.impulsivity = 0,
                result.slowStarter = 10,
                result.panic = 0,
                result.frustration = 0]; 
        }
        else if (secondsleft > 100 && secondsleft <= 115){
            this.gameScore.parkingLot = [
                result.result.lowConfidence = 10,
                result.badTimeMan = 10,
                result.perfectionism = 10,
                result.negThink = 10,
                result.lackRicuz = 0,
                result.impulsivity = 0,
                result.slowStarter = 10,
                result.panic = 0,
                result.frustration = 0]; 
        }
        else if (secondsleft > 116){
            this.gameScore.parkingLot = [
                result.result.lowConfidence = 0,
                result.badTimeMan = 0,
                result.perfectionism = 0,
                result.negThink = 0,
                result.lackRicuz = 0,
                result.impulsivity = 10,
                result.slowStarter = 0,
                result.panic = 0,
                result.frustration = 0]; 
        }
    }

    secondSkip(secondsleft) {
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

        if (secondsleft <= 30){
            this.gameScore.tower = [
                result.result.lowConfidence = 5,
                result.badTimeMan = 0,
                result.perfectionism = 0,
                result.negThink = 0,
                result.lackRicuz = 0,
                result.impulsivity = 0,
                result.slowStarter = 0,
                result.panic = 0,
                result.frustration = 0]; 
        }
        else if (secondsleft > 30 && secondsleft <= 40){
            this.gameScore.tower = [
                result.result.lowConfidence = 4,
                result.badTimeMan = 0,
                result.perfectionism = 0,
                result.negThink = 0,
                result.lackRicuz = 0,
                result.impulsivity = 2,
                result.slowStarter = 0,
                result.panic = 0,
                result.frustration = 0]; 
        }
        else if (secondsleft > 40 && secondsleft <= 50){
            this.gameScore.tower = [
                result.result.lowConfidence = 3,
                result.badTimeMan = 0,
                result.perfectionism = 0,
                result.negThink = 0,
                result.lackRicuz = 0,
                result.impulsivity = 0,
                result.slowStarter = 0,
                result.panic = 0,
                result.frustration = 0]; 
        }
        else if (secondsleft > 50 && secondsleft <= 60){
            this.gameScore.tower = [
                result.result.lowConfidence = 0,
                result.badTimeMan = 0,
                result.perfectionism = 0,
                result.negThink = 0,
                result.lackRicuz = 0,
                result.impulsivity = 0,
                result.slowStarter = 0,
                result.panic = 0,
                result.frustration = 0]; 
        }
        else if (secondsleft > 60 && secondsleft <= 70){
            this.gameScore.tower = [
                result.result.lowConfidence = 0,
                result.badTimeMan = 0,
                result.perfectionism = 0,
                result.negThink = 0,
                result.lackRicuz = 0,
                result.impulsivity = 0,
                result.slowStarter = 0,
                result.panic = 0,
                result.frustration = 0]; 
        }
        else if (secondsleft > 70 && secondsleft <= 80){
            this.gameScore.tower = [
                result.result.lowConfidence = 0,
                result.badTimeMan = 2,
                result.perfectionism = 2,
                result.negThink = 0,
                result.lackRicuz = 0,
                result.impulsivity = 0,
                result.slowStarter = 0,
                result.panic = 0,
                result.frustration = 0]; 
        }
        else if (secondsleft > 80 && secondsleft <= 90){
            this.gameScore.tower = [
                result.result.lowConfidence = 0,
                result.badTimeMan = 4,
                result.perfectionism = 4,
                result.negThink = 0,
                result.lackRicuz = 0,
                result.impulsivity = 0,
                result.slowStarter = 0,
                result.panic = 0,
                result.frustration = 0]; 
        }
        else if (secondsleft > 90 && secondsleft <= 100){
            this.gameScore.tower = [
                result.result.lowConfidence = 0,
                result.badTimeMan = 8,
                result.perfectionism = 8,
                result.negThink = 0,
                result.lackRicuz = 0,
                result.impulsivity = 0,
                result.slowStarter = 0,
                result.panic = 0,
                result.frustration = 0]; 
        }
        else if (secondsleft > 100 && secondsleft <= 115){
            this.gameScore.tower = [
                result.result.lowConfidence = 0,
                result.badTimeMan = 10,
                result.perfectionism = 10,
                result.negThink = 0,
                result.lackRicuz = 0,
                result.impulsivity = 0,
                result.slowStarter = 0,
                result.panic = 0,
                result.frustration = 0]; 
        }
        else if (secondsleft > 116) {
            this.gameScore.tower = [
                result.result.lowConfidence = 0,
                result.badTimeMan = 10,
                result.perfectionism = 10,
                result.negThink = 0,
                result.lackRicuz = 0,
                result.impulsivity = 10,
                result.slowStarter = 0,
                result.panic = 0,
                result.frustration = 0]; 
        }
    }

    thirdSkip(secondsleft) {
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

        if (this.secondsleft <= 30){
            this.gameScore.mouseGame = [
                result.result.lowConfidence = 10,
                result.badTimeMan = 10,
                result.perfectionism = 0,
                result.negThink = 10,
                result.lackRicuz = 0,
                result.impulsivity = 10,
                result.slowStarter = 0,
                result.panic = 0,
                result.frustration = 0]; 
        }
        else if (this.secondsleft > 30 && this.secondsleft <= 40){
            this.gameScore.mouseGame = [
                result.result.lowConfidence = 8,
                result.badTimeMan = 6,
                result.perfectionism = 0,
                result.negThink = 8,
                result.lackRicuz = 0,
                result.impulsivity = 8,
                result.slowStarter = 0,
                result.panic = 0,
                result.frustration = 0]; 
        }
        else if (this.secondsleft > 40 && this.secondsleft <= 90){
            this.gameScore.mouseGame = [
                result.result.lowConfidence = 0,
                result.badTimeMan = 0,
                result.perfectionism = 0,
                result.negThink = 0,
                result.lackRicuz = 0,
                result.impulsivity = 0,
                result.slowStarter = 0,
                result.panic = 0,
                result.frustration = 0]; 
        }
        else if (this.secondsleft > 90 && this.secondsleft <= 100){
            this.gameScore.mouseGame = [
                result.result.lowConfidence = 0,
                result.badTimeMan = 3,
                result.perfectionism = 1,
                result.negThink = 0,
                result.lackRicuz = 0,
                result.impulsivity = 0,
                result.slowStarter = 0,
                result.panic = 0,
                result.frustration = 0]; 
        }
        else if (this.secondsleft > 100 && this.secondsleft <= 115){
            this.gameScore.mouseGame = [
                result.result.lowConfidence = 0,
                result.badTimeMan = 6,
                result.perfectionism = 3,
                result.negThink = 0,
                result.lackRicuz = 0,
                result.impulsivity = 0,
                result.slowStarter = 0,
                result.panic = 0,
                result.frustration = 0]; 
        }
        else if (this.secondsleft > 116){
            this.gameScore.mouseGame = [
                result.result.lowConfidence = 0,
                result.badTimeMan = 10,
                result.perfectionism = 10,
                result.negThink = 0,
                result.lackRicuz = 0,
                result.impulsivity = 0,
                result.slowStarter = 0,
                result.panic = 0,
                result.frustration = 0]; 
        }
    }

    fourthSkip(secondsleft) {
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

        if (this.secondsleft <= 30){
            this.gameScore.mazerace = [
                result.result.lowConfidence = 10,
                result.badTimeMan = 10,
                result.perfectionism = 0,
                result.negThink = 10,
                result.lackRicuz = 10,
                result.impulsivity = 10,
                result.slowStarter = 0,
                result.panic = 10,
                result.frustration = 0]; 
        }
        else if (this.secondsleft > 30 && this.secondsleft <= 40){
            this.gameScore.mazerace = [
                result.result.lowConfidence = 9,
                result.badTimeMan = 9,
                result.perfectionism = 0,
                result.negThink = 9,
                result.lackRicuz = 9,
                result.impulsivity = 9,
                result.slowStarter = 0,
                result.panic = 9,
                result.frustration = 0]; 
        }
        else if (this.secondsleft > 40 && this.secondsleft <= 50){
            this.gameScore.mazerace = [
                result.result.lowConfidence = 8,
                result.badTimeMan = 7,
                result.perfectionism = 0,
                result.negThink = 8,
                result.lackRicuz = 8,
                result.impulsivity = 0,
                result.slowStarter = 0,
                result.panic = 8,
                result.frustration = 0]; 
        }
        else if (this.secondsleft > 50 && this.secondsleft <= 60){
            this.gameScore.mazerace = [
                result.result.lowConfidence = 7,
                result.badTimeMan = 0,
                result.perfectionism = 0,
                result.negThink = 7,
                result.lackRicuz = 7,
                result.impulsivity = 0,
                result.slowStarter = 0,
                result.panic = 0,
                result.frustration = 0]; 
        }
        else if (this.secondsleft > 60 && this.secondsleft <= 70){
            this.gameScore.mazerace = [
                result.result.lowConfidence = 6,
                result.badTimeMan = 0,
                result.perfectionism = 0,
                result.negThink = 6,
                result.lackRicuz = 6,
                result.impulsivity = 0,
                result.slowStarter = 0,
                result.panic = 0,
                result.frustration = 0]; 
        }
        else if (this.secondsleft > 70 && this.secondsleft <= 80){
            this.gameScore.mazerace = [
                result.result.lowConfidence = 5,
                result.badTimeMan = 3,
                result.perfectionism = 0,
                result.negThink = 5,
                result.lackRicuz = 5,
                result.impulsivity = 0,
                result.slowStarter = 0,
                result.panic = 0,
                result.frustration = 0]; 
        }
        else if (this.secondsleft > 80 && this.secondsleft <= 90){
            this.gameScore.mazerace = [
                result.result.lowConfidence = 7,
                result.badTimeMan = 7,
                result.perfectionism = 3,
                result.negThink = 4,
                result.lackRicuz = 4,
                result.impulsivity = 0,
                result.slowStarter = 0,
                result.panic = 0,
                result.frustration = 0]; 
        }
        else if (this.secondsleft > 90 && this.secondsleft <= 100){
            this.gameScore.mazerace = [
                result.result.lowConfidence = 8,
                result.badTimeMan = 10,
                result.perfectionism = 8,
                result.negThink = 8,
                result.lackRicuz = 8,
                result.impulsivity = 0,
                result.slowStarter = 0,
                result.panic = 0,
                result.frustration = 0]; 
        }
        else if (this.secondsleft > 100 && this.secondsleft <= 115){
            this.gameScore.mazerace = [
                result.result.lowConfidence = 10,
                result.badTimeMan = 10,
                result.perfectionism = 9,
                result.negThink = 10,
                result.lackRicuz = 10,
                result.impulsivity = 0,
                result.slowStarter = 0,
                result.panic = 0,
                result.frustration = 0]; 
        }
        else if (this.secondsleft > 116){
            this.gameScore.mazerace = [
                result.result.lowConfidence = 10,
                result.badTimeMan = 10,
                result.perfectionism = 10,
                result.negThink = 10,
                result.lackRicuz = 10,
                result.impulsivity = 0,
                result.slowStarter = 0,
                result.panic = 0,
                result.frustration = 0]; 
        }
    }


}

module.exports = SkipService;