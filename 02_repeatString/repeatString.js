const repeatString = function(text, number) {

    if (number == 0) {
        return '';
    } else if (number < 0) {
        return 'ERROR';
    }


    let i = 1;
    let string = text;
    while (i < number) {
        string += text;
        i++;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
