'use strict';

window.onload = () => {
    initClock();
}

const initClock = () => {
    const clock = document.querySelector('.analog');
    const title = document.querySelector('h1');
    const clockFace = document.createElement('div');
    const children = ['hour-hand', 'min-hand', 'second-hand'];

    title.innerText = 'CURRENT TIME';
    Object.assign(title.style, {color: 'white', textAlign: 'center'});

    clockFace.classList.add('clock-face');
    clock.append(clockFace);
    
    children.forEach(child =>{
        const hand = document.createElement('div');
        hand.classList.add('hand', child);
        clockFace.appendChild(hand);
    });

    setInterval(setDate, 1000);// should run every second

    function setDate(){ 
        const secondHand = document.querySelector('.second-hand'); 
        const minuteHand = document.querySelector('.min-hand');
        const hourHand = document.querySelector('.hour-hand');

        const now = new Date();

        const seconds = now.getSeconds(); // seconds of the current minute
        const secondsDeg = ((seconds/ 60) * 360) + 90; // offset the transform: rotate(90deg); CSS rule
        secondHand.style.transform = `rotate(${secondsDeg}deg)`;

        if(secondsDeg === 451){
            secondHand.style.transform = 'all 0s';

        }else if(secondsDeg === 90){
            secondHand.style.transform = 'all 0.05s';
        }

        const minute = now.getMinutes();
        const minuteDeg = ((minute/60) * 360) + 90;
        minuteHand.style.transform = `rotate(${minuteDeg}deg)`;

        const hour = now.getHours();
        const hourDeg = ((hour/12) * 360) + 90;
        hourHand.style.transform = `rotate(${hourDeg}deg)`;
    }
} 



