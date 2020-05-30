//file: main.js
const trianglify = require('trianglify')

var main = document.querySelector('.main');
var nav = document.querySelector('.nav');

var offset = main.offsetHeight -nav.offsetHeight;

window.onscroll = function() {
    if(window.pageYOffset > offset) {
        nav.classList.remove('bottom-nav');
        nav.classList.add('top-nav');
    }else{
        nav.classList.remove('top-nav');
        nav.classList.add('bottom-nav');
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