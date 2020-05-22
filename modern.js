var bodyModern = document.querySelector('body');
var h1Geel = document.querySelector('h1');
var h2Magenta = document.querySelector('h2');
var h3Cyaan = document.querySelector('h3');
var pCyaan = document.querySelector('p');
var spanGeel = document.querySelector('span');
var blendMode = document.getElementById('BlauwBolletjes');
var blendMode2 = document.getElementById('RoodBolletjes');
var blendMode3 = document.getElementById('GroenBolletjes');


window.addEventListener("keydown", toggle);

function toggle(event) {
    if (event.keyCode === 77) {
        bodyModern.classList.toggle('click');
        h1Geel.classList.toggle('clickGeel');
        pCyaan.classList.toggle('clickCyaan');
        h2Magenta.classList.toggle('clickMagenta');
        h3Cyaan.classList.toggle('clickCyaan');
        spanGeel.classList.toggle('clickGeel');
        blendMode.classList.toggle('fillMagenta');
        blendMode2.classList.toggle('fillCyaan');
        blendMode3.classList.toggle('fillGeel');
    }
};
