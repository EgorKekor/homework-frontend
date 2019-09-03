'use strict'

const MIN_HEIGHT = 3;

const tree = function(height) {
    if (isNaN( (height = Number(height))) ) {
        return null;
    } else if (height < MIN_HEIGHT) {
        return null;
    }

    height = Math.floor(height);

    const d = 2;
    const A1 = 1;
    const n = height - 1;
    let width = A1 + d * (n - 1);

    let template = '';
    for (let pos = 0; pos < width; pos++) {
        template += ' ';
    }

    let resurtTree = '';
    let mid = (width - (width % 2)) / 2;
    for (let i = 0; i < (height - 1); i++) {
        for (let pos = 0; pos < width; pos++) {
            if ( (pos >= (mid - i)) && (pos <= (mid + i)) ) {
                resurtTree += '*';
            } else {
                resurtTree += ' ';
            }
        }
        resurtTree += '\n';
    }

    for (let pos = 0; pos < width; pos++) {
        if (pos == (width - (width % 2)) / 2) {
            resurtTree += '|';
        } else {
            resurtTree += ' ';
        }
    }
    resurtTree += '\n';

    return resurtTree;

};