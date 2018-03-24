'use strict';

const number = nodecg.Replicant('number', {defaultValue: 0, persistent: false});

function add(){
    number.value += 1;
}

function subtract(){
    number.value -= 1;
}