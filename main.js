//file: main.js
const trianglify = require('trianglify');

var main = document.querySelector('.main');
var nav = document.querySelector('.nav');
var top = document.querySelector('.top');

var offset = main.offsetHeight -nav.offsetHeight;

window.onscroll = function() {
    if(window.pageYOffset > offset) {
        nav.classList.remove('bottom-nav');
        nav.classList.add('top-nav');
        top.style["display"] = "inline";
    }else{
        nav.classList.remove('top-nav');
        nav.classList.add('bottom-nav');
        top.style["display"] = "none"
    }
}

main.onclick = function() {
    //declare new trianglify
    var t = new trianglify({
        width: main.clientWidth, 
        height: main.clientHeight
      });  
  
      document.querySelector('canvas').replaceWith(t.toCanvas());
}

window.onload = function() {
    //declare new trianglify
    var t = new trianglify({
      width: window.innerWidth, 
      height: window.innerHeight
    });  

    const canv = t.toCanvas();
    //append it to the body
    main.appendChild(canv);
  };

  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

$(document).ready(function() {

    $(".map-hovers img").hide();
    $(".map-areas area").mouseenter(function() {
        var idx = $(".map-areas area").index(this);
        $(".map-hovers img:eq(" + idx + ")").show();
        return false;
    });
    $(".map-hovers img").mouseleave(function() {
        $(".map-hovers img").hide();
        return false;
    });
    $(".map-areas area").mouseleave(function() {
        $(".map-hovers img").hide();
        return false;
    });
    

});