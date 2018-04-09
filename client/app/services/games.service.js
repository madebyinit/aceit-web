class GamesService {
    constructor(gameSummaryValue,gameScoreValue){
        this.gameScore = gameScoreValue;
        this.gameSummary = gameSummaryValue;
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
      if(this.gameScore.tower !== {}) {
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

GamesService.$inject = ['gameSummaryValue','gameScoreValue'];
module.exports = GamesService;