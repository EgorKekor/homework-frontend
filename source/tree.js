'use strict'


const tree = (height) => {
    const MIN_HEIGHT = 3;

    if (!Number(height)) {
        return null;
    }

    if (height < MIN_HEIGHT) {
        return null;
    }

    height = Math.floor(height);

    const d = 2;
    const A1 = 1;
    const nMax = height - 1;
    const maxWidth = A1 + d * (nMax - 1);
    const space = ' ';
    const simbol = '*';

    let resurtTree = '';

    for (let i = 0; i < (height - 1); i++) {
        let n = i + 1;
        let width = A1 + d * (n - 1);
        let spaceLenght = (maxWidth - width) / 2;
        
        resurtTree += space.repeat(spaceLenght);
        resurtTree += simbol.repeat(width);
        resurtTree += space.repeat(spaceLenght);
        resurtTree += '\n';
    }

    resurtTree += space.repeat(Math.floor(maxWidth / 2));
    resurtTree += '|';
    resurtTree += space.repeat(Math.floor(maxWidth / 2));
    resurtTree += '\n';

    return resurtTree;

};