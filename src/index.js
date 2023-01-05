module.exports = function toReadable(number) {
    let numToString = String(number);
    let result = '';
    let firstNumRes = '';
    let secondNumRes = '';
    let thirtNumRes = '';
    let teenNumRes = '';
    let firstNum = Number(numToString[numToString.length - 1]);
    switch (firstNum) {
        case 0:
            firstNumRes = 'zero';
            break;
        case 1:
            firstNumRes = 'one';
            break;
        case 2:
            firstNumRes = 'two';
            break;
        case 3:
            firstNumRes = 'three';
            break;
        case 4:
            firstNumRes = 'four';
            break;
        case 5:
            firstNumRes = 'five';
            break;
        case 6:
            firstNumRes = 'six';
            break;
        case 7:
            firstNumRes = 'seven';
            break;
        case 8:
            firstNumRes = 'eight';
            break;
        case 9:
            firstNumRes = 'nine';
            break;
    }
    let secondNum = Number(numToString[numToString.length - 2]);
    switch (secondNum) {
        case 0:
            secondNumRes = 'zero'; // before ten
            break;
        case 1:
            secondNumRes = 'ten'; //before teen
            break;
        case 2:
            secondNumRes = 'twenty';
            break;
        case 3:
            secondNumRes = 'thirty';
            break;
        case 4:
            secondNumRes = 'forty';
            break;
        case 5:
            secondNumRes = 'fifty';
            break;
        case 6:
            secondNumRes = 'sixty';
            break;
        case 7:
            secondNumRes = 'seventy';
            break;
        case 8:
            secondNumRes = 'eighty';
            break;
        case 9:
            secondNumRes = 'ninety';
            break;
    }

    let thirdNum = Number(numToString[numToString.length - 3]);
    switch (thirdNum) {
        case 1:
            thirtNumRes = 'one hundred';
            break;
        case 2:
            thirtNumRes = 'two hundred';
            break;
        case 3:
            thirtNumRes = 'three hundred';
            break;
        case 4:
            thirtNumRes = 'four hundred';
            break;
        case 5:
            thirtNumRes = 'five hundred';
            break;
        case 6:
            thirtNumRes = 'six hundred';
            break;
        case 7:
            thirtNumRes = 'seven hundred';
            break;
        case 8:
            thirtNumRes = 'eight hundred';
            break;
        case 9:
            thirtNumRes = 'nine hundred';
            break;
    }
    let teenNum = Number(numToString[numToString.length - 1]);
    switch (teenNum) {
        case 1:
            teenNumRes = 'eleven';
            break;
        case 2:
            teenNumRes = 'twelve';
            break;
        case 3:
            teenNumRes = 'thirteen';
            break;
        case 4:
            teenNumRes = 'fourteen';
            break;
        case 5:
            teenNumRes = 'fifteen';
            break;
        case 6:
            teenNumRes = 'sixteen';
            break;
        case 7:
            teenNumRes = 'seventeen';
            break;
        case 8:
            teenNumRes = 'eighteen';
            break;
        case 9:
            teenNumRes = 'nineteen';
            break;
    }

    if (Number(numToString.length) < 2) {
        result = firstNumRes;
    } else if (Number(numToString.length) < 3 && Number(numToString.length) > 1) {
        if (firstNumRes === 'zero' && secondNumRes === 'ten') {
            result = 'ten';
        } else if (secondNumRes === 'ten') {
            result = teenNumRes;
        } else if (firstNumRes === 'zero') {
            result = secondNumRes;
        } else {
            result = `${secondNumRes} ${firstNumRes}`;
        }
    }
    else if (Number(numToString.length) < 4 && Number(numToString.length) > 2) {
        if (firstNumRes === 'zero' && secondNumRes === 'zero') {
            result = `${thirtNumRes}`;
        } else if (firstNumRes === 'zero') {
            result = `${thirtNumRes} ${secondNumRes}`;
        } else if (secondNumRes === 'zero') {
            result = `${thirtNumRes} ${firstNumRes}`;
        } else if (secondNumRes === 'ten') {
            result = `${thirtNumRes} ${teenNumRes}`;
        } else {
            result = `${thirtNumRes} ${secondNumRes} ${firstNumRes}`;
        }
    }
    else {
        return 'Error';
    }
    return result;
};

