'use strict';

window.onload = () => {
    initClock();
}

const initClock = () => {
    const clock = document.querySelector('.clock');
    const children = ['hour-hand', 'min-hand', 'second-hand'];
    children.forEach(child =>{
        const hand = document.createElement('div');
        hand.classList.add('hand', child);
        clock.appendChild(hand);
    });
}

