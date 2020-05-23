/*eslint-env browser*/

// Invert bolletjes event
// bron: https://www.freecodecamp.org/forum/t/adding-class-to-multiple-elements-same-class-javascript/211922


document.getElementById('section2').addEventListener('click', function () {
    if (this.classList.contains('bad')) {
        this.classList.remove('bad');
        this.classList.add('good');
    } else {
        this.classList.remove('good');
        this.classList.add('bad');
    }
});



// Moderne kleuren event
// bron: https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event

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
