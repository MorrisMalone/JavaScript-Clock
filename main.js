let started = true;

function printTime() {
    const hourHand = document.querySelector('.hour');
    const minHand = document.querySelector('.minute');
    //const secondHand = document.querySelector('.second');
    const now = new Date();
    
    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360;

    if (seconds === 0) {
        //secondHand.classList.remove('transitioned');
        for (let i = 0; i < 60; i++) {
            let colored = document.getElementById(`${i}`);
            setTimeout(function() {colored.classList.remove('colored'); }, i * 3);
        }
        ///setTimeout(function() {secondHand.style.transform = 'rotate(-1deg)'; }, 100);
        document.getElementById('0').classList.add('colored');

    } else {
        //secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
        //secondHand.classList.add('transitioned');

        for (let i = 0; i <= seconds; i++) {
            const dotAndRoman = document.getElementById(`${i}`);
            dotAndRoman.classList.add('colored');
        }
        
    } 
    

    const minutes = now.getMinutes();
    const minutesDegrees = (minutes / 60) * 360;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = (hours / 12) * 360;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

let clock = document.getElementById('berlin');

function populateHourSymbols(roman, index) {
    let div = document.createElement('div');
    let div2 = document.createElement('div');
    div2.setAttribute('id', `${index * 5}`);
    div2.textContent = roman;
    div2.style.transform = `rotate(${360 - (index * 30)}deg)`;
    div.appendChild(div2);

    div.classList.add('roman');
    div.style.transform = `rotate(${index * 30}deg)`;

    clock.appendChild(div);
}

for (let i = 0; i < 60; i++) {
    if (i !== 0 && i % 5 !== 0) {
        let div = document.createElement('div');
        let div2 = document.createElement('div');
        div2.textContent = '.';
        div2.setAttribute('id', `${i}`);
        div2.classList.add('dot-second');
        div.appendChild(div2);

        div.classList.add('roman');
        div.style.transform = `rotate(${i * 6}deg)`;

        clock.appendChild(div);
    }
}

hourSymbols = ['XII', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];

hourSymbols.forEach(populateHourSymbols);

setInterval(printTime, 1000);

printTime();