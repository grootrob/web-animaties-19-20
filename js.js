/*eslint-env browser*/

document.getElementById('section2').addEventListener('click', function () {
    // Using an if statement to check the class
    if (this.classList.contains('bad')) {
        // The box that we clicked has a class of bad so let's remove it and add the good class
        this.classList.remove('bad');
        this.classList.add('good');
    } else {
        // The user obviously can't follow instructions so let's alert them of what is supposed to happen next
        this.classList.remove('good');
        this.classList.add('bad');
    }
});


var htmlModern = document.querySelector('html');
var h1Geel = document.querySelector('h1');
var h2Magenta = document.querySelector('h2');
var h3Cyaan = document.querySelector('h3');
var pCyaan = document.querySelector('p');
var spanGeel = document.querySelector('span');
var spanGeel2 = document.getElementById('modern');
var spanGeel3 = document.getElementById('modernMobile');
var blendMode = document.getElementById('BlauwBolletjes');
var blendMode2 = document.getElementById('RoodBolletjes');
var blendMode3 = document.getElementById('GroenBolletjes');
var blendSpinner = document.getElementById('Spinner');
var button = document.getElementById('modernMobile');



button.addEventListener("click", toggle);

window.addEventListener("keydown", toggle);


function toggle(event) {
    if (event.keyCode === 84, button) {
        htmlModern.classList.toggle('click');
        h1Geel.classList.toggle('clickGeel');
        pCyaan.classList.toggle('clickCyaan');
        h2Magenta.classList.toggle('clickMagenta');
        h3Cyaan.classList.toggle('clickCyaan');
        spanGeel.classList.toggle('clickGeel');
        spanGeel2.classList.toggle('clickGeel');
        spanGeel3.classList.toggle('clickGeel');
        blendMode.classList.toggle('fillMagenta');
        blendMode2.classList.toggle('fillCyaan');
        blendMode3.classList.toggle('fillGeel');
        blendSpinner.classList.toggle('fillSpinner');
    }
};
