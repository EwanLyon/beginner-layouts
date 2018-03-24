'use strict';

const number = nodecg.Replicant('number');

number.on('change', newVal => {
    document.getElementById('text').innerHTML = newVal;
});