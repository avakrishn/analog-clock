'use strict';

window.onload = () => {
    initClock();
}

const initClock = () => {
    const clock = document.querySelector('.analog');
    const title = document.querySelector('.title');
    const h1 = document.querySelectorAll('h1');
    const clockFace = document.createElement('div');
    const children = ['hour-hand', 'min-hand', 'second-hand'];
    title.innerText = 'CURRENT TIME';

    h1.forEach(header => {
        Object.assign(header.style, {color: 'white', textAlign: 'center', fontSize: '40px'});
    });    

    clockFace.classList.add('clock-face');
    clock.append(clockFace);
    
    children.forEach(child =>{
        const hand = document.createElement('div');
        hand.classList.add('hand', child);
        clockFace.appendChild(hand);
    });

    setInterval(setDate, 1000);// should run every second

    function setDate(){ 
        const digital = document.querySelector('.digital');
        const secondHand = document.querySelector('.second-hand'); 
        const minuteHand = document.querySelector('.min-hand');
        const hourHand = document.querySelector('.hour-hand');

        const now = new Date();

        let seconds = now.getSeconds(); // seconds of the current minute
        const secondsDeg = ((seconds/ 60) * 360) + 90; // offset the transform: rotate(90deg); CSS rule
        secondHand.style.transform = `rotate(${secondsDeg}deg)`;

        let minute = now.getMinutes();
        const minuteDeg = ((minute/60) * 360) + 90;
        minuteHand.style.transform = `rotate(${minuteDeg}deg)`;

        let hour = now.getHours();
        const hourDeg = ((hour/12) * 360) + 90;
        hourHand.style.transform = `rotate(${hourDeg}deg)`;

        if(secondsDeg === 449){
            secondHand.style.transform = 'all 0s';

        }else if(secondsDeg === 90){
            secondHand.style.transform = 'all 0.05s';
        }

        if(seconds < 10){
            seconds = "0"+ seconds;
        }
        if(minute < 10){
            minute = "0"+ minute;
        }
        if(hour < 10){
            hour = "0"+ hour;
        }
        digital.innerText = `${hour}:${minute}:${seconds}`;
    }
} 



