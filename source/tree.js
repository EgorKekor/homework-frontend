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
    const a1 = 1;
    const nMax = height - 1;
    const maxWidth = a1 + d * (nMax - 1);
    const space = ' ';
    const simbol = '*';

    let resurtTree = '';

    for (let i = 0; i < (height - 1); i++) {
        let width = a1 + d * i;
        let spaceLenght = (maxWidth - width) / 2;
        
        let spaseString = space.repeat(spaceLenght);
        let bodyString = simbol.repeat(width);

        resurtTree += `${spaseString + bodyString + spaseString}\n`;
    }

    let spaseString = space.repeat(Math.floor(maxWidth / 2));
    resurtTree += `${spaseString}|${spaseString}\n`;

    return resurtTree;

};