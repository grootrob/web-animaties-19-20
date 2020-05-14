window.addEventListener('mousemove', onMouseMove);

function onMouseMove(e) {
    var x = e.clientX || e.touches[0].clientX;
    var x = e.clientY || e.touches[0].clientY;

    worldYAngle = -(.5 - (x / window.innerWidth)) * 180;
    worldXAngle = -(.5 - (y / window.innerWidth)) * 180;
    updateView();
    event.preventDefault();
}
