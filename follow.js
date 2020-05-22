(function () {
    /*************/
    /* follow me */
    /*************/
    let followMe = document.querySelector("#modern");

    followMe.onmousemove = handleMouseMove;

    function handleMouseMove(event) {
        let box = followMe.getBoundingClientRect();

        let body = document.body;
        let docEl = document.documentElement;

        let scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
        let scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

        let clientTop = docEl.clientTop || body.clientTop || 0;
        let clientLeft = docEl.clientLeft || body.clientLeft || 0;

        let top = box.top + scrollTop - clientTop;
        let left = box.left + scrollLeft - clientLeft;

        let relX = event.pageX - Math.round(left);
        let relY = event.pageY - Math.round(top);

        document.documentElement.style.setProperty('--midX', relX + 'px');
        document.documentElement.style.setProperty('--midY', relY + 'px');
    }

})
