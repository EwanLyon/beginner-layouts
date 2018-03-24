'use strict';

const number = nodecg.Replicant('number');

number.on('change', newVal => {
    const textElement = document.getElementById('text');
    textElement.style.backgroundColor = "#fff";
    textElement.innerHTML = newVal;

    TweenLite.to(textElement, 1, {backgroundColor: '#2196f3'});

});