// First we detect the click event
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

//(function () {
//    /*************/
//    /* follow me */
//    /*************/
//    let followMe = document.querySelector("#follow-me");
//
//    followMe.onmousemove = handleMouseMove;
//
//    function handleMouseMove(event) {
//        let box = followMe.getBoundingClientRect();
//
//        let body = document.body;
//        let docEl = document.documentElement;
//
//        let scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
//        let scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
//
//        let clientTop = docEl.clientTop || body.clientTop || 0;
//        let clientLeft = docEl.clientLeft || body.clientLeft || 0;
//
//        let top = box.top + scrollTop - clientTop;
//        let left = box.left + scrollLeft - clientLeft;
//
//        let relX = event.pageX - Math.round(left);
//        let relY = event.pageY - Math.round(top);
//
//        document.documentElement.style.setProperty('--midX', relX + 'px');
//        document.documentElement.style.setProperty('--midY', relY + 'px');
//    }
//
//})
