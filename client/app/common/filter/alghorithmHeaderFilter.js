export default () => {
    return (input) => {
        switch(input) {
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
                return 'Total Time to Finish NOT Successfully';
            case 'TTfLG':
                return 'Total Time for Last Game';
            default:
                return input;
                
        }
    }
}

