class GamesService {
    constructor(gameSummaryValue,gameScoreValue,estimationOfResults){
        this.gameScore = gameScoreValue;
        this.gameSummary = gameSummaryValue;
        this.estimationOfResults = estimationOfResults;
    }

    EndTimeInGame(Param) {
      this.gameScore.endTime = [ 
        this.estimationOfResults.gameEnd.GSIWTiU[Param]["LC"],
        this.estimationOfResults.gameEnd.GSIWTiU[Param]["BTM"],  
        this.estimationOfResults.gameEnd.GSIWTiU[Param]["P"],
        this.estimationOfResults.gameEnd.GSIWTiU[Param]["NT"],
        this.estimationOfResults.gameEnd.GSIWTiU[Param]["LR"],
        this.estimationOfResults.gameEnd.GSIWTiU[Param]["I"],
        this.estimationOfResults.gameEnd.GSIWTiU[Param]["SS"],
        this.estimationOfResults.gameEnd.GSIWTiU[Param]["Panic"],
        this.estimationOfResults.gameEnd.GSIWTiU[Param]["F"]
      ]
      alert(this.gameScore.endTime,"1-3 Game END");
    }

    EndTimeInLastGame(time) {
      if ( time <= 30 ){
        this.gameScore.endTime = [
          this.estimationOfResults.gameEnd.TTtFNS["0-30"]["LC"],
          this.estimationOfResults.gameEnd.TTtFNS["0-30"]["BTM"],
          this.estimationOfResults.gameEnd.TTtFNS["0-30"]["P"],
          this.estimationOfResults.gameEnd.TTtFNS["0-30"]["NT"],
          this.estimationOfResults.gameEnd.TTtFNS["0-30"]["LR"],
          this.estimationOfResults.gameEnd.TTtFNS["0-30"]["I"],
          this.estimationOfResults.gameEnd.TTtFNS["0-30"]["SS"],
          this.estimationOfResults.gameEnd.TTtFNS["0-30"]["Panic"],
          this.estimationOfResults.gameEnd.TTtFNS["0-30"]["F"]]
      }else if(30 > time && time <= 40){
        this.gameScore.endTime = [
        this.estimationOfResults.gameEnd.TTtFNS["31-40"]["LC"],
        this.estimationOfResults.gameEnd.TTtFNS["31-40"]["BTM"],
        this.estimationOfResults.gameEnd.TTtFNS["31-40"]["P"],
        this.estimationOfResults.gameEnd.TTtFNS["31-40"]["NT"],
        this.estimationOfResults.gameEnd.TTtFNS["31-40"]["LR"],
        this.estimationOfResults.gameEnd.TTtFNS["31-40"]["I"],
        this.estimationOfResults.gameEnd.TTtFNS["31-40"]["SS"],
        this.estimationOfResults.gameEnd.TTtFNS["31-40"]["Panic"],
        this.estimationOfResults.gameEnd.TTtFNS["31-40"]["F"]]
      }else if(40 > time && time <= 50){
        this.gameScore.endTime = [
        this.estimationOfResults.gameEnd.TTtFNS["41-50"]["LC"],
        this.estimationOfResults.gameEnd.TTtFNS["41-50"]["BTM"],
        this.estimationOfResults.gameEnd.TTtFNS["41-50"]["P"],
        this.estimationOfResults.gameEnd.TTtFNS["41-50"]["NT"],
        this.estimationOfResults.gameEnd.TTtFNS["41-50"]["LR"],
        this.estimationOfResults.gameEnd.TTtFNS["41-50"]["I"],
        this.estimationOfResults.gameEnd.TTtFNS["41-50"]["SS"],
        this.estimationOfResults.gameEnd.TTtFNS["41-50"]["Panic"],
        this.estimationOfResults.gameEnd.TTtFNS["41-50"]["F"]]
      }else if(50 > time && time <= 60){
        this.gameScore.endTime = [
        this.estimationOfResults.gameEnd.TTtFNS["51-60"]["LC"],
        this.estimationOfResults.gameEnd.TTtFNS["51-60"]["BTM"],
        this.estimationOfResults.gameEnd.TTtFNS["51-60"]["P"],
        this.estimationOfResults.gameEnd.TTtFNS["51-60"]["NT"],
        this.estimationOfResults.gameEnd.TTtFNS["51-60"]["LR"],
        this.estimationOfResults.gameEnd.TTtFNS["51-60"]["I"],
        this.estimationOfResults.gameEnd.TTtFNS["51-60"]["SS"],
        this.estimationOfResults.gameEnd.TTtFNS["51-60"]["Panic"],
        this.estimationOfResults.gameEnd.TTtFNS["51-60"]["F"]]
      }else if(60 > time && time  <= 70){
        this.gameScore.endTime = [
        this.estimationOfResults.gameEnd.TTtFNS["61-70"]["LC"],
        this.estimationOfResults.gameEnd.TTtFNS["61-70"]["BTM"],
        this.estimationOfResults.gameEnd.TTtFNS["61-70"]["P"],
        this.estimationOfResults.gameEnd.TTtFNS["61-70"]["NT"],
        this.estimationOfResults.gameEnd.TTtFNS["61-70"]["LR"],
        this.estimationOfResults.gameEnd.TTtFNS["61-70"]["I"],
        this.estimationOfResults.gameEnd.TTtFNS["61-70"]["SS"],
        this.estimationOfResults.gameEnd.TTtFNS["61-70"]["Panic"],
        this.estimationOfResults.gameEnd.TTtFNS["61-70"]["F"]]
      }else if(70 > time && time  <= 80){
        this.estimationOfResults.gameEnd.TTtFNS["71-80"]["LC"],
        this.estimationOfResults.gameEnd.TTtFNS["71-80"]["BTM"],
        this.estimationOfResults.gameEnd.TTtFNS["71-80"]["P"],
        this.estimationOfResults.gameEnd.TTtFNS["71-80"]["NT"],
        this.estimationOfResults.gameEnd.TTtFNS["71-80"]["LR"],
        this.estimationOfResults.gameEnd.TTtFNS["71-80"]["I"],
        this.estimationOfResults.gameEnd.TTtFNS["71-80"]["SS"],
        this.estimationOfResults.gameEnd.TTtFNS["71-80"]["Panic"],
        this.estimationOfResults.gameEnd.TTtFNS["71-80"]["F"]
      }else if(80 > time && time  <= 90){
        this.gameScore.endTime = [
        this.estimationOfResults.gameEnd.TTtFNS["81-90"]["LC"],
        this.estimationOfResults.gameEnd.TTtFNS["81-90"]["BTM"],
        this.estimationOfResults.gameEnd.TTtFNS["81-90"]["P"],
        this.estimationOfResults.gameEnd.TTtFNS["81-90"]["NT"],
        this.estimationOfResults.gameEnd.TTtFNS["81-90"]["LR"],
        this.estimationOfResults.gameEnd.TTtFNS["81-90"]["I"],
        this.estimationOfResults.gameEnd.TTtFNS["81-90"]["SS"],
        this.estimationOfResults.gameEnd.TTtFNS["81-90"]["Panic"],
        this.estimationOfResults.gameEnd.TTtFNS["81-90"]["F"]]
      }else if(90 > time && time  <= 100){
        this.gameScore.endTime = [
        this.estimationOfResults.gameEnd.TTtFNS["91-100"]["LC"],
        this.estimationOfResults.gameEnd.TTtFNS["91-100"]["BTM"],
        this.estimationOfResults.gameEnd.TTtFNS["91-100"]["P"],
        this.estimationOfResults.gameEnd.TTtFNS["91-100"]["NT"],
        this.estimationOfResults.gameEnd.TTtFNS["91-100"]["LR"],
        this.estimationOfResults.gameEnd.TTtFNS["91-100"]["I"],
        this.estimationOfResults.gameEnd.TTtFNS["91-100"]["SS"],
        this.estimationOfResults.gameEnd.TTtFNS["91-100"]["Panic"],
        this.estimationOfResults.gameEnd.TTtFNS["91-100"]["F"]]
      }else if(100 > time && time  <= 115){
        this.gameScore.endTime = [
        this.estimationOfResults.gameEnd.TTtFNS["101-115"]["LC"],
        this.estimationOfResults.gameEnd.TTtFNS["101-115"]["BTM"],
        this.estimationOfResults.gameEnd.TTtFNS["101-115"]["P"],
        this.estimationOfResults.gameEnd.TTtFNS["101-115"]["NT"],
        this.estimationOfResults.gameEnd.TTtFNS["101-115"]["LR"],
        this.estimationOfResults.gameEnd.TTtFNS["101-115"]["I"],
        this.estimationOfResults.gameEnd.TTtFNS["101-115"]["SS"],
        this.estimationOfResults.gameEnd.TTtFNS["101-115"]["Panic"],
        this.estimationOfResults.gameEnd.TTtFNS["101-115"]["F"]]
      }else if( time > 116){
        this.gameScore.endTime = [
        this.estimationOfResults.gameEnd.TTtFNS["116+"]["LC"],
        this.estimationOfResults.gameEnd.TTtFNS["116+"]["BTM"],
        this.estimationOfResults.gameEnd.TTtFNS["116+"]["P"],
        this.estimationOfResults.gameEnd.TTtFNS["116+"]["NT"],
        this.estimationOfResults.gameEnd.TTtFNS["116+"]["LR"],
        this.estimationOfResults.gameEnd.TTtFNS["116+"]["I"],
        this.estimationOfResults.gameEnd.TTtFNS["116+"]["SS"],
        this.estimationOfResults.gameEnd.TTtFNS["116+"]["Panic"],
        this.estimationOfResults.gameEnd.TTtFNS["116+"]["F"]]
      }
     alert( this.gameScore.endTime, "5 Game END");
    }


    gameStatistic() {
    let lowConfidence = 0;
    let badTimeMan = 0;
    let perfectionism = 0;
    let negThink = 0;
    let lackRicuz = 0;
    let impulsivity = 0;
    let slowStarter = 0;
    let panic = 0;
    let frustration = 0;

    if(this.gameScore.parkinglot !== {}) {
      lowConfidence += this.gameScore.parkinglot[0];
      badTimeMan += this.gameScore.parkinglot[1];
      perfectionism += this.gameScore.parkinglot[2];
      negThink += this.gameScore.parkinglot[3];   
      lackRicuz += this.gameScore.parkinglot[4];
      impulsivity += this.gameScore.parkinglot[5];
      slowStarter += this.gameScore.parkinglot[6];
      panic += this.gameScore.parkinglot[7];
      frustration += this.gameScore.parkinglot[8];
    }

    if(this.gameScore.parkinglotLast !== {}) {
      lowConfidence += this.gameScore.parkinglotLast[0];
      badTimeMan += this.gameScore.parkinglotLast[1];
      perfectionism += this.gameScore.parkinglotLast[2];
      negThink += this.gameScore.parkinglotLast[3];   
      lackRicuz += this.gameScore.parkinglotLast[4];
      impulsivity += this.gameScore.parkinglotLast[5];
      slowStarter += this.gameScore.parkinglotLast[6];
      panic += this.gameScore.parkinglotLast[7];
      frustration += this.gameScore.parkinglotLast[8];
    }

    if(this.gameScore.mazerace !== {}) {
        lowConfidence += this.gameScore.mazerace[0];
        badTimeMan += this.gameScore.mazerace[1];
        perfectionism += this.gameScore.mazerace[2];
        negThink += this.gameScore.mazerace[3];   
        lackRicuz += this.gameScore.mazerace[4];
        impulsivity += this.gameScore.mazerace[5];
        slowStarter += this.gameScore.mazerace[6];
        panic += this.gameScore.mazerace[7];
        frustration += this.gameScore.mazerace[8];
      }
      if(this.gameScore.mousetrap !== {}) {
        lowConfidence += this.gameScore.mousetrap[0];
        badTimeMan += this.gameScore.mousetrap[1];
        perfectionism += this.gameScore.mousetrap[2];
        negThink += this.gameScore.mousetrap[3];   
        lackRicuz += this.gameScore.mousetrap[4];
        impulsivity += this.gameScore.mousetrap[5];
        slowStarter += this.gameScore.mousetrap[6];
        panic += this.gameScore.mousetrap[7];
        frustration += this.gameScore.mousetrap[8];
      }
      if(this.gameScore.tower !== {}) {
        lowConfidence += this.gameScore.tower[0];
        badTimeMan += this.gameScore.tower[1];
        perfectionism += this.gameScore.tower[2];
        negThink += this.gameScore.tower[3];   
        lackRicuz += this.gameScore.tower[4];
        impulsivity += this.gameScore.tower[5];
        slowStarter += this.gameScore.tower[6];
        panic += this.gameScore.tower[7];
        frustration += this.gameScore.tower[8];
      }

      if(this.gameScore.endTime !== {}) {
        lowConfidence += this.gameScore.endTime[0];
        badTimeMan += this.gameScore.endTime[1];
        perfectionism += this.gameScore.endTime[2];
        negThink += this.gameScore.endTime[3];   
        lackRicuz += this.gameScore.endTime[4];
        impulsivity += this.gameScore.endTime[5];
        slowStarter += this.gameScore.endTime[6];
        panic += this.gameScore.endTime[7];
        frustration += this.gameScore.endTime[8];
      }

        if (this.gameScore.selfAssessment = 0 ){this.gameSummary.selfAssessment ="You have a good sense of who you are and of your abilities to perform."}
        else if(2 >= this.gameScore.selfAssessment < 5 ){this.gameSummary.selfAssessment="You may have some self-limiting beliefs causing you to doubt your abilities. It is important t for you to study hard, be prepared and then believe and trust yourself. Focus on your goals and become aware of the “little voice” in your head that may be overly negative."}

        if  (this.gameScore.gamesSuccessfullyCompleted == 3){ this.gameSummary.gamesSuccessfullyCompleted = "You manage stress well.  In order to reach your peak performance, practice your routine in order to stay focused and positive." }
        else if  ( 4 >= this.gameScore.gamesSuccessfullyCompleted <= 5){ this.gameSummary.gamesSuccessfullyCompleted = "Your ability to manage stress is commendable. You are confident, focused and work well within a time frame. You stay positive, are quick to see possibilities and solve problems accurately. Practice your routine in order to stay focused and positive." }

        if  (5 > lowConfidence <= 10){ this.gameSummary.lowConfidence = " If you see that you are getting overwhelmed and negative thoughts are appearing as the test gets closer, use the Positive Thinking tool in the app." }
        else if  (11 > lowConfidence <= 19){  this.gameSummary.lowConfidence = " Be patient and trust that you have the ability. Spend time on the positive thinking tool in the app." }
        else if  ( lowConfidence >= 20){  this.gameSummary.lowConfidence = " You may start questioning yourself and losing confidence if you don’t succeed. It’s important for you to stop, do your routine and then start the next question anew. Refocusing your attention is crucial in order to stay positive. Spend some extra time on the Positive Thinking tool in the app." }

        if  (4 > badTimeMan <= 10){ this.gameSummary.badTimeManagement = "You manage the time well. The more practice tests you take, keeping your eye on the clock, the more you will improve your performance." }
        else if  (11 > badTimeMan <= 19){ this.gameSummary.badTimeManagement = "You must focus on the big picture and always be aware of the time. Spending too much time on a hard question or skipping it too quickly is not effective. During the practice tests keep in mind the time factor." }
        else if  ( badTimeMan >= 20){ this.gameSummary.badTimeManagement = "You need to make a plan ahead of time on how long you can spend on each question (or section) and then adjust according to how you’re doing. You always need to be aware of the time and to pace yourself. " }

        if  (10 > perfectionism <= 19){ this.gameSummary.perfectionism = "It’s important for you to be careful and accurate and it is difficult for you to let go of a question you feel you can solve" }
        else if  ( perfectionism >= 20){ this.gameSummary.perfectionism = " You are committed to carefully and accurately find solutions to difficult questions however, you may be spending too much time on a specific question." }

        if  (8 >  negThink <= 19){ this.gameSummary.negativeThinking = "When you are stressed, your negative inner voice may tell you that you “can’t” whereas you probably “can.” " }
        else if  (  negThink >= 20){ this.gameSummary.negativeThinking = "Your inner voice may be too self-critical and pessimistic which will prevent you from trusting your ability to perform. You may skip questions even though you know the answers. " }

        if  (9 >  impulsivity <= 19){ this.gameSummary.impulsivity = "Sometimes you begin a task, get confused and then read the instructions. Be sure to read and understand the instructions first." }
        else if  (  impulsivity >= 20){ this.gameSummary.impulsivity = "You have a tendency to jump right in and tackle the task at hand. It is crucial for you to take the time and READ THE INSTRUCTIONS  before you start to answer any question" }

        if  (9 >  slowStarter <= 19){ this.gameSummary.slowStarter = "You have a tendency to start slowly. Before you begin the test, use your routine to get focused and into your zone so you start with confidence." }
        else if  (  slowStarter >= 20){ this.gameSummary.slowStarter = " You may get overwhelmed when beginning the test.  Try to get focused and into your zone before the test starts by using your routine." }

        if  (4 > panic <= 10){ this.gameSummary.panic = " If you see that you are getting overwhelmed and negative thoughts are appearing as the test gets closer, use the Positive Thinking tool in the app." }
        else if  ( panic > 10){ this.gameSummary.panic = "You have a tendency to stress out when faced with a question that  is unfamiliar to you. " }

        if  (4 > frustration <= 10){ this.gameSummary.frustration = "You may get frustrated and lose your cool when you find a question difficult. Stop, take a deep breath and do your routine. Focus on the physical tools in the app." }
        else if  ( frustration > 10){ this.gameSummary.frustration = "You have a tendency to get frustrated and angry and when you find a question difficult. You must stop, do your routine and gain your composure. Focus on the physical tools in the app." }

        if  (5 > lackRicuz <= 10){ this.gameSummary.concentration = "Your focus is good. During the test, use your power word if you lose concentration and need to refocus. Check out the stress and recovery section." }
        else if  (10 > lackRicuz <= 19){ this.gameSummary.concentration = "Concentration during the test may be difficult for you when you’re feeling the pressure. It’s important to use your power word to get re-focused and to practice your routine. Check out the stress and recovery section." }
        else if  ( lackRicuz >= 20){ this.gameSummary.concentration = "It may be hard for you to be totally focused during the test. Use the concentration tools to bring your mind back. Check out the stress and recovery section." }
  
        console.log(this.gameScore.muteMusic,"WTF")
        if (this.gameScore.muteMusic == 1){this.gameSummary.muteMusic = "Your brain processes information better in a quiet environment. Find a quiet place to study with as little background noise as possible." }
        else {this.gameSummary.muteMusic = ""};
        
    }
}

GamesService.$inject = ['gameSummaryValue','gameScoreValue','estimationOfResults'];
module.exports = GamesService;