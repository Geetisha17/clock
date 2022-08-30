const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function callDegree(a,b){
    return ((a/b)*360)+90;
}

function setDate(){
    const now = new Date();
    const seconds = callDegree(now.getSeconds(),60);
    secondHand.style.transform=`rotate(${seconds}deg)`;
    const min = callDegree(now.getMinutes(),60);
    minHand.style.transform = `rotate(${min}deg)`;
    const hour = callDegree(now.getHours(),12);
    hourHand.style.transform=`rotate(${hour}deg)`;
}

setInterval(setDate,1000);