const POSITIVE = 'positive';
const CONCENTRATION = 'concentration';
const PHYSICAL = 'physical';

class SummaryController {
  constructor(connection,$state,progressLinear,$timeout) {
    this.connection = connection;
    this.$state = $state;
    this.progressLinear = progressLinear;
    this.$timeout = $timeout;
    this.lowConfidence = '';
    this.badTimeMan = '';
    this.perfectionism = '';
    this.negThink = '';
    this.lackRicuz = '';
    this.impulsivity = '';
    this.slowStarter = '';
    this.panic = '';
    this.frustration = '';
    this.muteMusic = '';
    this.gameSuccComp = '';
    this.guess = '';
  }

  $onInit(){

    let lowConfidence =localStorage.getItem('lowConfidence')
    let badTimeMan =localStorage.getItem('badTimeMan');
    let perfectionism =localStorage.getItem('perfectionism');
    let negThink =localStorage.getItem('negThink');
    let lackRicuz =localStorage.getItem('lackRicuz');
    let impulsivity =localStorage.getItem('impulsivity');
    let slowStarter =localStorage.getItem('slowStarter');
    let panic =localStorage.getItem('panic');
    let frustration =localStorage.getItem('frustration');
    let gameSuccComp = localStorage.getItem('gameSuccComp');
    let guess = localStorage.getItem('guess'); 
    let gsc = 0;


    // this.progressLinear.showProgress();
    this.connection.saveData(true,'summaryComplete');
    this._getUserData();

    if (gameSuccComp == null || guess == null){}else{gsc = parseInt(gameSuccComp, 10); guess = parseInt(gameSuccComp, 10);
      if (guess = gsc ){this.guess ="You have a good sense of who you are and of your abilities to perform."}
      else if(gsc > 2){"You may have some self-limiting beliefs causing you to doubt your abilities. It is important t for you to study hard, be prepared and then believe and trust yourself. Focus on your goals and become aware of the “little voice” in your head that may be overly negative."}
    }
    
    if (gameSuccComp == null ){}else{gameSuccComp = parseInt(gameSuccComp, 10);
      if  (gameSuccComp == 3){ this.gameSuccComp = "You manage stress well.  In order to reach your peak performance, practice your routine in order to stay focused and positive." }
      else if  ( 4 >= gameSuccComp <= 5){ this.gameSuccComp = "Your ability to manage stress is commendable. You are confident, focused and work well within a time frame. You stay positive, are quick to see possibilities and solve problems accurately. Practice your routine in order to stay focused and positive." }
    }

    if (lowConfidence == null ){}else{lowConfidence = parseInt(lowConfidence, 10);
      if  (5 > lowConfidence <= 10){ this.lowConfidence = " If you see that you are getting overwhelmed and negative thoughts are appearing as the test gets closer, use the Positive Thinking tool in the app." }
      else if  (11 > lowConfidence <= 19){ this.lowConfidence = " Be patient and trust that you have the ability. Spend time on the positive thinking tool in the app." }
      else if  ( lowConfidence >= 20){ this.lowConfidence = " You may start questioning yourself and losing confidence if you don’t succeed. It’s important for you to stop, do your routine and then start the next question anew. Refocusing your attention is crucial in order to stay positive. Spend some extra time on the Positive Thinking tool in the app." }
    }

    if (badTimeMan == null ){}else{badTimeMan = parseInt(badTimeMan, 10);
    if  (4 > badTimeMan <= 10){ this.badTimeMan = "You manage the time well. The more practice tests you take, keeping your eye on the clock, the more you will improve your performance." }
    else if  (11 > badTimeMan <= 19){ this.badTimeMan = "You must focus on the big picture and always be aware of the time. Spending too much time on a hard question or skipping it too quickly is not effective. During the practice tests keep in mind the time factor." }
    else if  ( badTimeMan >= 20){ this.badTimeMan = "You need to make a plan ahead of time on how long you can spend on each question (or section) and then adjust according to how you’re doing. You always need to be aware of the time and to pace yourself. " }
    }

    if (perfectionism == null ){}else{perfectionism = parseInt(perfectionism, 10);
    if  (10 > perfectionism <= 19){ this.perfectionism = "It’s important for you to be careful and accurate and it is difficult for you to let go of a question you feel you can solve" }
    else if  ( perfectionism >= 20){ this.perfectionism = " You are committed to carefully and accurately find solutions to difficult questions however, you may be spending too much time on a specific question." }
    }

    if ( negThink == null ){}else{negThink = parseInt(negThink, 10);
    if  (8 >  negThink <= 19){ this.negThink = "When you are stressed, your negative inner voice may tell you that you “can’t” whereas you probably “can.” " }
    else if  (  negThink >= 20){ this.negThink = "Your inner voice may be too self-critical and pessimistic which will prevent you from trusting your ability to perform. You may skip questions even though you know the answers. " }
    }

    if ( impulsivity == null ){}else{impulsivity = parseInt(impulsivity, 10);
    if  (9 >  impulsivity <= 19){ this.impulsivity = "Sometimes you begin a task, get confused and then read the instructions. Be sure to read and understand the instructions first." }
    else if  (  impulsivity >= 20){ this.impulsivity = "You have a tendency to jump right in and tackle the task at hand. It is crucial for you to take the time and READ THE INSTRUCTIONS  before you start to answer any question" }
    }

    if ( slowStarter == null ){}else{slowStarter = parseInt(slowStarter, 10);
    if  (9 >  slowStarter <= 19){ this.slowStarter = "You have a tendency to start slowly. Before you begin the test, use your routine to get focused and into your zone so you start with confidence." }
    else if  (  slowStarter >= 20){ this.slowStarter = " You may get overwhelmed when beginning the test.  Try to get focused and into your zone before the test starts by using your routine." }
    }

    if (panic == null ){}else{panic = parseInt(panic, 10);
    if  (4 > panic <= 10){ this.panic = " If you see that you are getting overwhelmed and negative thoughts are appearing as the test gets closer, use the Positive Thinking tool in the app." }
    else if  ( panic > 10){ this.panic = "You have a tendency to stress out when faced with a question that  is unfamiliar to you. " }
    }

    if (frustration == null ){}else{frustration = parseInt(frustration, 10);
    if  (4 > frustration <= 10){ this.frustration = "You may get frustrated and lose your cool when you find a question difficult. Stop, take a deep breath and do your routine. Focus on the physical tools in the app." }
    else if  ( frustration > 10){ this.frustration = "You have a tendency to get frustrated and angry and when you find a question difficult. You must stop, do your routine and gain your composure. Focus on the physical tools in the app." }
    }

    if (lackRicuz == null ){}else{lackRicuz = parseInt(lackRicuz, 10);
      if  (5 > lackRicuz <= 10){ this.lackRicuz = "Your focus is good. During the test, use your power word if you lose concentration and need to refocus. Check out the stress and recovery section." }
      else if  (10 > lackRicuz <= 19){ this.lowConfidence = "Concentration during the test may be difficult for you when you’re feeling the pressure. It’s important to use your power word to get re-focused and to practice your routine. Check out the stress and recovery section." }
      else if  ( lackRicuz >= 20){ this.lackRicuz = "It may be hard for you to be totally focused during the test. Use the concentration tools to bring your mind back. Check out the stress and recovery section." }
    }

    if (localStorage.getItem('muteMusic') == null ){}else{this.muteMusic = "Your brain processes information better in a quiet environment. Find a quiet place to study with as little background noise as possible." }
  }



  stateGo(name){
    this.$state.go(name);
  }
_getUserData(){
    this.connection.getData().then((res)=>{
      this.user = res;
      this.userSum = {positive:0,concentration:0,physical:0};
      if(_.get(res,'questionnaire')){
        this.sumUserQuestionnaire();
        // this.routineDisabled();
      }else{
        this.$state.go('questionnaire');
      }
        if (this.progressLinear) {
      this.progressLinear.hideProgress();
        }
    },(error)=>{
      console.log(error);
        if (this.progressLinear) {
      this.progressLinear.hideProgress();
        }
    });
  }


  sumUserQuestionnaire(){
    _.forEach(_.get(this.user,'questionnaire'),(value)=>{
      this.userSum[value.category] += value.answer;
    });
  }

}
SummaryController.$inject = ['connection','$state','progressLinear','$timeout'];
export default SummaryController;