export default () => (input) => {
  switch (input) {
    case 'SGD':
      return 'Successful Game Duration';
    case 'IB':
      return 'Instruction Button';
    case 'TM':
      return 'Total # of moves';
    case 'NIA':
      return 'No Initial Activity';
    case 'CGDETiU':
      return 'Current Game Duration When Time is Up';
    case 'GSIWTiU':
      return 'Game Sequence ID When Time is Up';
    case 'TTtFNS':
      return 'Total Time to Finish Last Game NOT Successfully';
    case 'TTfLG':
      return 'Total Time for Last Game';
    case true:
      return 'Yes';
    case false:
      return 'No';
    case 'SG':
      return 'Skip Game';
    case 'CGDWTiU':
      return 'Game Duration When Time is Up';
    case 'NoM':
      return 'Number of Moves';
    case 'TTtLGFS':
      return 'Total Time till Last Game Finished Successfully';
    case 'SA':
      return 'Self Assessment';
    case 'GSC':
      return 'Games Successfully Completed';
    case 'MM':
      return 'Muted Music';
    case 'CGSWTiU':
      return 'Current Game Sequence When Time is Up';
    case 'SS':
      return 'Slow Starter';
    case 'I':
      return 'Impulsivity';
    case 'NT':
      return 'Negative Thinking';
    case 'LC':
      return 'Low Confidence ';
    case 'P':
      return 'Perfectionism';
    case 'BTM':
      return 'Bad Time Management';
    case 'F':
      return 'Frustration';
    case 'C':
      return 'Concentration';

    default:
      return input;
  }
};

