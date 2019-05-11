'use strict';

window.onload = () => {
    initClock();
}

const initClock = () => {
    const clock = document.querySelector('.clock');
    const clockFace = document.createElement('div');
    clockFace.classList.add('clock-face');
    clock.appendChild(clockFace);
    const children = ['hour-hand', 'min-hand', 'second-hand'];
    children.forEach(child =>{
        const hand = document.createElement('div');
        hand.classList.add('hand', child);
        clockFace.appendChild(hand);
    });
    console.log(clock);
}

