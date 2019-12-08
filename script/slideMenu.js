var menu = document.getElementById('menu');
var slideMenu = document.getElementsByClassName('phone-nav')[0];

document.addEventListener('click', open, false);

function open(evObj) {
    switch(evObj.target) {
        case menu: slideMenu.style.transform = "translateX(0)"; break;  
        default: slideMenu.style.transform = "translateX(-100%)";
    }
}