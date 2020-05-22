//window.onload = function () {
//
//    var parallaxBox = document.getElementById('section2');
//    var c1left = document.getElementsByClassName('cls-1').offsetLeft,
//        c1top = document.getElementsByClassName('cls-12').offsetTop,
//        c2left = document.getElementsByClassName('cls-3').offsetLeft;
//
//    parallaxBox.onmousemove = function (event) {
//        event = event || window.event;
//        var x = event.clientX - parallaxBox.offsetLeft,
//            y = event.clientY - parallaxBox.offsetTop;
//
//        mouseParallax('cls-1', c1left, c1top, x, y, 5);
//        mouseParallax('cls-2', c2left, c2top, x, y, 15);
//        mouseParallax('cls-3', c3left, c3top, x, y, 30);
//
//    }
//
//}
//
//function mouseParallax(id, left, top, mouseX, mouseY, speed) {
//    var obj = document.getElementById(id);
//    var parentObj = obj.parentNode,
//        containerWidth = parseInt(parentObj.offsetWidth),
//        containerHeight = parseInt(parentObj.offsetHeight);
//    obj.style.left = left - (((mouseX - (parseInt(obj.offsetWidth) / 2 + left)) / containerWidth) * speed) + 'px';
//    obj.style.top = top - (((mouseY - (parseInt(obj.offsetHeight) / 2 + top)) / containerHeight) * speed) + 'px';
//}
